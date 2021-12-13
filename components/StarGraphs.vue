<template>
  <div>
    <input
      v-if="data.length > pageSize"
      v-model="scroll"
      type="range"
      orient="vertical"
      min="0"
      :max="data.length-1-pageSize"
    />
    <highchart :options="starsPerUser" />
    <br>
    <highchart :options="starsPerDay" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Stars } from '@/types/stars'
  import timeTicks from '@/lib/timeTicks'

  export default Vue.extend({
    props: {
      data: {
        type: Array,
        default: null,
      },
    },
    data() {
      return {
        scroll: 0,
        pageSize: 20,
        barTemplate: {
          title: { text: 'Number of stars won by each person' },
          chart: { type: 'bar' },
          xAxis: {
            categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
            title: { text: null },
            min: 0,
            max: 1,
          },
          yAxis: {
            min: 0,
            title: { text: 'Number of stars won', align: 'high' },
            labels: { overflow: 'justify' },
          },
          plotOptions: { bar: { dataLabels: { enabled: true } } },
          legend: { enabled: false },
          series: [
            { name: '★', data: [107, 31, 635, 203, 2] },
            {
              name: '★',
              type: 'scatter',
              color: '#FFFF00',
              marker: {
                symbol: 'url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNXB4IiBoZWlnaHQ9IjE1cHgiIHZpZXdCb3g9IjAgMCAzMDAgMjc1IiB2ZXJzaW9uPSIxLjEiPjxwb2x5Z29uIGZpbGw9IiNmZGZmMDAiIHN0cm9rZT0iIzYwNWEwMCIgc3Ryb2tlLXdpZHRoPSIxNSIgcG9pbnRzPSIxNTAsMjUgIDE3OSwxMTEgMjY5LDExMSAxOTcsMTY1IDIyMywyNTEgIDE1MCwyMDAgNzcsMjUxICAxMDMsMTY1IDMxLDExMSAxMjEsMTExIi8+PC9zdmc+)',
              },
              data: [],
              tooltip: {/* */},
            },
          ],
        },
        columnTemplate: {
          chart: { type: 'column' },
          title: { text: 'Number of stars won per day' },
          xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
            title: { text: 'Day' },
          },
          yAxis: {
            min: 0,
            title: { text: 'Total stars won' },
            stackLabels: { enabled: true },
          },
          plotOptions: {
            column: {
              stacking: 'normal',
              dataLabels: { enabled: true },
            },
          },
          legend: { enabled: false },
          series: [{
            name: 'Part two',
            data: [5, 3, 4, 7, 2]
          }, {
            name: 'Part one',
            data: [2, 2, 3, 2, 1]
          }],
        },
      }
    },
    computed: {
      starsPerUser() {
        const result = (this as any).starsPerUserCache
        const numRows: number = (this as any)?.data?.length-1
        const pSize = this.pageSize as number
        result.xAxis.min = Math.max(0, Math.min(+this.scroll, numRows - pSize))
        result.xAxis.max = Math.min(numRows, result.xAxis.min + pSize)
        return result
      },
      starsPerUserCache() {
        const result = (this as any).barTemplate
        const stars = this.data as Stars[]
        result.xAxis.categories = stars.map(v => v.name)
        result.series[0].data = stars.map(v => v.stars)
        result.series[1].data = []

        result.series[1].data = this.scatterData
        result.series[1].tooltip.pointFormatter = function() {
          const day = Math.floor((this.y - 1)/2)
          const part = +(this.y % 1 > 0.2) + 1
          const partx = `part${part}` as 'part1' | 'part2'
          const time = timeTicks.durationFormat(stars[this.x][partx][day] || 0)
          return `Day ${day+1}/${part}<br>${this.category} - ${time}`
        }
        return result
      },
      scatterData(): {x: number, y: number}[] {
        const stars = this.data as Stars[]
        let scatter: {x: number, y: number}[] = []
        for (let memId = 0; memId < stars.length; memId++) {
          const {part1, part2} = stars[memId]
          for (const {dat, shift} of [{dat: part1, shift: 1}, {dat: part2, shift: 1.5}]) {
            scatter = scatter.concat(
              dat.map((v, day) => ({x: memId, y: v ? 2*day+shift : 0}))
                 .filter(v => (v.y > 0))
            )
          }
        }
        return scatter
      },
      starsPerDay() {
        const result = (this as any).columnTemplate
        const days = (this.data as Stars[])[0]?.part1?.length || 0
        result.xAxis.categories = Array.from({length: days}, (_, i) => i + 1)
        result.series[0].data = Array(days).fill(0)
        result.series[1].data = Array(days).fill(0)
        for (const {part1, part2} of (this.data as Stars[])) {
          for (let i = 0; i < days; i++) {
            result.series[1].data[i] += part1[i]?1:0
            result.series[0].data[i] += part2[i]?1:0
          }
        }
        return result
      },
    },
  })
</script>

<style>
input[type=range][orient=vertical] {
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* WebKit */
    width: 1em;
    float: right;
    height: 400px;
    transform: rotate(180deg);
}
</style>
