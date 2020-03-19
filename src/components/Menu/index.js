import React from 'react';
import PropTypes from 'prop-types';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { Icon, Divider } from 'react-native-elements';
import { signOut } from '~/store/modules/auth/actions';
import Logo from '../../../assets/images/logo.png';
import { Container, BoxLogo, Scroll, Content, Item, Txt } from './styles';
import { listRequest } from '~/store/modules/list/actions';

export default function Menu({ navigation }) {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(signOut());
  }

  function setBreed(type) {
    dispatch(listRequest(type));
    navigation.closeDrawer();
  }

  return (
    <Container>
      <DrawerContentScrollView navigation={navigation}>
        <BoxLogo>
          <Image source={Logo} style={{ width: 150, height: 150 }} />
        </BoxLogo>
        <Scroll>
          <Content>
            <Item onPress={() => setBreed('chihuahua')}>
              <Icon
                name="alpha-c-circle"
                type="material-community"
                color="#fff"
              />
              <Txt>Raça Chihuahua</Txt>
            </Item>
            <Divider style={{ backgroundColor: 'rgba(255,255,255,0.5)' }} />
            <Item onPress={() => setBreed('husky')}>
              <Icon
                name="alpha-h-circle"
                type="material-community"
                color="#fff"
              />
              <Txt>Raça Husky</Txt>
            </Item>
            <Divider style={{ backgroundColor: 'rgba(255,255,255,0.5)' }} />
            <Item onPress={() => setBreed('pug')}>
              <Icon
                name="alpha-p-circle"
                type="material-community"
                color="#fff"
              />
              <Txt>Raça Pug</Txt>
            </Item>
            <Divider style={{ backgroundColor: 'rgba(255,255,255,0.5)' }} />
            <Item onPress={() => setBreed('labrador')}>
              <Icon
                name="alpha-l-circle"
                type="material-community"
                color="#fff"
              />
              <Txt>Raça Labrador</Txt>
            </Item>
            <Divider style={{ backgroundColor: 'rgba(255,255,255,0.5)' }} />
            <Item onPress={() => navigation.navigate('Performance')}>
              <Icon
                name="information-outline"
                type="material-community"
                color="#fff"
              />
              <Txt>Sobre</Txt>
            </Item>
            <Divider style={{ backgroundColor: 'rgba(255,255,255,0.5)' }} />
            <Item onPress={handleLogout}>
              <Icon
                name="login-variant"
                type="material-community"
                color="#fff"
              />
              <Txt>SAIR</Txt>
            </Item>
          </Content>
        </Scroll>
      </DrawerContentScrollView>
    </Container>
  );
}
Menu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    closeDrawer: PropTypes.func,
  }).isRequired,
};
