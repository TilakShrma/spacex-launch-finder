import React from 'react';

import styles from './filter-button.module.scss';

const FilterButton = ({ value }) => {
    return (
        <button className={styles.filterBtn}>
            {value}
        </button>
    );
};

export default FilterButton;