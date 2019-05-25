import {combineReducers, createStore} from "redux";
import messageDataReducer from "./reducers/messagesDataReducer";
import messagePostDataReducer from "./reducers/messagesPostDataReducer";
import usersReducer from "./reducers/usersReducer";

let reducersBox = combineReducers({
    messagesData: messageDataReducer,
    messagesPostData: messagePostDataReducer,
    usersAll: usersReducer,
});

let store = createStore(reducersBox);
export default store;