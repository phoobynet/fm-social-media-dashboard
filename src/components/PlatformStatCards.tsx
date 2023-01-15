import styles from './PlatformStatCards.module.scss'
import PlatformStatCard from '@/components/PlatformStatCard'
import { usePlatformStats } from '@/stores/usePlatformStats'

export default function PlatformStatCards() {
  const platformStats = usePlatformStats((state) => state.platformStats)

  if (!platformStats.length) {
    return null
  }

  return (
    <div className={styles.platformStatCards}>
      <header className={styles.header}>
        <h2>Overview - Today </h2>
      </header>
      <div className={styles.cards}>
        {platformStats.map((platformCard, i) => (
          <PlatformStatCard
            platformStat={platformCard}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}
