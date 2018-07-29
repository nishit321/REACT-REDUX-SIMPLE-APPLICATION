// combine all reducer into one object
import { combineReducers } from "redux";
import UserReducer from "./reduce-user";
import ActiveUser from "./reducer-active-user";

//combine them into one big object
const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUser
});

export default allReducers;
