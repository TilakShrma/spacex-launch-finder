import { generateFilterYears } from '../../../utils/filters/filter.utils';

const INITIAL_STATE = {
    year: {
        name: 'Launch Year',
        values: generateFilterYears(2006, 2020),
    },
    launch: {
        name: 'Successful Launch',
        values: ['True', 'False'],
    },
    land: {
        name: 'Successful Landing',
        values: ['True', 'False']
    }

};

const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default filterReducer;