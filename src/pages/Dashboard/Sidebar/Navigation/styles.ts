import styled from 'styled-components';
import { darken } from 'polished';

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LinkGroupComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 40px;

  & .title {
    display: flex;
    padding: 10px;
    span {
      color: ${props => darken(0.3, props.theme.colors.text)};
    }
  }
`;