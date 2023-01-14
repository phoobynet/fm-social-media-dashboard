import Dashboard from '@/components/Dashboard'
import { getPlatformStats } from '@/data/getPlatformStats'
import { getUserStats } from '@/data/getUserStats'
import { usePlatformStats } from '@/stores/usePlatformStats'
import { useUserStats } from '@/stores/useUserStats'
import styles from '@/styles/Home.module.scss'
import { PlatformStat } from '@/types/PlatformStat'
import { UserStat } from '@/types/UserStat'
import { GetServerSideProps } from 'next'
import { useEffect } from 'react'

interface Props {
  platformStats?: PlatformStat[]
  userStats?: UserStat[]
}

export default function Home({ platformStats, userStats }: Props) {
  const setPlatformStats = usePlatformStats((state) => state.setPlatformStats)
  const setUserStats = useUserStats((state) => state.setUserStats)

  useEffect(() => {
    ;(async () => {
      await setPlatformStats(platformStats)
      await setUserStats(userStats)
    })()
  }, [])

  return (
    <div className={styles.home}>
      <Dashboard />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [platformStats, userStats] = await Promise.all([
    getPlatformStats(),
    getUserStats(),
  ])

  return {
    props: {
      platformStats,
      userStats,
    },
  }
}
