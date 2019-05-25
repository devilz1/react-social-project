const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [],
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
                users: action.action
            };
        default:
            return {
                ...state
            };
    }
};

export default usersReducer;