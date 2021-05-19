import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Reducers
import userReducer from './User/user.reducer';
import productsReducer from './Products/products.reducer'
import menuReducer from './Menu/menu.reducer'
import cartReducer from './Cart/cart.reducer'

// combine the reducers into one, which can be connected to the store
export const rootReducer = combineReducers({
    user: userReducer,
    productsData: productsReducer,
    menu: menuReducer,
    cartData: cartReducer
});

// Configure persistent redux
const configStorage = {
    key: 'root',
    storage,
    whitelist: ['cartData']
}

export default persistReducer(configStorage, rootReducer);