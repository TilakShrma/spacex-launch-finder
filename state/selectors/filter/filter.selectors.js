import { createSelector } from 'reselect';

const selectFilter = (state) => state.filters;

export const selectYearFilter = createSelector(
    [selectFilter],
    filters => filters.year
);

export const selectLaunchFilter = createSelector(
    [selectFilter],
    filters => filters.launch
);

export const selectLandFilter = createSelector(
    [selectFilter],
    filters => filters.land
);
