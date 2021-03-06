import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 80 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';

  margin: 24px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 62px;
`;

export const BackButton = styled.TouchableOpacity``;

export const UserAvatarButton = styled.TouchableOpacity`
  margin: 0 auto;
`;

export const UserAvatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 98px;

  align-self: center;
`;
