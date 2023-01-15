import styles from './UserStatCard.module.scss'
import iconDown from '@/assets/icon-down.svg'
import iconUp from '@/assets/icon-up.svg'
import { iconMap } from '@/lib/iconMap'
import { UserStat } from '@/types/UserStat'
import Image from 'next/image'
import numeral from 'numeral'
import { useMemo } from 'react'

interface Props {
  userStat: UserStat
}

export default function UserStatCard({ userStat }: Props) {
  const followersFormatted = useMemo(
    () =>
      userStat.followers > 9999
        ? numeral(userStat.followers).format('0a')
        : userStat.followers.toString(),
    [userStat],
  )
  return (
    <div
      className={styles.userStatCard}
      data-platform={userStat.platform}
    >
      <div className={styles.topBar}></div>
      <div className={styles.content}>
        <div className={styles.name}>
          <Image
            src={iconMap[userStat.platform]}
            alt=""
            className={styles.platformIcon}
          />
          <div>{userStat.name}</div>
        </div>
        <div className={styles.followers}>
          <div className={styles.followersCount}>{followersFormatted}</div>
          <label className={styles.followersLabel}>
            {userStat.platform === 'youtube' ? 'subscribers' : 'followers'}
          </label>
        </div>
        <div
          className={styles.change}
          data-up={userStat.change > 0}
        >
          <Image
            src={iconUp}
            alt=""
            className={styles.changeUpIcon}
          />
          <Image
            src={iconDown}
            alt=""
            className={styles.changeDownIcon}
          />
          <div>{Math.abs(userStat.change)} Today</div>
        </div>
      </div>
    </div>
  )
}
