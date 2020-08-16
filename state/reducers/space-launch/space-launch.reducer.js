import { FETCH_ALL_LAUCHES, FETCHING_LAUNCHES, FETCH_FILTERED_LAUNCHES } from '../../actions/space-launch/space-launch.types';

const INITIAL_STATE = {
    isLoading: false,
    launch_items: [],
};

const spaceLaunchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_LAUNCHES: 
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_ALL_LAUCHES: 
            return {
                ...state,
                launch_items: action.payload,
                isLoading: false,
            }
        case FETCH_FILTERED_LAUNCHES:
            return {
                ...state,
                launch_items: action.payload,
                isLoading: false,
            }
        default:
            return state;
    };
};

export default spaceLaunchReducer;
