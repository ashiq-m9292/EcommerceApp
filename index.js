/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from "react-redux";
import store from './src/Redux/Store/Store';
import App from './App';
import { name as appName } from './app.json';

const AppRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppRedux);
