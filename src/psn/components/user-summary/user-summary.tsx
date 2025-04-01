import React from 'react';

import { PsnTrophies } from '../trophies';

import type { IPsnUserSummary } from '../../types';

import './user-summary.css';

interface PsnUserSummaryProps {
  summary?: IPsnUserSummary;
}

const PsnUserSummary: React.FC<PsnUserSummaryProps> = ({ summary }) => {
  return (
    <div className="psn-user-summary">
      {/* avatar */}
      <div className="psn-avatar">
        <img src={summary?.avatarUrl} />
      </div>
      {/* summary */}
      <div>
        {/* name */}
        <div className="psn-user-id">{summary?.onlineId}</div>
        {/* trophy */}
        <PsnTrophies trophies={summary?.earnedTrophies || {}} className="summary-trophies" />
      </div>
    </div>
  );
};

export { PsnUserSummary, type PsnUserSummaryProps };
