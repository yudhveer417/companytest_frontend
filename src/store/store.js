import {thunk} from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import taskReducer from './reducers';


//const store = createStore(taskReducer);
const store = createStore(
    taskReducer,
    applyMiddleware(thunk)
  );

export default store;
