import styles from './Dashboard.module.scss'
import DashboardHeader from '@/components/DashboardHeader'
import PlatformStatCards from '@/components/PlatformStatCards'
import UserStatCards from '@/components/UserStatCards'

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <DashboardHeader />
      </div>
      <div className={styles.userStats}>
        <UserStatCards />
      </div>
      <div className={styles.platformStats}>
        <PlatformStatCards />
      </div>
    </div>
  )
}
