<template>
  <div>
    <h2 class="data-status" v-on:click="wantClosed = !wantClosed">
      <span v-if="isDataValid">
        {{data.members[data.owner_id].name}}'s leaderboard for {{data.event}}
        ({{members.length}} members)
      </span>
      <span v-else-if="rawData.length > 0">
        Invalid leaderboard data.
      </span>
      <span v-else>
        No leaderboard data. Paste it below.
      </span>
      <a v-if="showSection">˅</a>
      <a v-else>&gt;</a>
    </h2>
    <div v-if="showSection">
      Paste your leaderboard json below. You can get it by clicking <a>[API]</a> then <a>[JSON]</a>
      links on <a href="https://adventofcode.com/2021/leaderboard/private">your leaderboard page</a>
      on Advent of Code. The final link will look similar to:
      <a href="https://adventofcode.com/2021/leaderboard/private/view/271869.json">
        https://adventofcode.com<wbr>/2021<wbr>/leaderboard<wbr>/private<wbr>/view<wbr>/271869.json
      </a>
      <br>
      <textarea v-model="rawData"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  type Stars = {
    id: string
    name: string
    part1: (number|null)[]
    part2: (number|null)[]
    stars: number
    score: number
  }

  export default Vue.extend({
    data() {
      return {
        wantClosed: true,
        rawData: '{"members":{"147542":{"last_star_ts":1638509553,"stars":6,"id":"147542","name":"Nejc Kolman","global_score":0,"local_score":70,"completion_day_level":{"3":{"2":{"get_star_ts":1638509553},"1":{"get_star_ts":1638508624}},"2":{"1":{"get_star_ts":1638421624},"2":{"get_star_ts":1638421788}},"1":{"1":{"get_star_ts":1638335417},"2":{"get_star_ts":1638336350}}}},"1617344":{"completion_day_level":{"1":{"1":{"get_star_ts":1638362655},"2":{"get_star_ts":1638362917}},"2":{"1":{"get_star_ts":1638426459},"2":{"get_star_ts":1638426825}},"3":{"1":{"get_star_ts":1638508455},"2":{"get_star_ts":1638509282}}},"local_score":53,"global_score":0,"id":"1617344","name":"Maks Mržek","last_star_ts":1638509282,"stars":6},"204164":{"completion_day_level":{"2":{"2":{"get_star_ts":1638426799},"1":{"get_star_ts":1638426441}},"1":{"2":{"get_star_ts":1638343936},"1":{"get_star_ts":1638342892}},"3":{"1":{"get_star_ts":1638514865},"2":{"get_star_ts":1638519210}}},"global_score":0,"local_score":58,"stars":6,"last_star_ts":1638519210,"name":null,"id":"204164"},"191056":{"id":"191056","name":"Martin Frlin","stars":4,"last_star_ts":1638461858,"local_score":10,"global_score":0,"completion_day_level":{"1":{"1":{"get_star_ts":1638376850},"2":{"get_star_ts":1638378540}},"2":{"2":{"get_star_ts":1638461858},"1":{"get_star_ts":1638461601}}}},"271869":{"stars":6,"last_star_ts":1638518948,"id":"271869","name":"MKolman","global_score":0,"local_score":46,"completion_day_level":{"3":{"1":{"get_star_ts":1638516686},"2":{"get_star_ts":1638518948}},"1":{"1":{"get_star_ts":1638346288},"2":{"get_star_ts":1638346541}},"2":{"1":{"get_star_ts":1638430117},"2":{"get_star_ts":1638430526}}}},"688876":{"completion_day_level":{"1":{"2":{"get_star_ts":1638367551},"1":{"get_star_ts":1638343827}},"2":{"1":{"get_star_ts":1638439910},"2":{"get_star_ts":1638440627}},"3":{"2":{"get_star_ts":1638525824},"1":{"get_star_ts":1638517941}}},"global_score":0,"local_score":30,"last_star_ts":1638525824,"stars":6,"id":"688876","name":"dcrystalj"},"1354111":{"stars":0,"last_star_ts":"0","id":"1354111","name":"pavlalusin","global_score":0,"local_score":0,"completion_day_level":{}},"374193":{"global_score":0,"local_score":40,"completion_day_level":{"2":{"2":{"get_star_ts":1638427611},"1":{"get_star_ts":1638427558}},"1":{"2":{"get_star_ts":1638338952},"1":{"get_star_ts":1638338934}}},"stars":4,"last_star_ts":1638427611,"id":"374193","name":"Simeon"},"398342":{"stars":6,"last_star_ts":1638522371,"id":"398342","name":"Blaž Sašek","completion_day_level":{"1":{"1":{"get_star_ts":1638347209},"2":{"get_star_ts":1638347695}},"2":{"2":{"get_star_ts":1638433424},"1":{"get_star_ts":1638432796}},"3":{"2":{"get_star_ts":1638522371},"1":{"get_star_ts":1638520477}}},"global_score":0,"local_score":37},"1002473":{"completion_day_level":{"3":{"1":{"get_star_ts":1638514321},"2":{"get_star_ts":1638514585}},"1":{"2":{"get_star_ts":1638353543},"1":{"get_star_ts":1638351037}},"2":{"2":{"get_star_ts":1638427847},"1":{"get_star_ts":1638427668}}},"local_score":49,"global_score":0,"id":"1002473","name":"Amadej Kastelic","stars":6,"last_star_ts":1638514585},"29862":{"completion_day_level":{"2":{"1":{"get_star_ts":1638435589},"2":{"get_star_ts":1638435729}},"1":{"1":{"get_star_ts":1638390080},"2":{"get_star_ts":1638390515}},"3":{"1":{"get_star_ts":1638515031},"2":{"get_star_ts":1638517392}}},"global_score":0,"local_score":29,"last_star_ts":1638517392,"stars":6,"name":"Tadej Novak","id":"29862"},"1021413":{"stars":5,"last_star_ts":1638521944,"name":"MFProduction","id":"1021413","global_score":0,"local_score":26,"completion_day_level":{"2":{"1":{"get_star_ts":1638432924},"2":{"get_star_ts":1638433325}},"1":{"1":{"get_star_ts":1638354714},"2":{"get_star_ts":1638358620}},"3":{"1":{"get_star_ts":1638521944}}}}},"event":"2021","owner_id":"271869"}',
      }
    },
    computed: {
      data(): {members: object, event: string, owner_id: string} | null {
        try {
          return JSON.parse(this.rawData)
        } catch(e) {
          return null
        }
      },
      stars(): Array<Stars> {
        const stars: Array<Stars> = []
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
          }
          stars.push(d)
        }
        stars.sort((a, b) => b.stars - a.stars || b.score - a.score)
        return stars
      },
      members(): {id: string, name: string}[] {
        const mem = []
        for (const [id, m] of Object.entries(this.data?.members || {})) {
          mem.push({id, name: m.name})
        }
        return mem
      },
      isDataValid(): boolean {
        return !!this.data
      },
      showSection(): boolean {
        return !this.wantClosed || !this.isDataValid
      },
    },
    methods: {
      getDayStart(day: number): number {
        return Date.UTC(+(this.data?.event || 0), 11, day, 5, 0, 0, 0)/1000
      },
      parseDay(day: number, data?: {1: {get_star_ts: number}, 2: {get_star_ts: number}}): [number|null, number|null] {
        if (!data) return [null, null]
        const dayStart = this.getDayStart(day)
        const p1 = data['1']?.get_star_ts
        const p2 = data['2']?.get_star_ts
        return [p1 && p1 - dayStart, p2 && p2 - p1]
      },
    }
  })
</script>

<style lang="scss">
  .data-status {
    cursor: pointer;
  }
</style>
