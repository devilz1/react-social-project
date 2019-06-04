const SET_PROFILE = "SET_PROFILE";
const TOGGLE_IS_FETCH = "TOGGLE_IS_FETCH";

let initialState = {
    isFetching: false,
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.data
            };
        case TOGGLE_IS_FETCH:
            return {
                ...state,
                isFetching: action.action
            };

        default: return state
    }
};

export default profileReducer;