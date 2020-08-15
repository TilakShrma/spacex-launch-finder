import React from 'react';

import FilterContainer from '../filter-container';
import LaunchesContainer from '../launches-container';

import styles from './homepage.module.scss';

const HomePage = () => {
    return (
        <div className={styles.homepage}>
            <FilterContainer />
            <LaunchesContainer />
        </div>
    );
};

export default HomePage;
