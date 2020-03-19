import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import HeaderCustom from '~/components/HeaderCustom';
import { Container, Scroll, BoxLogo, Title, User } from './styles';

import Q9 from '../../../assets/images/q9.png';

export default function About({ navigation }) {
  return (
    <>
      <HeaderCustom navigation={navigation} title="Sobre o Projeto" />
      <Container>
        <Scroll>
          <Title>Desafio Dog Breed proposto por:</Title>
          <User>q9 Tecnologia</User>
          <BoxLogo>
            <Image source={Q9} style={{ width: 150, height: 150 }} />
          </BoxLogo>
          <Title>Desenvolvido por:</Title>
          <User>Antonio Fernandes</User>
          <User>imbitubadigital@gmail.com</User>
        </Scroll>
      </Container>
    </>
  );
}

About.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
