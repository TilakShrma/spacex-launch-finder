import React from 'react';
import { connect } from 'react-redux';

import Filter from '../filter';

import styles from  './filter-container.module.scss';

const FilterContainer = ({ year, launch, land }) => {
    return (
        <div className={styles.filter}>
            <h2 className={styles.heading}>
                Filters
            </h2>
            <div>
                <Filter filterKey='year' {...year}/>
                <Filter filterKey='launch' {...launch}/>
                <Filter filterKey='landing' {...land}/>
            </div>
        </div>
    );
};

const mapStateToProps = ({ filters }) => ({
    year: filters.year,
    launch: filters.launch,
    land: filters.land
});

export default connect(mapStateToProps)(FilterContainer);