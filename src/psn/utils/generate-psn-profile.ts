import * as psnApi from 'psn-api';

import type { IPsnUserSummary, IPsnProfile } from '../types';

const generatePsnProfile = async (npsso: string): Promise<IPsnProfile> => {
  const accessCode = await psnApi.exchangeNpssoForAccessCode(npsso);
  const authorization = await psnApi.exchangeAccessCodeForAuthTokens(accessCode);

  const [{ profile }, { trophyTitles }] = await Promise.all([
    psnApi.getProfileFromUserName(authorization, 'me'),
    await psnApi.getUserTitles(authorization, 'me', {
      offset: 0,
      limit: 50,
    }),
  ]);

  const summary: IPsnUserSummary = {
    onlineId: profile.onlineId,
    avatarUrl: profile.avatarUrls[0]?.avatarUrl,
    earnedTrophies: profile.trophySummary.earnedTrophies,
  };

  const sortedTrophyTitles = trophyTitles
    // 按照时长排序
    .sort((a, b) => b.progress - a.progress)
    // 取前 5
    .slice(0, 5);

  return {
    summary,
    trophyTitles: sortedTrophyTitles,
  };
};

export { generatePsnProfile };
