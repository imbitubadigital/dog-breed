import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from '~/pages/Search';

const SearchScreenStacks = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationsOptions: () => ({
      title: 'Pesquisa',
    }),
  },
});

export default SearchScreenStacks;
