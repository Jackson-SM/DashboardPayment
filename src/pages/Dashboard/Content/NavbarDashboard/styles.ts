import { lighten, transparentize } from 'polished';
import styled from 'styled-components';

export const NavbarDashboardContainer = styled.nav`
  width: 100%;
  height: 40px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${props => lighten(0.05,props.theme.colors.background)};

  * .themed {
    & s
  }

  & .menu {
      border: none;
      background: none;

      position: relative;

      width: 50px;
      height: 100%;

      padding: 10px;

      cursor: pointer;

      color: ${props => props.theme.colors.text};

      &:hover {
        background: ${props => transparentize(0.15,props.theme.colors.secundary)};
      }
      & svg {
        height: 100%;
        width: 100%;
      }
  }

  & .user {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 10px;
    gap: 10px;

    & .notification-btn {
      border: none;
      background: none;
      border-radius: 50%;

      position: relative;

      padding: 5px;

      width: 30px;
      height: 30px;

      cursor: pointer;

      color: ${props => props.theme.colors.text};

      & svg {
        width: 18px;
        height: 18px;
      }

      &:hover {
        background: ${props => lighten(0.15,props.theme.colors.background)};
      }

      &::before {
        content: '';

        position: absolute;

        width: 7px;
        height: 7px;

        border-radius: 50%;

        background: ${props => props.theme.colors.primary};

        top: 2px;
        right: 0;
      }
    }

    & .avatar {
      display: flex;

      border-radius: 50%;

      height: 35px;
      width: 35px;

      overflow: hidden;
    }
  }
`;