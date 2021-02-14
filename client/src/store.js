
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'

const middleWare = [thunk]
const store = createStore(rootReducer, applyMiddleware(...middleWare));

export default store;
