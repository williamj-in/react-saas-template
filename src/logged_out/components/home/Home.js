import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import HeadSection from './HeadSection';
import FeatureSection from './FeatureSection';
import PricingSection from './PricingSection';
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';
import RadarChart from '../charts/RadarChart';

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <PieChart />
      <RadarChart />
      <BarChart />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default Home;
