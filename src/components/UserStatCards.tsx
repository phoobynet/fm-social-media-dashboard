import styles from './UserStatCards.module.scss'
import UserStatCard from '@/components/UserStatCard'
import { useUserStats } from '@/stores/useUserStats'

export default function UserStatCards() {
  const userStats = useUserStats((state) => state.userStats)

  if (!userStats.length) {
    return null
  }

  return (
    <div className={styles.userStatCards}>
      {userStats.map((userStat, i) => (
        <UserStatCard
          key={i}
          userStat={userStat}
        />
      ))}
    </div>
  )
}
