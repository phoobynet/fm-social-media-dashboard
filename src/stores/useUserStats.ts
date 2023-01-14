import { UserStat } from '@/types/UserStat'
import axios from 'axios'
import deepEqual from 'deep-equal'
import { create } from 'zustand'

export interface UseUserStats {
  userStats: UserStat[]
  totalFollowers: number
  setUserStats: (userStats?: UserStat[]) => Promise<void>
  fetching: boolean
  fetch: () => Promise<void>
}

export const useUserStats = create<UseUserStats>((set, get) => {
  return {
    userStats: [],
    totalFollowers: 0,
    fetching: false,
    async setUserStats(userStats?: UserStat[]): Promise<void> {
      if (!userStats || userStats.length === 0) {
        await get().fetch()
      } else {
        set({
          userStats,
        })
      }
    },
    async fetch(): Promise<void> {
      try {
        set({
          fetching: true,
        })

        const userStats = await axios
          .get<UserStat[]>('/api/user-stats')
          .then((r) => r.data)

        set({
          userStats,
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

useUserStats.subscribe((state, prevState) => {
  if (!deepEqual(state.userStats, prevState.userStats)) {
    useUserStats.setState({
      totalFollowers: state.userStats.reduce((p, c) => {
        return p + c.followers
      }, 0),
    })
  }
})
