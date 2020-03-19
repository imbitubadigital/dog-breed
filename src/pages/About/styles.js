import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

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
  background: #01749a;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const BoxLogo = styled.View`
  width: 100%;
  height: 180px;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  margin: 20px 0 0;
  text-align: center;
`;

export const User = styled.Text`
  font-size: 15px;
  color: #fff;
  margin: 0px 0 8px;
  text-align: center;
`;
