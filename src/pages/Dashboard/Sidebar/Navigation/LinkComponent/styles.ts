import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';
import { lighten } from 'polished';

export const LinkComponentStyle = styled(Link)<LinkProps>`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  width: 100%;
  font-size: 14px;

  display: flex;
  align-items: center;

  transition: all ease 100ms;

  font-family: 'Nunito';

  padding: 10px;

  & svg {
    width: 16px;
    height: 16px;
    margin-right: 40px;
  }

  &:hover {
    color: ${props => props.theme.colors.secundary};
    background: ${props => lighten(0.07, props.theme.colors.background)};
  }
`;