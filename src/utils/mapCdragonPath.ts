import { kCdragonUrl } from 'constants/kCDragonApi'

// /lol-game-data/assets/<path> is mapped to plugins/rcp-be-lol-game-data/global/default/<lowercased-path>.
export const mapCdragonPath = (path: string) => {
  const mappedPath = path
    .replace(
      '/lol-game-data/assets/',
      'plugins/rcp-be-lol-game-data/global/default/',
    )
    .toLowerCase()
  const url = `${kCdragonUrl}${mappedPath}`

  return url
}
