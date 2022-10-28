import { darken, transparentize } from 'polished';
import styled from 'styled-components';

export const CardLargeContainer = styled.div`

`;

export const CardLargeStyle = styled.div`
  width: 480px;
  height: 220px;

  background: ${props => `linear-gradient(to right,${props.theme.colors.secundary},${darken(0.23, props.theme.colors.secundary)})`};

  color: white;

  padding: 10px;

  border-radius: 15px;

  position: relative;

  display: flex;
  flex-direction: column;

  & .info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .amount {
      color: ${props => transparentize(0.15,'white')};
      font-size: 32px;

      display: flex;
      align-items: center;

      & .currency {
        color: ${props => transparentize(0,'white')};
        font-size: 13px;
        margin-left: 5px;
        align-self: end;
      }
    }

    & .title {
      color: ${props => transparentize(0.5,'white')};
      font-size: 14px;
    }

    & .graphic {
      border-radius: 10px;

      display: flex;

      height: 80px;
      width: 170px;

      position: relative;
      overflow: hidden;

      & img {
        height: 100%;
        width: 100%;
      }

      & span {
        position: absolute;

        top: 0;
        right: 0;

        font-size: 12px;

        padding: 5px;
        
        color: ${props => props.theme.colors.text};
      }
    }
  }

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    & .footer {
      display: flex;
      flex-direction: column;
      gap: 10px;

      & .text {
      color: ${props => transparentize(0.5,'white')};
      font-size: 11px;
      line-height: 10px;
    }

    & .view-details {
      text-decoration: none;
      color: ${props => transparentize(0.2,'white')};

      display: flex;
      align-items: center;

      gap: 5px;

      font-size: 13px;

      transition: color ease 120ms;

      &:hover {
        color: ${props => transparentize(0.4,'white')};
      }
    }
    }
  }
`;