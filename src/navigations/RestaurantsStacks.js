import { createStackNavigator } from 'react-navigation-stack';
import RestaurantsPage from '~/pages/Restaurants';
import AddRestaurantPage from '~/pages/Restaurants/AddRestaurants';

const RestaurantsStacks = createStackNavigator({
  Restaurants: {
    screen: RestaurantsPage,
    navigationsOptions: () => ({
      title: 'Restaurantes',
    }),
  },
  AddRestaurant: {
    screen: AddRestaurantPage,
    navigationsOptions: () => ({
      title: 'Add Restaurantes',
    }),
  },
});

export default RestaurantsStacks;
