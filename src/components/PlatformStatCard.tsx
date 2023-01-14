import styles from './PlatformStatCard.module.scss'
import { PlatformStat } from '@/types/PlatformStat'

interface Props {
  platformStat: PlatformStat
}

export default function PlatformStatCard({ platformStat }: Props) {
  return (
    <div className={styles.platformStatCard}>
      {JSON.stringify(platformStat, null, 2)}
    </div>
  )
}
