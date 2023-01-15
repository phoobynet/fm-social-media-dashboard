import styles from './DashboardHeader.module.scss'
import Toggle from '@/components/Toggle'
import { useColorScheme } from '@/stores/useColorScheme'
import { useUserStats } from '@/stores/useUserStats'
import { useMemo } from 'react'

export default function DashboardHeader() {
  const totalFollowersFormatted = useUserStats(
    (state) => state.totalFollowersFormatted,
  )

  const isDark = useColorScheme((state) => state.isDark)
  const setIsDark = useColorScheme((state) => state.setIsDark)

  const modeLabel = useMemo(
    () => (isDark ? 'Light Mode' : 'Dark Mode'),
    [isDark],
  )

  return (
    <div className={styles.dashboardHeader}>
      <div className={styles.content}>
        <h1>Social Media Dashboard</h1>
        <div className={styles.totalFollowers}>
          Total Followers: {totalFollowersFormatted}
        </div>
        <div className={styles.colorScheme}>
          <Toggle
            label={modeLabel}
            id="modeToggle"
            value={isDark}
            onChange={(value) => setIsDark(value)}
          />
        </div>
      </div>
    </div>
  )
}
