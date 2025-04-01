import React from 'react';

import { PsnTrophies } from '../trophies';

import type { IPsnUserGame, PsnTrophyCounts } from '../../types';

import './game-item.css';

interface PsnGameItemProps {
  game: IPsnUserGame;
}

const sumTrophyCount = (trophies: Partial<PsnTrophyCounts>) => {
  return Object.values(trophies).reduce((pre, cur) => pre + cur, 0);
};

export const PsnGameItem: React.FC<PsnGameItemProps> = ({ game }) => {
  const defined = sumTrophyCount(game.definedTrophies || {}) || 1;
  const earned = sumTrophyCount(game.earnedTrophies || {});

  const progressNum = (earned * 100) / defined;

  return (
    <div className="psn-game-item">
      {/* cover */}
      <div className="game-cover">
        <img src={game.localizedImageUrl} />
      </div>
      {/* info */}
      <div className="game-info">
        <div className="game-name">{game.localizedName}</div>
        <div className="play-progress">
          <div className="progress-info">
            <PsnTrophies trophies={game.earnedTrophies || {}} className="game-trophies" />
            <div className="progress-num">{progressNum.toFixed(1)}%</div>
          </div>
          <div className="progress-line">
            <div style={{ width: `${progressNum}%` }} />
          </div>
        </div>
      </div>
      {/* duration */}
      <div className="play-duration">{game.playDurationOnlyHour}H</div>
    </div>
  );
};
