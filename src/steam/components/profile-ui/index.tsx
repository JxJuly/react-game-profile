import React from 'react';

import { SteamUserGames } from '../user-games';
import { SteamUserSummary } from '../user-summary';

import type { ISteamProfile } from '../../types';
import './profile-ui.css';

export interface SteamProfileUIProps {
  profile: ISteamProfile;
}

export const SteamProfileUI: React.FC<SteamProfileUIProps> = ({ profile }) => {
  return (
    <div className="steam-profile">
      <SteamUserSummary summary={profile.summary} />
      <SteamUserGames games={profile.games || []} />
    </div>
  );
};
