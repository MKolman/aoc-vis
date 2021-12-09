import { Leaderboard, Member, DayStars } from '@/types/config'

function numberToBase64(n: number): string {
  n = +n
  let b = ''
  while (n > 0) {
    b += String.fromCharCode(n % 256)
    n = (n/256) | 0
  }
  return btoa(b).replace(/=/g, '')
}

function base64ToNumber(b: string): number {
  b = atob(b)
  let n = 0
  for (const c of b.split('').reverse()) {
    n *= 256
    n += c.charCodeAt(0)
  }
  return n
}

function compressDay(day: string, stars: DayStars): string {
  let result = `${day}-${numberToBase64(stars[1].get_star_ts)}`
  if (stars[2]) {
    result += `-${numberToBase64(stars[2].get_star_ts)}`
  }
  return result
}

function decompressDay(s: string): [number, DayStars] {
  const [day, ...stars] = s.split('-')
  const result: DayStars = {1: {get_star_ts: base64ToNumber(stars[0])}}
  if (stars[1]) {
    result[2] = {get_star_ts: base64ToNumber(stars[1])}
  }
  return [+day, result]
}

function compressMember(m: Member): string {
  let result = `${m.id}.${m.name}.${m.stars}.${m.local_score}.${m.global_score}.${m.last_star_ts}`
  for (const [day, stars] of Object.entries(m.completion_day_level)) {
    result += `.${compressDay(day, stars)}`
  }
  return result
}

function decompressMember(s: string): Member {
  const [id, name, stars, localScore, globalScore, lastStarTs, ...days] = s.split('.')
  const m: Member = {
    id: parseInt(id),
    name,
    stars: parseInt(stars),
    local_score: parseInt(localScore),
    global_score: parseInt(globalScore),
    last_star_ts: parseInt(lastStarTs),
    completion_day_level: {},
  }
  for (const [day, stars] of days.map(decompressDay)) {
    m.completion_day_level[day] = stars
  }
  return m
}

function compress(l: Leaderboard): string {
  let result = `${l.owner_id}~${l.event}`
  for (const m of Object.values(l.members)) {
    result += `~${compressMember(m)}`
  }
  return result
}

function decompress(d: string): Leaderboard {
  const [ownerId, event, ...members] = d.split('~')
  const l: Leaderboard = {
    owner_id: parseInt(ownerId),
    event,
    members: {},
  }
  for (const m of members.map(decompressMember)) {
    l.members[m.id] = m
  }
  return l
}

export default {compress, decompress}
