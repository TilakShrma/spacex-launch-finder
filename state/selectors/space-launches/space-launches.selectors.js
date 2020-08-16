import { createSelector } from 'reselect';

const selectLaunches = (state) => state.launches;

export const selectLaunchItems = createSelector(
    [selectLaunches],
    launches => launches.launch_items
);

export const selectIsLoading = createSelector(
    [selectLaunches],
    launches => launches.isLoading
);
