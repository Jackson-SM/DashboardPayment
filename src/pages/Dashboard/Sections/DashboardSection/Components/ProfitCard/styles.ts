import { lighten, transparentize } from 'polished';
import styled from 'styled-components';

export const ProfitCardStyle = styled.div`
  width: 270px;
  height: 180px;

  background: ${props => props.theme.theme === 'dark' ? lighten(0.1, props.theme.colors.background) : lighten(0.95, 'black')};

  border-radius: 5px;
`;

export const ProfitContent = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => transparentize(0.1, props.theme.colors.text)};

  height: 100%;

  padding: 5px;
`;
export const ProfitInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export const ProfitTitle = styled.span`
  font-size: 16px;
  font-family: 'Nunito';

  color: ${props => transparentize(0.6, props.theme.colors.text)};

  display: flex;
  flex-direction: column;
  align-items: center;

  & svg {
    width: 22px;
    height: 22px;
  }
`;

export const ProfitNumber = styled.span`
  font-size: 40px;

  font-family: 'Rubik';

  display: flex;

  & span {
    font-size: 18px;

    padding-top: 10px;
  }
`;

export const ProfitPercentage = styled.span`
  font-size: 20px;

  color: ${props => props.theme.colors.secundary};
`;

export const ProfitDescription = styled.span`
  font-size: 11px;
`;