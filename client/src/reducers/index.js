
import submitFormReducer from './submitFormReducer'
import { combineReducers } from 'redux'
import getMemesReducer from './getMemesReducer';

const rootReducer = combineReducers({
    submit: submitFormReducer,
    getMemes: getMemesReducer
})

export default rootReducer;