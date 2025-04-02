import React from 'react';

import { PsnTrophyTitleItem } from './title-item';

import type { PsnTrophyTitle } from '../../types';

import './user-trophy-titles.css';

interface PsnUserGamesProps {
  trophyTitles: PsnTrophyTitle[];
}

export const PsnUserTrophyTitles: React.FC<PsnUserGamesProps> = ({ trophyTitles }) => {
  return (
    <div className="psn-user-games">
      {trophyTitles.map((title) => (
        <PsnTrophyTitleItem trophyTitle={title} key={title.npCommunicationId} />
      ))}
    </div>
  );
};
