import React from 'react';

import FilterButton from '../filter-button';

import styles from './filter.module.scss';

const Filter = ({ filterKey, name, values }) => {
    return (
        <div className={styles.filter}>
            <h4 className={styles.header}>{name}</h4>
            <div className={styles.content}>
                {   
                    values.map(value => (
                    <FilterButton key={value} value={value} filterKey={filterKey}></FilterButton>
                    ))
                }
            </div>
        </div>
    );
};

export default Filter;