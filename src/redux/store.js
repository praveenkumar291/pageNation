import { combineReducers, createStore,applyMiddleware } from "redux";
import laptopReducer from './reducer/laptopReducer';
import mobilereducer from "./reducer/mobilereducer";
import userReducer from "./reducer/userReducer";
import thunk from "redux-thunk";




const rootReducer = combineReducers({
  laptops: laptopReducer,
  mobiles: mobilereducer,
  users: userReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk))
export default store;
