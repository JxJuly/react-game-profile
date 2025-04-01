import React from 'react';

import { PsnGameItem } from './game-item';

import type { IPsnUserGame } from '../../types';

import './user-games.css';

interface PsnUserGamesProps {
  games: IPsnUserGame[];
}

export const PsnUserGames: React.FC<PsnUserGamesProps> = ({ games }) => {
  return (
    <div className="psn-user-games">
      {games.map((game) => (
        <PsnGameItem game={game} key={game.localizedName} />
      ))}
    </div>
  );
};
