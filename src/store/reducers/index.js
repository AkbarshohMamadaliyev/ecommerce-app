import cartReducer from "./cartReducer";
import {combineReducers} from "redux";


const rootReducers = combineReducers({
    addItem: cartReducer
})

export default rootReducers;