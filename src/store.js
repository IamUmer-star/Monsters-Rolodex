import {createStore,combineReducers} from "redux";
import Home from './containers/homepage/Home'



const  reducers = combineReducers({Home:Home})

export default  createStore(reducers)