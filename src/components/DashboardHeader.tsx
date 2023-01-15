import styles from './DashboardHeader.module.scss'
import Toggle from '@/components/Toggle'
import { useUserStats } from '@/stores/useUserStats'
import { useMemo, useState } from 'react'

export default function DashboardHeader() {
  const totalFollowersFormatted = useUserStats(
    (state) => state.totalFollowersFormatted,
  )

  const [darkMode, setDarkMode] = useState<boolean>(false)
  const modeLabel = useMemo(
    () => (darkMode ? 'Light Mode' : 'Dark Mode'),
    [darkMode],
  )

  return (
    <div className={styles.dashboardHeader}>
      <h1>Social Media Dashboard</h1>
      <div className={styles.totalFollowers}>
        Total Followers: {totalFollowersFormatted}
      </div>
      <div className={styles.colorScheme}>
        <Toggle
          label={modeLabel}
          id="modeToggle"
          value={darkMode}
          onChange={(value) => setDarkMode(value)}
        />
      </div>
    </div>
  )
}
