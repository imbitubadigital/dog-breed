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
  background: #f1f1f1;
`;

export const Content = styled.SafeAreaView`
  flex: 1;
`;
export const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Txt = styled.Text`
  color: #666;
  font-size: 16px;
  margin-top: 5px;
`;
