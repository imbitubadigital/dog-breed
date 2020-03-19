import * as React from 'react';
import { useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationService from '~/services/navigation';

import Register from '~/pages/Register';
import List from '~/pages/List';
import About from '~/pages/About';

import Menu from '~/components/Menu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);

  function registerService(ref) {
    NavigationService.setTopLevelNavigation(ref);
  }
  return (
    <NavigationContainer ref={registerService}>
      {!signed ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator
          initialRouteName="List"
          drawerContent={props => <Menu {...props} />}
        >
          <Drawer.Screen name="List" component={List} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}
