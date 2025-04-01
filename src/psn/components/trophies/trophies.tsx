import React from 'react';

import { clsx } from 'clsx';

import { TrophyIcon } from '../icons/trophy';

import type { PsnTrophyType, TrophyCounts } from '../../types';

import './trophies.css';

const PsnTrophy: React.FC<{ count: number; type: PsnTrophyType }> = ({ count, type }) => {
  return (
    <div className={clsx('psn-trophy', type)}>
      <TrophyIcon />
      <span>{count}</span>
    </div>
  );
};

interface PsnTrophiesProps {
  trophies: Partial<TrophyCounts>;
  className?: string;
}

const PROPHY_TYPE_IDX: PsnTrophyType[] = ['platinum', 'gold', 'silver', 'bronze'];
const PsnTrophies: React.FC<PsnTrophiesProps> = ({ trophies, className }) => {
  const list = PROPHY_TYPE_IDX.map((type) => {
    return {
      type,
      count: trophies[type],
    };
  }).filter((item) => item.count);

  return (
    <div className={clsx('psn-trophies', className)}>
      {list.map((item) => (
        <PsnTrophy type={item.type} count={item.count || 0} />
      ))}
    </div>
  );
};

export { PsnTrophies };
