<template>
  <div>
    <highchart :options="partOne" :update="['options.series']" />
    <br>
    <highchart :options="partTwo" :update="['options.series']" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

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
            tickPositions: [1, 5, 10, 30, 60, 120, 300, 600, 600*3, 3600, 3600*2, 3600*4, 3600*8, 3600*24, 3600*24*2, 3600*24*4, 3600*24*7].map((v) => Math.log10(v)),
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
        const result = this.setUpChart(
            (this.data as Stars[]).map(s => {return {name: s.name, data: s.part1}})
        )
        result.title.text = 'Time to solve part 1 from problem open'
        return result
      },
      partTwo() {
        const result = this.setUpChart(
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

        let fastest = 3600*24*356
        let slowest = 0
        for (const {data} of result.series) {
          const validData = (data as number[]).filter(v => !!v)
          fastest = Math.min(fastest, ...validData)
          slowest = Math.max(slowest, ...validData)
        }
        fastest = Math.log10(fastest)
        slowest = Math.log10(slowest)
        const ticks = result.yAxis.tickPositions
        let firstValid = 0
        let lastValid = 0
        for (let i = 0; i < ticks.length; i++) {
          if (ticks[i] < fastest) firstValid = i
          if (ticks[i] < slowest) lastValid = i+1
        }
        result.yAxis.tickPositions = ticks.slice(firstValid, lastValid+1)

        // Highcharts overwrites `this` so make a local copy of the formatter.
        const tmpFmt = this.formatTime;
        result.yAxis.labels.formatter = function(){return tmpFmt(this.value)}
        return result
      },
      formatTime(val: number): string {
        const units: [number, string][] = [
          [3600*24*7, 'w'],
          [3600*24, 'd'],
          [3600, 'h'],
          [60, 'm'],
        ]
        for (const [v, u] of units) {
          if (val >= v) return `${val/(v as number)}${u}`
        }
        return `${val}s`
      },
    },
  })
</script>

