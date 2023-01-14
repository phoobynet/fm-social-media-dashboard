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
      {platformStats.map((platformCard, i) => (
        <PlatformStatCard
          platformStat={platformCard}
          key={i}
        />
      ))}
    </div>
  )
}
