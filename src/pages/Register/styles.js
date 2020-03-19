import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';
import Input from '~/components/Input';

const { width } = Dimensions.get('window');

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: Platform.Os === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  padding: 0;
  padding-left: ${width * 0.05}px;
  padding-right: ${width * 0.05}px;
  justify-content: center;
  align-items: center;
  background: #015874;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const BoxLogo = styled.View`
  width: 100%;
  height: 200px;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  margin: 20px 0;
  text-align: center;
`;

export const Form = styled.View`
  align-self: stretch;
  padding: 20px 10px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 5px;
`;
