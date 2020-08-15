import _ from 'lodash'
 
export const generateFilterYears = (minYear, maxYear) => {
    const years = _.range(minYear, maxYear + 1, 1);
    return years;
};
