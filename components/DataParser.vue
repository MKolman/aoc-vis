<template>
  <div>
    <h2 class="data-status" @click="wantClosed = !wantClosed">
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
      <LeaderboardHistory
        v-model="rawData"
        :style="{ display: noSavedLeaderboards?'none':'block'}"
        :owner-id="data && data.owner_id"
        :owner="owner"
        :event="data && data.event"
        @empty="noSavedLeaderboards = $event"
      />
      <div v-if="noSavedLeaderboards">
        Paste your leaderboard json below. You can get it by clicking
        <span class="a">[API]</span> then <span class="a">[JSON]</span> links on
        <a href="https://adventofcode.com/2021/leaderboard/private">your leaderboard page</a>
        on Advent of Code. The final link will look similar to:
        <a href="https://adventofcode.com/2021/leaderboard/private/view/271869.json">
          https://adventofcode.com<wbr>/2021<wbr>/leaderboard<wbr>/private<wbr>/view<wbr>/271869.json
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

  export default Vue.extend({
    data() {
      return {
        wantClosed: true,
        noSavedLeaderboards: true,
        rawData: '',
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
        return !!this.data?.members && !!this.data.members[this.data.owner_id]
      },
      showSection(): boolean {
        return !this.wantClosed || !this.isDataValid
      },
    },
    watch: {
      stars() {
        this.emit()
      },
    },
    created() {
      this.emit()
    },
    methods: {
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
      },
    },
  })
</script>

<style lang="scss" scoped>
  .data-status {
    cursor: pointer;
  }
</style>
