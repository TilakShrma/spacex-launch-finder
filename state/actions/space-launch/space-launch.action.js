import { FETCHING_LAUNCHES ,FETCH_ALL_LAUCHES, FETCH_FILTERED_LAUNCHES } from './space-launch.types';

import { spacexService } from '../../../services';

import { getLaunchFilter } from '../../../utils/filters/filter.utils';

export const fetchFilteredLaunches = (dispatch, filterKey, value) => {
    dispatch({
        type: FETCHING_LAUNCHES,
    });
    return spacexService
    .getLaunches(getLaunchFilter(filterKey, value))
    .then(response => {
        dispatch({
            type: FETCH_FILTERED_LAUNCHES,
            payload: response
        });
    });
};

export const fetchAllLaunches = (dispatch) => {
    dispatch({
        type: FETCHING_LAUNCHES,
    });
    return spacexService
    .getLaunches()
    .then(response => {
        dispatch({
            type: FETCH_ALL_LAUCHES,
            payload: response,
        });
    });
};
