import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #015874;
  padding: 0;
`;

export const BoxLogo = styled.View`
  background: #65c5c0;
  width: 100%;
  height: 200px;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const Content = styled.View`
  padding: 20px;
`;
export const Item = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
`;

export const Txt = styled.Text`
  color: #fff;
  font-size: 17px;
  margin-left: 7px;
`;
