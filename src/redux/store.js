import { combineReducers, createStore } from "redux";
import laptopReducer from './reducer/laptopReducer';
import mobilereducer from "./reducer/mobilereducer";



const rootReducer = combineReducers({
  laptops: laptopReducer,
  mobiles: mobilereducer,
});

const store = createStore(rootReducer);
export default store;
