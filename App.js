import {useFonts} from 'expo-font';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './navigation';
import store from './store';

let persistor = persistStore(store);

export default function App() {
    let [fontsLoaded] = useFonts({
        'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
        'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf'),
        'Manrope-Medium': require('./assets/fonts/Manrope-Medium.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <SafeAreaProvider>
                        <Navigation />
                        <StatusBar />
                        <FlashMessage
                            position="top"
                            floating
                            statusBarHeight={30}
                        />
                    </SafeAreaProvider>
                </PersistGate>
            </Provider>
        );
    }
}
