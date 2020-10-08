import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";
import UsersReducer from "./usersReducer";
import auth from "./auth";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from  "redux-form"
import appReducer from "./appReducer";

let reducers =combineReducers({
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    sidebar :sidebarReducer,
    usersPage :UsersReducer,
    auth: auth,
    appReducer: appReducer,
    form : formReducer
})
// let store =createStore(reducers,applyMiddleware(thunkMiddleware));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// window.store=store;
export default store;