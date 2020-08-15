import {GET_FILTERS_BY_LANDING, GET_FILTERS_BY_LAUNCH, GET_FILTERS_BY_YEAR} from './filter.types';

export const getFiltersByYear = (payload) => ({
    type: GET_FILTERS_BY_YEAR,
    payload,
});

export const getFiltersByLaunch = (payload) => ({
    type: GET_FILTERS_BY_LAUNCH,
    payload,
});

export const getFiltersByLanding = (payload) => ({
    type: GET_FILTERS_BY_LANDING,
    payload,
});
