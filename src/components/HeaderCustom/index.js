import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon } from 'react-native-elements';

export default function HeaderCustom({ navigation, title }) {
  return (
    <Header
      statusBarProps={{ barStyle: 'light-content' }}
      barStyle="light-content" // or directly */
      leftComponent={<Menu navigation={navigation} />}
      centerComponent={{
        text: title,
        style: {
          color: '#fff',
          fontSize: 15,
          fontWeight: 'bold',
          textTransform: 'uppercase',
        },
      }}
      rightComponent={() => {}}
      containerStyle={{
        backgroundColor: '#015874',
        justifyContent: 'space-around',
      }}
    />
  );
}

function Menu({ navigation }) {
  return (
    <Icon
      name="menu"
      type="material-community"
      color="#fff"
      size={40}
      onPress={() => navigation.toggleDrawer()}
    />
  );
}

HeaderCustom.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

Menu.propTypes = {
  navigation: PropTypes.shape({
    toggleDrawer: PropTypes.func,
  }).isRequired,
};
