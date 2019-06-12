import {applyMiddleware, combineReducers, createStore} from "redux";
import messageDataReducer from "./reducers/messagesDataReducer";
import messagePostDataReducer from "./reducers/messagesPostDataReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import thunkMiddleware from "redux-thunk"

let reducersBox = combineReducers({
    messagesData: messageDataReducer,
    messagesPostData: messagePostDataReducer,
    usersAll: usersReducer,
    auth: authReducer,
});

let store = createStore(reducersBox, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;