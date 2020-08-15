import React from 'react';

import styles from './page-header.module.scss';

const PageHeader = () => {
    return (
        <div className={styles.header}>
            <span className={styles.content}> SpaceX Launch Programs</span>
        </div>
    );
};

export default PageHeader;
