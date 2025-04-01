import * as psnApi from 'psn-api';

import type { IPsnUserSummary } from '../types';

function parseISODuration(isoString: string) {
  const regex = /^PT(\d+)H/;
  const matches = isoString.match(regex);

  return Number(matches?.[1]) || 0;
}

const generatePsnProfile = async (npsso: string) => {
  const accessCode = await psnApi.exchangeNpssoForAccessCode(npsso);
  const authorization = await psnApi.exchangeAccessCodeForAuthTokens(accessCode);

  const [{ profile }, { titles }, { trophyTitles }] = await Promise.all([
    psnApi.getProfileFromUserName(authorization, 'me'),
    psnApi.getUserPlayedGames(authorization, 'me', {
      offset: 0,
      limit: 50,
      categories: 'ps4_game,ps5_native_game,pspc_game,unknown',
    }),
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

  const games = titles
    .map((game) => {
      const currentGameTrophy = trophyTitles.find(({ trophyTitleName }) =>
        game.name.includes(trophyTitleName)
      );
      return {
        ...game,
        progress: currentGameTrophy?.progress || 0,
        definedTrophies: currentGameTrophy?.definedTrophies,
        earnedTrophies: currentGameTrophy?.earnedTrophies,
        playDurationOnlyHour: parseISODuration(game.playDuration),
      };
    })
    // 按照时长排序
    .sort((a, b) => b.progress - a.progress)
    // 取前 5
    .slice(0, 5);

  return {
    summary,
    games,
  };
};

export { generatePsnProfile };
