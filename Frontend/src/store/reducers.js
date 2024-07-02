import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

import Breadcrumb from "./Breadcrumb/reducer";  

// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import Profile from "./auth/profile/reducer"

//Calendar
import calendar from "./calendar/reducer"

//tasks
import tasks from "./tasks/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
   //Breadcrumb items
   Breadcrumb,
  tasks, 
  Login,
  Account,
  ForgetPassword,
  Profile,
  calendar,
})

export default rootReducer
