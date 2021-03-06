import React, {Component } from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LocationTracking from './views/LocationTracking';
import Welcome from './views/Welcome';
import NewsScreen from './views/News';
import ExportScreen from './views/Export';
import ImportScreen from './views/Import';

const Stack = createStackNavigator();

class Entry extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="WelcomeScreen ">
            <Stack.Screen
              name="WelcomeScreen"
              component={Welcome}
              options={{headerShown:false}}
                />
            <Stack.Screen
              name="LocationTrackingScreen"
              component={LocationTracking}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="NewsScreen"
              component={NewsScreen}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="ExportScreen"
              component={ExportScreen}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="ImportScreen"
              component={ImportScreen}
              options={{headerShown:false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
}

export default Entry;
