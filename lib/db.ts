import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface DB extends DBSchema {
  leaderboard: {
    key: string
    value: {
      ownerId: number
      owner: string
      event: string
      data: string
      saveTime: number
    }
  }
}

const DB_NAME = 'leaderboards'
const DB_VERSION = 1
const STORE_NAME = 'leaderboard'

async function openLeaderboardDB(): Promise<IDBPDatabase<DB>> {
  return await openDB<DB>(DB_NAME, DB_VERSION, {upgrade: upgradeDB})
}

function upgradeDB(db: IDBPDatabase<DB>, oldVersion: number) {
  console.log('Upgrade', oldVersion)
  if (oldVersion < 1) {
    db.createObjectStore(STORE_NAME)
  }
}

function makeKey(ownerId: number, event: string): string {
  return `${ownerId}/${event}`
}

async function save(ownerId: number, owner: string, event: string, data: string) {
  const db = await openLeaderboardDB()
  const obj = {ownerId, owner, event, data, saveTime: Date.now()}
  await db.put(STORE_NAME, obj, makeKey(ownerId, event))
  db.close()
}

async function remove(ownerId: number, event: string) {
  const db = await openLeaderboardDB()
  const tx = db.transaction(STORE_NAME, 'readwrite')
  const store = tx.objectStore(STORE_NAME)
  await store.delete(makeKey(ownerId, event))
  db.close()
}

async function load(ownerId: number, event: string): Promise<string> {
  const db = await openLeaderboardDB()
  const tx = db.transaction(STORE_NAME)
  const store = tx.objectStore(STORE_NAME)
  const leaderboard = await store.get(makeKey(ownerId, event))
  db.close()
  return leaderboard?.data || ""
}

type ShortDesc = {ownerId: number, owner: string, event: string, saveTime: number}

async function getAll(): Promise<ShortDesc[]> {
  const db = await openLeaderboardDB()
  const tx = db.transaction(STORE_NAME)
  const store = tx.objectStore(STORE_NAME)
  const data = await store.getAll()
  db.close()
  return data.map(({ownerId, owner, event, saveTime}: ShortDesc) => ({ownerId, owner, event, saveTime}))
}

export { save, load, remove, getAll, ShortDesc }

