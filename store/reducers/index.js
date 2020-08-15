import { combineReducers } from 'redux';

import filterReducer from './filter/filter.reducer';

const rootReducer = combineReducers({
    filters: filterReducer,
});

export default rootReducer;
