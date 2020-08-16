import _ from 'lodash'
 
import { FILTER_KEYS } from '../../lib/constants';

export const generateFilterYears = (minYear, maxYear) => {
    const years = _.range(minYear, maxYear + 1, 1);
    return years;
};

export const getLaunchFilter = (filterKey, value) => {
    const {YEAR, LANDING, LAUNCH} = FILTER_KEYS;
    switch (filterKey) {
        case YEAR: 
            return {
               launch_year: value, 
            }
        case LANDING:
            return {
                land_success: (value === 'True' || false),
            }
        case LAUNCH:
            return {
                launch_success: (value === 'True' || false),
            }
    };
};
