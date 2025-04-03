import { Steam } from 'steamwebapi-ts';

import type { ISteamProfile } from '../types';

export const generateSteamProfile = async (apiKey: string, steamId: string): Promise<ISteamProfile> => {
  const steamApi = new Steam(apiKey);

  const [summary, level, games] = await Promise.all([
    steamApi.getPlayerSummary(steamId),
    steamApi.getUserLevel(steamId),
    steamApi.getOwnedGames(steamId, true, true),
  ]);

  const sortedGames = games.sort((a, b) => b.playtime_forever - a.playtime_forever).slice(0, 5);

  return {
    summary: {
      ...summary,
      level,
    },
    games: sortedGames,
  } as ISteamProfile;
};
