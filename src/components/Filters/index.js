import React from 'react';
import dynamic from 'next/dynamic';

const FilterOnYears = dynamic(() => import('./FilterOnYears'));
const FilterOnLaunch = dynamic(() => import('./FilterOnLaunch'));
const FilterOnLanding = dynamic(() => import('./FilterOnLanding'));

const Filters = ({
  onChangeYear,
  onChangeLaunchStatus,
  onChangeLandingStatus,
  changedYear,
  launchStatus,
  landingStatus,
}) => {
  return (
    <div>
      <FilterOnYears
        id='filterOnYears'
        onChangeYear={onChangeYear}
        changedYear={changedYear}
      />
      <FilterOnLaunch
        id='filterOnLaunch'
        onChangeLaunchStatus={onChangeLaunchStatus}
        launchStatus={launchStatus}
      />
      <FilterOnLanding
        id='filterOnLanding'
        onChangeLandingStatus={onChangeLandingStatus}
        landingStatus={landingStatus}
      />
    </div>
  );
};

export default Filters;
