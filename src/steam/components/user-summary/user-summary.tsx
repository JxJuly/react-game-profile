import React from 'react';

import { SteamIcon } from '../icons';

import type { ISteamProfile } from '../../types';

import './user-summary.css';

interface SteamUserSummaryProps {
  summary?: ISteamProfile['summary'];
}

const SteamUserSummary: React.FC<SteamUserSummaryProps> = ({ summary }) => {
  return (
    <div className="steam-user-summary">
      {/* avatar */}
      <div className="steam-avatar">
        <img src={summary?.avatarmedium} />
      </div>
      {/* summary */}
      <div>
        {/* name */}
        <div className="steam-user-name">{summary?.personaname}</div>
        {/* description */}
        <div className="steam-user-description">
          <div className="steam-level">
            Level <div className="steam-level-num">{summary?.level}</div>
          </div>
        </div>
      </div>
      <div className="steam-logo">
        <SteamIcon />
      </div>
    </div>
  );
};

export { SteamUserSummary, type SteamUserSummaryProps };
