import React from 'react';

import { PsnProfileUI } from './components/profile-ui';
import { generatePsnProfile } from './utils/generate-psn-profile';

interface PsnProfileProps {
  npsso: string;
}

export const PsnProfile: React.FC<PsnProfileProps> = async ({ npsso }) => {
  const profile = await generatePsnProfile(npsso);

  return <PsnProfileUI profile={profile} />;
};
