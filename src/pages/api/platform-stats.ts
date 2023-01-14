import { getPlatformStats } from '@/data/getPlatformStats'
import { PlatformStat } from '@/types/PlatformStat'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PlatformStat[]>,
) {
  res.status(200).json(await getPlatformStats())
}
