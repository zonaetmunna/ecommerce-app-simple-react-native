import {configureStore, combineReducers} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
    blacklist: ['counter', 'products'],
};

// 1. create reducers
const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer,
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 2. create store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}), // to ignore error
});

export default store;
