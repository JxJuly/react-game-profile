import React from 'react';

import { steamMockProfile } from './steam-mock-profile';
import { PsnProfileUI } from '../src/psn';
import { SteamProfileUI } from '../src/steam';

import type { IPsnProfile } from '../src/psn';

const profile: IPsnProfile = {
  summary: {
    onlineId: 'July',
    avatarUrl: 'https://abc.com',
    earnedTrophies: {
      platinum: 1,
      gold: 2,
      silver: 3,
      bronze: 5,
    },
  },
  trophyTitles: [
    {
      npServiceName: 'trophy2',
      npCommunicationId: 'NPWR21575_00',
      trophySetVersion: '01.07',
      trophyTitleName: 'Destiny 2',
      trophyTitleIconUrl:
        'https://psnobj.prod.dl.playstation.net/psnobj/NPWR21575_00/45976ee9-344e-423d-940d-5e42fc82e5b8.png',
      trophyTitlePlatform: 'PS5',
      hasTrophyGroups: true,
      definedTrophies: {
        bronze: 8,
        silver: 4,
        gold: 11,
        platinum: 1,
      },
      progress: 53,
      earnedTrophies: {
        bronze: 2,
        silver: 3,
        gold: 6,
        platinum: 0,
      },
      hiddenFlag: false,
      lastUpdatedDateTime: '2021-03-17T21:58:18Z',
    },
    {
      npServiceName: 'trophy2',
      npCommunicationId: 'NPWR22596_00',
      trophySetVersion: '01.00',
      trophyTitleName: "Crash Bandicoot 4: It's About Time",
      trophyTitleIconUrl:
        'https://psnobj.prod.dl.playstation.net/psnobj/NPWR22596_00/aeb3ccd0-9346-4845-8a9e-871cf7a7d9d8.png',
      trophyTitlePlatform: 'PS5',
      hasTrophyGroups: false,
      definedTrophies: {
        bronze: 40,
        silver: 9,
        gold: 2,
        platinum: 1,
      },
      progress: 27,
      earnedTrophies: {
        bronze: 19,
        silver: 0,
        gold: 0,
        platinum: 0,
      },
      hiddenFlag: false,
      lastUpdatedDateTime: '2021-03-17T18:05:41Z',
    },
  ],
};

export const App = () => {
  return (
    <div>
      <PsnProfileUI profile={profile} />
      <SteamProfileUI profile={steamMockProfile} />
    </div>
  );
};
