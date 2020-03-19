import { createStackNavigator } from 'react-navigation-stack';
import Account from '~/pages/Account';
import Login from '~/pages/Account/Login';
import Register from '~/pages/Account/Register';

const AcountStacks = createStackNavigator({
  AcountUser: {
    screen: Account,
    navigationsOptions: () => ({
      title: 'Minha conta',
    }),
  },
  Login: {
    screen: Login,
    navigationsOptions: () => ({
      title: 'Pagina de Login',
    }),
  },
  Register: {
    screen: Register,
    navigationsOptions: () => ({
      title: 'Cadastre-se',
    }),
  },
});

export default AcountStacks;
