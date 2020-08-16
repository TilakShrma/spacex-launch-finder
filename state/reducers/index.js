import { combineReducers } from 'redux';

import filterReducer from './filter/filter.reducer';
import spaceLaunchReducer from './space-launch/space-launch.reducer';

const rootReducer = combineReducers({
    filters: filterReducer,
    launches: spaceLaunchReducer,
});

export default rootReducer;
