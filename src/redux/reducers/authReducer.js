const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_FETCH = "TOGGLE_IS_FETCH";

let initialState = {
    login: null,
    email: null,
    id: null,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data.data
            };
        case TOGGLE_IS_FETCH:
            return {
                ...state,
                isFetching: action.data
            };
        default:
            return {
                ...state
            };
    }
};

export default authReducer;