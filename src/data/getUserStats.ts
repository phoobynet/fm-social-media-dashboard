import { UserStat } from '@/types/UserStat'

export const getUserStats = async (): Promise<UserStat[]> => {
  return [
    {
      name: '@nathanf',
      platform: 'facebook',
      followers: 1987,
      change: 12,
    },
    {
      name: '@nathanf',
      platform: 'twitter',
      followers: 1044,
      change: 99,
    },
    {
      name: '@realnathanf',
      platform: 'instagram',
      followers: 11000,
      change: 1099,
    },
    {
      name: 'Nathan F.',
      platform: 'youtube',
      followers: 8239,
      change: -144,
    },
  ]
}
