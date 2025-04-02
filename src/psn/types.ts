import type { TrophyTitle } from 'psn-api';

export type PsnTrophyTitle = TrophyTitle;
export type PsnTrophyType = 'platinum' | 'gold' | 'silver' | 'bronze';

export interface PsnTrophyCounts {
  bronze: number;
  silver: number;
  gold: number;
  platinum: number;
}

export interface IPsnUserSummary {
  /** 在线 id */
  onlineId?: string;
  /** 头像 */
  avatarUrl?: string;
  /** 拥有的奖杯 */
  earnedTrophies?: PsnTrophyCounts;
}
export interface IPsnUserGame {
  playDurationOnlyHour?: number;
  definedTrophies?: PsnTrophyCounts;
  earnedTrophies?: PsnTrophyCounts;
  localizedName?: string;
  localizedImageUrl?: string;
  [key: string]: any;
}

export interface IPsnProfile {
  summary?: IPsnUserSummary;
  trophyTitles?: PsnTrophyTitle[];
}
