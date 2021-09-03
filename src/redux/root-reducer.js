import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';

//whiteList - the only reducers we want to persist (hold)
//storage - storage(sessionStorage)
const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart']
};

const rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
