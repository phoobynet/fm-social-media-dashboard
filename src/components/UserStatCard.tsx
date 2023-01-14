import styles from './UserStatCard.module.scss'
import { UserStat } from '@/types/UserStat'

interface Props {
  userStat: UserStat
}

export default function UserStatCard({ userStat }: Props) {
  return (
    <div className={styles.userStatCard}>
      <div className={styles.topBar}></div>
      <div className={styles.content}>
        <div>{userStat.name}</div>
        <div className={styles.followers}>
          <div>{userStat.followers}</div>
          <label>followers</label>
        </div>
        <div>{userStat.change} Today</div>
      </div>
    </div>
  )
}
