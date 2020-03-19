import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import Logo from '../../../assets/images/logo.png';
import { Container, Scroll, BoxLogo, Title, Form, FormInput } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

export default function Register() {
  const loading = useSelector(state => state.auth.loading);
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  function handleSubmit() {
    Keyboard.dismiss();
    dispatch(signInRequest(email));
  }
  return (
    <Container>
      <Scroll>
        <BoxLogo>
          <Image source={Logo} style={{ width: 180, height: 180 }} />
        </BoxLogo>
        <Title>REGISTRE-SE</Title>
        <Form>
          <FormInput
            icon="mail-outline"
            keyboadType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail para entrar"
            value={email}
            onChangeText={setEmail}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <Button
            loading={loading}
            title="Entrar"
            containerStyle={{ marginTop: 20, width: '100%' }}
            buttonStyle={{ backgroundColor: '#36ADC1' }}
            onPress={handleSubmit}
          />
        </Form>
      </Scroll>
    </Container>
  );
}
