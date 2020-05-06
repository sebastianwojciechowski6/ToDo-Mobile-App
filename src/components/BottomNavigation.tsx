import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListTab from '../screens/List';
import DescriptionTab from '../screens/Description';
import HomeTab from '../screens/Home';
import {FC} from 'react';
import {MaterialCommunityIcons} from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            inactiveBackgroundColor: 'black',
            inactiveTintColor: 'white',
            activeBackgroundColor: 'black',
            activeTintColor: 'yellow'

        }}>
            <Tab.Screen name={'Home'} component={HomeTab} options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home"
                    color={color} size={size} />
                )
            }}/>
            <Tab.Screen name={'List'} component={ListTab} options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="view-list"
                                            color={color} size={size} />
                )
            }}/>
            <Tab.Screen name={'Description'} component={DescriptionTab} options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="text"
                                            color={color} size={size} />
                )
            }}/>
        </Tab.Navigator>
    );
};
 export default BottomTabs;
