import React from 'react';

import { PsnTrophies } from '../trophies';

import type { PsnTrophyTitle } from '../../types';

import './title-item.css';

interface PsnTrophyTitleItemProps {
  trophyTitle: PsnTrophyTitle;
}

export const PsnTrophyTitleItem: React.FC<PsnTrophyTitleItemProps> = ({ trophyTitle }) => {
  return (
    <div className="psn-game-item">
      {/* cover */}
      <div className="game-cover">
        <img src={trophyTitle.trophyTitleIconUrl} />
      </div>
      {/* info */}
      <div className="game-info">
        <div className="trophy-title-name">{trophyTitle.trophyTitleName}</div>
        <div className="play-progress">
          <div className="progress-info">
            <PsnTrophies trophies={trophyTitle.earnedTrophies} className="game-trophies" />
            <div className="progress-num">{trophyTitle.progress}%</div>
          </div>
          <div className="progress-line">
            <div style={{ width: `${trophyTitle.progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
};
