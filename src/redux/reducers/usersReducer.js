const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCH = "TOGGLE_IS_FETCH";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.action ? { ...u, followed: !u.followed } : { ...u }
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.action
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.action
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.action
            };
        case TOGGLE_IS_FETCH:
            return {
                ...state,
                isFetching: action.action
            };
        default:
            return {
                ...state
            };
    }
};

export default usersReducer;