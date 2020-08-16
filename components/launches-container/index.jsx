import React from 'react';
import { connect } from 'react-redux';

import LoadingSpinner from '../loading-spinner';

import styles from './launches-container.module.scss';

const LaunchesContainer = ({ isLoading, launchItems }) => {
    return (
        <div className={styles.container}>
            {
                isLoading
                ? <LoadingSpinner />
                : <h2>Space launches</h2>
            }
        </div>
    )
}

const mapStateToProps = ({ launches }) => ({
    isLoading: launches.isLoading,
    launchItems: launches.launch_items,
})

export default connect(mapStateToProps)(LaunchesContainer);