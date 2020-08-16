import React from 'react';
import { connect } from 'react-redux';

import { fetchAllLaunches } from '../../state/actions/space-launch/space-launch.action';

import { css } from "@emotion/core";
import MoonLoader from "react-spinners/MoonLoader";

import styles from './launches-container.module.scss';
import LaunchItemCard from '../launch-item-card';

const override = css`
  margin: 25% auto;
`;

class LaunchesContainer extends React.Component {
    componentDidMount() {
        this.props.fetchAllLaunches();
    }

    render() {
        const { isLoading, launchItems } = this.props;

        return (
            <div className={styles.container}>
                <div className={styles.items}>
                    {
                        launchItems && launchItems.map(({flight_number, mission_name, ...itemProps}) => (
                            <LaunchItemCard 
                            key={`${flight_number}-${mission_name}`}
                            flight_number={flight_number}
                            mission_name={mission_name}
                            {...itemProps}
                            />
                        ))
                    }
                </div>
                <div className={styles.spinner}>
                    <MoonLoader
                        size={50}
                        css={override}
                        color={"#123abc"}
                        loading={isLoading}
                    />
                </div>
            </div>
        );
    };
};

const mapStateToProps = ({ launches }) => ({
    isLoading: launches.isLoading,
    launchItems: launches.launch_items,
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllLaunches: () => fetchAllLaunches(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LaunchesContainer);