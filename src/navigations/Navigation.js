import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import RestaurantsStacks from './RestaurantsStacks';
import TopListsStacks from './TopListsStacks';
import SearchScreenStacks from './SearchStacks';
import AccountScreen from './AccountStacks';

const NavigationStacks = createBottomTabNavigator(
  {
    // stacks
    Restaurants: {
      screen: RestaurantsStacks,
      navigationOptions: () => ({
        tabBarLabel: 'Restaurantes',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="compass-outline"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    TopLists: {
      screen: TopListsStacks,
      navigationOptions: () => ({
        tabBarLabel: 'Destaques',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="magnify"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    Search: {
      screen: SearchScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: 'Busca',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="star-outline"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    Acount: {
      screen: AccountScreen,
      navigationOptions: () => ({
        tabBarLabel: 'Perfil',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="account"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Search',
    order: ['Restaurants', 'TopLists', 'Search', 'Acount'],
    tabBarOptions: {
      inactiveTintColor: '#646464',
      activeTintColor: '#00a680',
    },
  }
);

export default createAppContainer(NavigationStacks);
