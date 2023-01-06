import {combineReducers, legacy_createStore as createStore} from "redux"
import profilepageReducer from "./profilepage-reducer";
import messagepageReducer from "./messagepage-reducer";

const reducers = combineReducers({
    profilePage:  profilepageReducer,
    messagePage: messagepageReducer
})
const store = createStore(reducers)
export default store;