import { getUserStats } from '@/data/getUserStats'
import { UserStat } from '@/types/UserStat'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserStat[]>,
) {
  res.status(200).json(await getUserStats())
}
