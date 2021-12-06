type Leaderboard = {
  event: string,
  owner_id: number,
  members: {[id: string]: Member},
}

type Member = {
  id: number,
  name: string|null,
  stars: number,
  local_score: number
  completion_day_level: EventStars,
}

type EventStars = {
  [day: string]: DayStars,
}

type DayStars = {
  1: {get_star_ts: number},
  2: {get_star_ts: number},
}
