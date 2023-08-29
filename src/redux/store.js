import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
export default store;
