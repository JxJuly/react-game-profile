import type { SteamOwnedGame } from 'steamwebapi-ts/lib//types/SteamOwnedGame';
import type { SteamPlayerSummary } from 'steamwebapi-ts/lib/types/SteamPlayerSummary';

export type ISteamGame = SteamOwnedGame & {
  name: string;
  img_icon_url: string;
};

export interface ISteamProfile {
  summary?: SteamPlayerSummary & {
    level: number;
  };
  games?: ISteamGame[];
}
