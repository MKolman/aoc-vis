<template>
  <div>
    <highchart :options="dayData" />
    <br>
    <highchart :options="userData" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  // @ts-ignore
  import timeTicks from '@/lib/timeTicks.ts'

  function clone(o: object): object {
    return JSON.parse(JSON.stringify(o))
  }

  type sData = {avg: [number, number][], [id: string]: [number, number][]}
  export default Vue.extend({
    props: {
      data: {
        type: Array,
        default: null,
      },
    },
    data() {
      return {
        chartTemplate: {
          title: { text: 'Total progression of stars per day' },
          xAxis: {
            title: { text: 'Time since problem open' },
            type: 'logarithmic',
            tickPositions: [],
            labels: {/* fill in formatter later */},
          },
          yAxis: { title: { text: 'Number of stars' } },
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
      dayStars(): sData {
        const allStars: {[id: string]: number[]} = {}
        for (const {part1, part2} of (this.data as any)) {
          for (let day = 0; day < part1.length; day++) {
            const dkey = `Day ${day+1}`
            allStars[dkey] = allStars[dkey] || []
            if (part1[day]) allStars[dkey].push(part1[day])
            if (part2[day]) allStars[dkey].push(part1[day] + part2[day])
          }
        }
        const days = Object.keys(allStars).length
        const result: sData = {avg: []}
        for (const [day, stars] of Object.entries(allStars)) {
          stars.sort((a, b) => a-b)
          result[day] = []
          for (let i = 0; i < stars.length; i++) {
            result[day].push([stars[i], i+1])
          }
        }
        const avgStars = ([] as number[]).concat(...Object.values(allStars))
        avgStars.sort((a, b) => a-b)
        result.avg = avgStars.map((v, i) => [v, i/days])
        return result as any
      },
      userStars(): sData {
        const result: sData = {avg: []}
        let avgStars: number[] = []
        for (const {name, part1, part2} of (this.data as any)) {
          const values: number[] = part1.concat(
            part2.map((v: number, i: number) => v && (v + part1[i]))
          ).filter(Boolean)
          values.sort((a, b) => a-b)
          avgStars = avgStars.concat(values)
          result[name] = values.map((v, i) => [v, i])
        }
        avgStars.sort((a, b) => a-b)
        result.avg = avgStars.map((v, i) => [v, i/this.data.length])
        return result as any
      },
      dayData() {
        const result = (this as any).chartData((this as any).dayStars as sData)
        result.title.text = 'Total progression of stars per day'
        return result
      },
      userData() {
        const result = (this as any).chartData((this as any).userStars as sData)
        result.title.text = 'Total progression of stars per member'
        return result
      },
    },
    methods: {
      chartData(stars: sData) {
        const result = clone((this as any).chartTemplate) as any
        if (Object.keys(stars).length < 2) return result
        result.xAxis.tickPositions = timeTicks.get(stars.avg.map(v => v[0]), Math.log10)
        result.xAxis.labels.formatter = function(){return timeTicks.format(this.value)}

        result.series = [{
          name: 'Average',
          data: stars.avg,
          step: 'left',
          lineWidth: 5,
          color: '#fff',
        }]
        // @ts-ignore
        delete stars.avg
        for (const [label, data] of Object.entries(stars)) {
          result.series.push({
            data,
            name: label,
            step: 'left',
          })
        }
        return result
      },
    },
  })
</script>
