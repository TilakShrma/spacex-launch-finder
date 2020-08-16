import React from 'react';
import { connect } from 'react-redux';

import { fetchFilteredLaunches } from '../../state/actions/space-launch/space-launch.action';

import styles from './filter-button.module.scss';

const FilterButton = ({ value, filterLaunches, filterKey }) => {
    return (
        <button className={styles.filterBtn} onClick={() => filterLaunches(filterKey, value)}>
            {value}
        </button>
    );
};

const mapDispatchToProps = (dispatch) => ({
    filterLaunches: (filterKey, value) => fetchFilteredLaunches(dispatch, filterKey, value), 
});

export default connect(null, mapDispatchToProps)(FilterButton);
