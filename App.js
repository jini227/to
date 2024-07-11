/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// ++ 제스처
import 'react-native-gesture-handler';
import MainStack from './src/navigation/Stack';
import SplashScreen from 'react-native-splash-screen';

function App() {
    React.useEffect(() => {
        SplashScreen.hide();
    }, []);


    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
}

export default App;
