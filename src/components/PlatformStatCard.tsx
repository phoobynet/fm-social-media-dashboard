import styles from './PlatformStatCard.module.scss'
import iconDown from '@/assets/icon-down.svg'
import iconUp from '@/assets/icon-up.svg'
import { iconMap } from '@/lib/iconMap'
import { PlatformStat } from '@/types/PlatformStat'
import Image from 'next/image'
import numeral from 'numeral'
import { useMemo } from 'react'

interface Props {
  platformStat: PlatformStat
}

export default function PlatformStatCard({ platformStat }: Props) {
  const statValue = useMemo(
    () =>
      platformStat.statValue > 9999
        ? numeral(platformStat.statValue).format('0a')
        : platformStat.statValue.toString(),
    [platformStat.statValue],
  )

  const changePct = useMemo(() => {
    const absChangePct = Math.abs(platformStat.changePct)
    return numeral(Math.abs(absChangePct)).format('0%')
  }, [platformStat.changePct])

  return (
    <div className={styles.platformStatCard}>
      <div className={styles.statName}>{platformStat.statName}</div>
      <div className={styles.statValue}>{statValue}</div>
      <div className={styles.platform}>
        <Image
          src={iconMap[platformStat.platform]}
          alt=""
          className={styles.icon}
        />
      </div>
      <div
        className={styles.changePct}
        data-change-up={platformStat.changePct > 0}
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
        {changePct}
      </div>
    </div>
  )
}
