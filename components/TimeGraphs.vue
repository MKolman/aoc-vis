<template>
  <div>
    <highchart :options="partOne" />
    <br>
    <highchart :options="partTwo" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  // @ts-ignore
  import timeTicks from '@/lib/timeTicks.ts'

  function clone(o: object): object {
    return JSON.parse(JSON.stringify(o))
  }

  export default Vue.extend({
    props: ["data"],
    data() {
      return {
        chartTemplate: {
          title: { text: 'Time to solve part 1 from problem open' },
          yAxis: {
            title: { text: 'Time to solve' },
            type: 'logarithmic',
            tickPositions: [],
            labels: {/* fill in formatter later */},
          },
          xAxis: { title: { text: 'Day' } },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
          },
          plotOptions: {
            series: {
              label: {
                connectorAllowed: false,
              },
              pointStart: 1,
            },
          },
          series: [],
          responsive: {
            rules: [{
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom',
                },
              },
            }],
          },
        },
      }
    },
    computed: {
      partOne() {
        const result = (this as any).setUpChart(
            (this.data as Stars[]).map(s => {return {name: s.name, data: s.part1}})
        )
        result.title.text = 'Time to solve part 1 from problem open'
        return result
      },
      partTwo() {
        const result = (this as any).setUpChart(
            (this.data as Stars[]).map(s => {return {name: s.name, data: s.part2}})
        )
        result.title.text = 'Time to solve part 2 after solving part 1'
        return result
      },
    },
    methods: {
      setUpChart(series: {name: string, data: any[]}[]): any {
        const result = clone(this.chartTemplate) as any
        result.series = series

        const allData = ([] as number[]).concat(...series.map(v => v.data)).filter(Boolean)
        result.yAxis.tickPositions = timeTicks.get(allData, Math.log10)
        result.yAxis.labels.formatter = function(){return timeTicks.format(this.value)}
        return result
      },
    },
  })
</script>

