import { PlatformStat } from '@/types/PlatformStat'

// fake platform stats
export const getPlatformStats = async (): Promise<PlatformStat[]> => {
  return [
    {
      platform: 'facebook',
      statName: 'Page Views',
      statValue: 87,
      changePct: 0.03,
    },
    {
      platform: 'facebook',
      statName: 'Likes',
      statValue: 52,
      changePct: -0.02,
    },
    {
      platform: 'instagram',
      statName: 'Likes',
      statValue: 5462,
      changePct: 22.57,
    },
    {
      platform: 'instagram',
      statName: 'Profile Views',
      statValue: 52000,
      changePct: 13.75,
    },
    {
      platform: 'twitter',
      statName: 'Retweets',
      statValue: 117,
      changePct: 3.03,
    },
    {
      platform: 'twitter',
      statName: 'Likes',
      statValue: 507,
      changePct: 5.53,
    },
    {
      platform: 'youtube',
      statName: 'Likes',
      statValue: 107,
      changePct: -0.19,
    },
    {
      platform: 'youtube',
      statName: 'Total Views',
      statValue: 1407,
      changePct: -0.12,
    },
  ]
}
