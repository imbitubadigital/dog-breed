import React from 'react';
import PropTypes from 'prop-types';
import HeaderCustom from '~/components/HeaderCustom';
import QuestionAnswer from '~/components/QuestionAnswer';
// import { Container } from './styles';

export default function Answer({ route, navigation }) {
  const { item } = route.params;
  return (
    <>
      <HeaderCustom navigation={navigation} title="RESPONDA A QUESTÃO" />
      <QuestionAnswer navigation={navigation} item={item} />
    </>
  );
}

Answer.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      item: PropTypes.shape(),
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
