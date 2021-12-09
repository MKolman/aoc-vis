<template>
  <div>
    <highchart :options="totalStars" />
    <br>
    <highchart :options="starsPerDay" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Stars } from '@/types/stars'

  export default Vue.extend({
    props: {
      data: {
        type: Array,
        default: null,
      },
    },
    data() {
      return {
        barTemplate: {
          title: { text: 'Number of stars won by each person' },
          chart: { type: 'bar' },
          xAxis: {
            categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
            title: { text: null },
          },
          yAxis: {
            min: 0,
            title: { text: 'Number of stars won', align: 'high' },
            labels: { overflow: 'justify' },
          },
          plotOptions: { bar: { dataLabels: { enabled: true } } },
          legend: { enabled: false },
          series: [{ name: "☆", data: [107, 31, 635, 203, 2] }],
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
      totalStars() {
        const result = (this as any).barTemplate
        result.xAxis.categories = (this.data as Stars[]).map(v => v.name)
        result.series[0].data = (this.data as Stars[]).map(v => v.stars)
        return result
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
