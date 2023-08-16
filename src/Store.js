import { combineReducers, createStore } from "redux";
import popularReducer from "./popularReducer";


const rootReducer = combineReducers({
    selectedItems: popularReducer, // Make sure the key matches the reducer
    // other reducers...
  });
const store = createStore(rootReducer);

export default store;