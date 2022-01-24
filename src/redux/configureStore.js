import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './greetings/greeting';

const reducer = combineReducers({
  greeting: rootReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
