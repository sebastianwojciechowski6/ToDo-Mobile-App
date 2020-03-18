import React, {FC} from 'react';
import {SafeAreaView, Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './components/BottomNavigation';

interface IMainProps {
}

const Main: FC<IMainProps> = props => {
    return (
        <>
            {Platform.OS === 'ios' && <StatusBar barStyle='dark-content'/>}
            <NavigationContainer>
                <BottomTabs/>
            </NavigationContainer>
        </>
    );
};

export default Main;
