import React from 'react';

import styles from  './filter-container.module.scss';

const FilterContainer = () => {
    return (
        <div className={styles.filter}>
            <h3 className={styles.heading}>
                Filters
            </h3>
        </div>
    );
};

export default FilterContainer;