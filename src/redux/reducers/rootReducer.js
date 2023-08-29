import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    allCategory: categoryReducer,
    auth:authReducer
});
export default rootReducer;