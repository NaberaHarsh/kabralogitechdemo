import { combineReducers } from 'redux'
import ProductReducer from './product/productReducer'

const rootReducer = combineReducers({
    data:ProductReducer
})

export default rootReducer;