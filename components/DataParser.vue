<template>
  <div>
    <h2 @click="wantClosed = !wantClosed" class="data-status">
      <span v-if="isDataValid">
        {{owner}}'s leaderboard for {{data.event}}
        ({{numMembers}} members)
      </span>
      <span v-else-if="rawData.length > 0">
        Invalid leaderboard data.
      </span>
      <span v-else>
        No leaderboard data. Paste it below.
      </span>
      <a v-if="showSection">V</a>
      <a v-else>&gt;</a>
    </h2>
    <div v-if="showSection">
      <div v-if="leaderboards.length" class="saved">
        Paste a new leaderboard JSON to the textbox below or load one of your saved leaderboards:
        <div v-for="lb in leaderboards" :key="`${lb.ownerId}/${lb.event}`">
          <span class="a muted" @click="removeLeaderboard(lb.ownerId, lb.event)">[X]</span>
          {{lb.owner}} ({{lb.event}}):
          <span class="links">
            <span @click="loadLeaderboard(lb.ownerId, lb.event)" class="a">
              [Load]
            </span>
            <a :href="makeAocLink(lb.ownerId, lb.event)">[AoC<ExternalIcon />]</a>
            <a :href="makeJsonLink(lb.ownerId, lb.event)">[JSON<ExternalIcon />]</a>
          </span>
        </div>
      </div>
      <div v-else>
        Paste your leaderboard json below. You can get it by clicking <span class="a">[API]</span>
        then <span class="a">[JSON]</span>
        links on <a href="https://adventofcode.com/2021/leaderboard/private">your leaderboard page</a>
        on Advent of Code. The final link will look similar to:
        <a :href="makeJsonLink(271869, '2021')">
          <span v-for="(part, index) in makeJsonLink(271869, '2021').split('/')" :key="index"><span v-if="index > 0"><wbr>/</span>{{part}}</span>
        </a>
      </div>
      <br>
      <textarea v-model="rawData" placeholder="Paste JSON text here."></textarea>
      <br>
      <br>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  // @ts-ignore
  import * as LeaderboardDB from '@/lib/db.ts'

  export default Vue.extend({
    data() {
      return {
        wantClosed: true,
        rawData: '',
        leaderboards: [] as LeaderboardDB.ShortDesc[],
      }
    },
    computed: {
      data(): Leaderboard | null {
        try {
          return JSON.parse(this.rawData)
        } catch(e) {
          return null
        }
      },
      owner(): string {
        if (!this.isDataValid || this.data === null) return ""
        const id = this.data.owner_id
        return this.data?.members[id]?.name || `anon#${id}`
      },
      stars(): Stars[] {
        const stars: Stars[] = []
        let lastDay = 1
        for (const [id, m] of Object.entries(this.data?.members || {})) {
          const d: Stars = {
            id,
            name: m.name || `anon#${id}`,
            part1: [],
            part2: [],
            stars: m.stars,
            score: m.local_score
          }
          for (let day = 1; day <= 25; day++) {
            const [p1, p2] = this.parseDay(day, m.completion_day_level[day])
            d.part1.push(p1)
            d.part2.push(p2)
            if (p1 && day > lastDay) lastDay = day
          }
          if (d.stars > 0) {
            stars.push(d)
          }
        }
        stars.sort((a, b) => b.stars - a.stars || b.score - a.score)
        for (const {part1, part2} of stars) {
          part1.splice(lastDay)
          part2.splice(lastDay)
        }
        return stars
      },
      numMembers(): number {
        return Object.keys(this.data?.members || {}).length
      },
      isDataValid(): boolean {
        return !!this.data && !!this.data.members[this.data.owner_id]
      },
      showSection(): boolean {
        return !this.wantClosed || !this.isDataValid
      },
    },
    methods: {
      makeAocLink(ownerId: number, event: string): string {
        return `https://adventofcode.com/${event}/leaderboard/private/view/${ownerId}`
      },
      makeJsonLink(ownerId: number, event: string): string {
        return this.makeAocLink(ownerId, event) + '.json'
      },
      makeBreakableJsonLink(ownerId: number, event: string): string {
        return this.makeJsonLink(ownerId, event).replace(/\//g, '<wbr>/')
      },
      getDayStart(day: number): number {
        return Date.UTC(+(this.data?.event || 0), 11, day, 5, 0, 0, 0)/1000
      },
      parseDay(day: number, data?: DayStars): [number|null, number|null] {
        if (!data) return [null, null]
        const dayStart = this.getDayStart(day)
        const p1 = data['1']?.get_star_ts
        const p2 = data['2']?.get_star_ts
        return [p1 && p1 - dayStart, p2 && p2 - p1 || null]
      },
      emit() {
        if (!this.isDataValid || this.data === null) return
        this.$emit('load', this.stars)
        this.saveLeaderboard()
      },
      async loadLeaderboard(ownerId: number, event: string) {
        this.rawData = await LeaderboardDB.load(ownerId, event)
      },
      async removeLeaderboard(ownerId: number, event: string) {
        await LeaderboardDB.remove(ownerId, event)
        await this.reloadLeaderboard()
      },
      async saveLeaderboard() {
        if (!this.isDataValid || this.data === null) return
        await LeaderboardDB.save(this.data.owner_id, this.owner, this.data.event, this.rawData)
        await this.reloadLeaderboard()
      },
      async reloadLeaderboard(preload?: boolean) {
        this.leaderboards = await LeaderboardDB.getAll()
        if (preload && this.leaderboards.length > 0) {
          const selected = this.leaderboards[0]
          this.loadLeaderboard(selected.ownerId, selected.event)
        }
      },
    },
    watch: {
      stars() {
        this.emit()
      },
    },
    created() {
      this.emit()
      if (process.client) this.reloadLeaderboard(true)
    },
  })
</script>

<style lang="scss" scoped>
  .data-status {
    cursor: pointer;
  }

  svg {
    width: 0.55em;
    vertical-align: super;
  }

  .muted {
    opacity: 0.5;
  }

  .saved {
    line-height: 2em;
  }

  .links {
    display: inline-block;

    & > * {
      margin-left: 1em;
      white-space: nowrap;
    }
  }
</style>
