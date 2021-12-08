<template>
  <div>
    Paste a new leaderboard JSON to the textbox below or load one of your saved leaderboards:
    <div v-for="lb in leaderboards" :key="`${lb.ownerId}/${lb.event}`" class="saved">
      <span class="a muted" @click="removeLeaderboard(lb.ownerId, lb.event)">[X]</span>
      {{lb.owner}} ({{lb.event}}):
      <span class="links">
        <span class="a" @click="loadLeaderboard(lb.ownerId, lb.event)">
          [Load]
        </span>
        <a :href="makeAocLink(lb.ownerId, lb.event)">[AoC<ExternalIcon />]</a>
        <a :href="makeJsonLink(lb.ownerId, lb.event)">[JSON<ExternalIcon />]</a>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  // @ts-ignore
  import * as LeaderboardDB from '@/lib/db.ts'

  export default Vue.extend({
    props: {
      value: {
        type: String,
        required: false,
        default: null,
      },
      ownerId: {
        type: [String, Number],
        required: false,
        default: null,
      },
      event: {
        type: String,
        required: false,
        default: null,
      },
      owner: {
        type: String,
        required: false,
        default: null,
      },
    },
    data() {
      return {
        leaderboards: [] as LeaderboardDB.ShortDesc[],
      }
    },
    watch: {
      value() {
        this.saveLeaderboard()
      },
    },
    created() {
      if (process.client) this.reloadLeaderboard(true)
    },
    methods: {
      makeAocLink(ownerId: number, event: string): string {
        return `https://adventofcode.com/${event}/leaderboard/private/view/${ownerId}`
      },
      makeJsonLink(ownerId: number, event: string): string {
        return this.makeAocLink(ownerId, event) + '.json'
      },
      async loadLeaderboard(ownerId: number, event: string) {
        const rawData = await LeaderboardDB.load(ownerId, event)
        this.$emit('input', rawData)
      },
      async removeLeaderboard(ownerId: number, event: string) {
        await LeaderboardDB.remove(ownerId, event)
        await this.reloadLeaderboard()
      },
      async saveLeaderboard() {
        if (!this.value || !this.ownerId || !this.owner || !this.event) return
        await LeaderboardDB.save(this.ownerId, this.owner, this.event, this.value)
        await this.reloadLeaderboard()
      },
      async reloadLeaderboard(preload?: boolean) {
        this.leaderboards = await LeaderboardDB.getAll()
        this.$emit('empty', this.leaderboards.length === 0)
        if (preload && this.leaderboards.length > 0) {
          const selected = this.leaderboards[0]
          this.loadLeaderboard(selected.ownerId, selected.event)
        }
      },
    },
  })
</script>

<style lang="scss" scoped>
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

  svg {
    width: 0.55em;
    vertical-align: super;
  }
</style>
