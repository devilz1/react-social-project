import {combineReducers, createStore} from "redux";
import messageDataReducer from "./reducers/messagesDataReducer";
import messagePostDataReducer from "./reducers/messagesPostDataReducer";

let reducersBox = combineReducers({
    messagesData: messageDataReducer,
    messagesPostData: messagePostDataReducer
});

let store = createStore(reducersBox);
export default store;