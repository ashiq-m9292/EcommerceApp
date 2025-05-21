import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../RootReducers/RooteReducer';
import { getDefaultConfig } from '@react-native/metro-config';

const store = configureStore({
    reducer: rootReducer,
})

export default store;
