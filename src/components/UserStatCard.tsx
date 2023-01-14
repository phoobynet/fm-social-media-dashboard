import styles from './UserStatCard.module.scss'
import { UserStat } from '@/types/UserStat'

interface Props {
  userStat: UserStat
}

export default function UserStatCard({ userStat }: Props) {
  return (
    <div className={styles.userStatCard}>
      {JSON.stringify(userStat, null, 2)}
    </div>
  )
}
