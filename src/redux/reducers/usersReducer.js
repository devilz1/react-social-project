import {usersAPI} from "../../api/api";

const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCH = "TOGGLE_IS_FETCH";
const TOGGLE_IS_FETCH_BUTTON = "TOGGLE_IS_FETCH_BUTTON";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFetchingButton: false,
    idUserButtonToggle: null,
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
        case TOGGLE_IS_FETCH_BUTTON:
            console.log(action);
            return {
                ...state,
                isFetchingButton: action.action.toggle,
                idUserButtonToggle: action.action.idUserButtonToggle
            };
        default:
            return {
                ...state
            };
    }
};

export const follow = (userId) => ({type: 'FOLLOW', action: userId});
export const setUsers = (users) => ({type: 'SET_USERS', action: users});
export const setCurrentPage = (id_page) => ({type: 'SET_CURRENT_PAGE', action: id_page});
export const setTotalUsersCount = (count) => ({type: 'SET_TOTAL_USERS_COUNT', action: count});
export const setTogglePreloader = (toggle) => ({type: 'TOGGLE_IS_FETCH', action: toggle});
export const setButtonPreloader = (toggle, id_user) => ({type: 'TOGGLE_IS_FETCH_BUTTON', action: {toggle: toggle, idUserButtonToggle: id_user}});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setTogglePreloader(true));
        usersAPI.userGetCount(currentPage, pageSize).then(response => {
            dispatch(setTogglePreloader(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
        });
    };
};

export const getPageChanged = (pageNum, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNum));
        dispatch(setTogglePreloader(true));
        usersAPI.pageGetChange(pageNum, pageSize).then(response => {
            dispatch(setTogglePreloader(false));
            dispatch(setUsers(response.items));
        });
    }
};
export default usersReducer;