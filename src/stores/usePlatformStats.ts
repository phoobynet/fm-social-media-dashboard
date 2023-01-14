import { PlatformStat } from '@/types/PlatformStat'
import axios from 'axios'
import { create } from 'zustand'

export interface UsePlatformStats {
  platformStats: PlatformStat[]
  setPlatformStats: (platformStats?: PlatformStat[]) => Promise<void>
  fetching: boolean
  fetch: () => Promise<void>
}

export const usePlatformStats = create<UsePlatformStats>((set, get) => {
  return {
    platformStats: [],
    fetching: false,
    async setPlatformStats(platformStats?: PlatformStat[]): Promise<void> {
      if (!platformStats || platformStats.length === 0) {
        await get().fetch()
      } else {
        set({
          platformStats,
        })
      }
    },
    async fetch(): Promise<void> {
      try {
        set({
          fetching: true,
        })

        const platformStats = await axios
          .get<PlatformStat[]>('/api/platform-stats')
          .then((r) => r.data)

        set({
          platformStats,
        })
      } catch (e) {
        console.error('Something went wrong', e)
      } finally {
        set({
          fetching: false,
        })
      }
    },
  }
})
