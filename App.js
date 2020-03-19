import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar, YellowBox } from 'react-native';
import { Toast } from 'react-native-redux-toast';
import { store, persistor } from '~/store';
import Routes from '~/routes';
export default function App() {
 /*  YellowBox.ignoreWarnings([
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: componentWillMount is deprecated',
  ]); */

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#015874" />
        <Routes />
        <Toast messageStyle={{ zIndex: 20000 }} />
      </PersistGate>
    </Provider>
  );
}
