import React from 'react';

import { SteamProfileUI } from './components/profile-ui';
import { generateSteamProfile } from './utils/generate-steam-profile';

interface PsnProfileProps {
  apiKey: string;
  steamId: string;
}

export const SteamProfile: React.FC<PsnProfileProps> = async ({ apiKey, steamId }) => {
  const profile = await generateSteamProfile(apiKey, steamId);

  return <SteamProfileUI profile={profile} />;
};
