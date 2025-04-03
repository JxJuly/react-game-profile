import React from 'react';

import type { ISteamGame } from '../../types';

import './user-games.css';

const SteamGameItem = ({ game }: { game: ISteamGame }) => {
  const imgUrl = `https://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/capsule_616x353.jpg`;
  const playedHours = game.playtime_forever / 24;
  return (
    <div className="steam-game-item">
      {/* cover */}
      <div className="game-cover">
        <img src={imgUrl} />
      </div>
      {/* info */}
      <div className="game-info">
        <div className="game-name">{game.name}</div>
        <div className="played-time">{playedHours.toFixed()}H</div>
      </div>
    </div>
  );
};

interface SteamUserGamesProps {
  games: ISteamGame[];
}

export const SteamUserGames: React.FC<SteamUserGamesProps> = ({ games }) => {
  return (
    <div className="psn-user-games">
      {games.map((game) => (
        <SteamGameItem game={game} key={game.appid} />
      ))}
    </div>
  );
};
