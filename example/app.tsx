import React from 'react';

import { PsnProfileUI } from '../src/psn';

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
  games: [
    {
      localizedName: 'Game 1',
      earnedTrophies: {
        platinum: 1,
        gold: 2,
        silver: 3,
        bronze: 5,
      },
      definedTrophies: {
        platinum: 1,
        gold: 2,
        silver: 3,
        bronze: 5,
      },
      playDurationOnlyHour: 10,
    },
    {
      localizedName: 'Game 1',
      earnedTrophies: {
        platinum: 0,
        gold: 10,
        silver: 3,
        bronze: 15,
      },
      definedTrophies: {
        platinum: 1,
        gold: 27,
        silver: 3,
        bronze: 20,
      },
      playDurationOnlyHour: 10,
    },
  ],
};

export const App = () => {
  return <PsnProfileUI profile={profile} />;
};
