import { combineReducers } from 'redux'

// Reducers
import userReducer from './User/user.reducer';
import productsReducer from './Products/products.reducer'
import menuReducer from './Menu/menu.reducer'

// combine the reducers into one, which can be connected to the store
export default combineReducers({
    user: userReducer,
    productsData: productsReducer,
    menu: menuReducer
});