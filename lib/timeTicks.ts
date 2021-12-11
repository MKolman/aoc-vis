const ticks = [1, 5, 10, 30, 60, 120, 300, 600, 600*3, 3600, 3600*2, 3600*4, 3600*8, 3600*24,
               3600*24*2, 3600*24*4, 3600*24*7, 3600*24*7*2, 3600*24*7*4, 3600*24*7*8]
export default {
  format(val: number): string {
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
  get(vals: number[], transform: any|null): number[] {
    const min = Math.min(...vals)
    const max = Math.max(...vals)
    let first = 0
    let last = 0
    for (let i = 0; i < ticks.length; i++) {
      if (ticks[i] < min) first = i
      if (ticks[i] < max) last = i+2
    }
    const result = ticks.slice(first, last)
    if (!transform) return result
    return result.map(transform)
  },
  durationFormat(val: number): string {
    const zp = (num: number) => String(num).padStart(2, '0')
    val = +val  
    const sec = zp(val % 60)
    val = (val / 60) | 0
    const min = zp(val % 60)
    val = (val / 60) | 0
    const hrs = zp(val % 24)
    val = (val / 24) | 0
    const day = val
    let result = `${hrs}:${min}:${sec}`
    if (day > 0) result = `${day}d ${result}`
    return result
  },
} 
