import React from 'react';

import styles from './launch-item-card.module.scss';

const LaunchItemCard = (props) => {
    const {
        mission_name,
        flight_number,
        launch_success,
        mission_id,
        launch_year,
        rocket: {
            first_stage: {cores: [{land_success}]}
        },
        links: {mission_patch}
    } = props;

    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.image_container}>
                    <div 
                        className={styles.image}
                        style={{backgroundImage: `url(${mission_patch})`}} 
                    />
                </div>
                <div className={styles.details_container}>
                    
                    <h3 className={styles.title}>{mission_name} #{flight_number}</h3>

                    <div className={styles.detail}>
                        <h3 className={styles.detail_header}>Mission Ids:</h3>
                        <span className={styles.detail_value}>{(mission_id.length && mission_id) || 'NA'}</span>
                    </div>

                    <div className={styles.detail}>
                        <h3 className={styles.detail_header}>Launch Year:</h3>
                        <span className={styles.detail_value}>{launch_year}</span>
                    </div>

                    <div className={styles.detail}>
                        <h3 className={styles.detail_header}>Successful Launch:</h3>
                        <span className={styles.detail_value}>{`${launch_success}`}</span>
                    </div>

                    <div className={styles.detail}>
                        <h3 className={styles.detail_header}>Successful Land:</h3>
                        <span className={styles.detail_value}>{`${land_success}`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(LaunchItemCard, (prevProps, nextProps) => prevProps === nextProps);
 