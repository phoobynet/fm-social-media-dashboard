import { create } from 'zustand'

const KEY = 'fm-social-media-dashboard.color-scheme'

interface UseColorScheme {
  isDark: boolean
  loadColorScheme: () => void
  setIsDark: (isDark: boolean) => void
  toggleColorScheme: () => void
}

export const useColorScheme = create<UseColorScheme>((set, get) => {
  return {
    isDark: false,
    loadColorScheme() {
      const isDark = localStorage.getItem(KEY) === 'true'

      document.documentElement.dataset['mode'] = isDark.toString()

      set({
        isDark,
      })
    },
    setIsDark(isDark: boolean): void {
      const value = isDark ? 'true' : ''
      localStorage.setItem(KEY, value)
      document.documentElement.dataset['mode'] = value
      set({
        isDark,
      })
    },
    toggleColorScheme() {
      get().setIsDark(!get().isDark)
    },
  }
})
