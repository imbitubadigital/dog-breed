import { createStackNavigator } from 'react-navigation-stack';
import TopRestaurantScreen from '~/pages/Restaurants/Top';

const TopListsStacks = createStackNavigator({
  TopRestaurants: {
    screen: TopRestaurantScreen,
    navigationsOptions: () => ({
      title: 'Melhores Restaurantes',
    }),
  },
});

export default TopListsStacks;
