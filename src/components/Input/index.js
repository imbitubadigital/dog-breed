import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, TInput } from './styles';

function Input({ style, height, icon, ...rest }, ref) {
  return (
    <Container style={style} height={height}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.5)" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

/* Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  height: PropTypes.string,
};

Input.defaultProps = {
  icon: null,
  height: null,
  style: {},
}; */

export default forwardRef(Input);
