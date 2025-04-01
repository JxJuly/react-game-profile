import React from 'react';

import clsx from 'clsx';

import { PsnUserGames } from '../user-games';
import { PsnUserSummary } from '../user-summary';

import type { IPsnProfile } from '../../types';

import './profile-ui.css';

interface PsnProfileUIProps {
  profile: IPsnProfile;
  className?: string;
}

export const PsnProfileUI: React.FC<PsnProfileUIProps> = ({ profile, className }) => {
  return (
    <div className={clsx('psn-profile', className)}>
      <PsnUserSummary summary={profile.summary} />
      {profile.games && <PsnUserGames games={profile.games} />}
    </div>
  );
};
