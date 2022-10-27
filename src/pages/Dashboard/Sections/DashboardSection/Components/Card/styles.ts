import { darken, transparentize } from 'polished';
import styled from 'styled-components';

type VariantCards = {
  gradient?: string;
}

export const CardStyle = styled.div<VariantCards>`
  width: 300px;
  height: 160px;

  padding: 5px;
  padding-left: 20px;

  display: flex;
  flex-direction: column;

  gap: 10px;

  background: linear-gradient(240deg,${props => props.theme.colors.secundary},${props => props.theme.colors.primary});
  color: white;

  border-radius: 15px;

  & .top {
    display: flex;
    align-items: center;
    gap: 10px;

    & .title {
      font-size: 22px;
      font-family: 'Nunito';
      color: ${props => transparentize(0.4, 'white')};
    }

    & .icon {
      display: flex;

      border-radius: 50%;
      background: ${props => transparentize(0.8, 'black')};
      
      width: 26px;
      height: 26px;

      padding: 5px;

      & svg {
        height: 100%;
        width: 100%;
      }
    }
  }


  & .info {

    & .numbers {
      font-size: 28px;
      color: ${props => transparentize(0.2, 'white')};
    }

    & .last_mounth_increase {
      color: ${props => transparentize(0.3, 'white')};
      font-size: 10px;

      background: ${props => transparentize(0.6, 'black')};
      border-radius: 10px;
      padding: 0 4px;
    }
  }

  ${ props => props.gradient === 'red' && `
    background: linear-gradient(240deg, #FC3535,#FF6E2B);
  `}
  ${ props => props.gradient === 'purple' && `
    background: linear-gradient(240deg,#9D52FF,#F942FF);
  `}
  ${ props => props.gradient === 'yellow' && `
    background: linear-gradient(240deg,#FFAB52,#FF6542);
  `}
`;