type DayStars = {
  1: {get_star_ts: number},
  2?: {get_star_ts: number},
}

type EventStars = {
  [day: string]: DayStars,
}

type Member = {
  id: number,
  name: string|null,
  stars: number,
  local_score: number,
  global_score: number,
  last_star_ts: number,
  completion_day_level: EventStars,
}


type Leaderboard = {
  event: string,
  owner_id: number,
  members: {[id: string]: Member},
}

export { Leaderboard, Member, EventStars, DayStars }
