import React from 'react';
import PropTypes from 'prop-types';
import { Overlay } from 'react-native-elements';

export default function Modal({ isVisible, setIsVisible, children }) {
  function closeModal() {
    setIsVisible(false);
  }
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(0,0,0,.9)"
      overlayBackgroundColor="transparent"
      overlayStyle={{ height: 'auto', width: '95%', backgroundColor: '#fff' }}
      onBackdropPress={closeModal}
    >
      {children}
    </Overlay>
  );
}

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
