import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';
import { darken, lighten, opacify, transparentize } from 'polished';

type VariantsProps = {
  routed?: boolean;
}
type LinkComponentProps = LinkProps & VariantsProps;

export const LinkComponentStyle = styled(Link)<LinkComponentProps & VariantsProps>`
  text-decoration: none;
  color: ${props => darken(0.2, props.theme.colors.text)};
  width: 100%;
  font-size: 14px;

  display: flex;
  align-items: center;

  position: relative;

  transition: all ease 100ms;

  font-family: 'Nunito';

  padding: 10px;

  & svg {
    width: 17px;
    height: 17px;
    margin-right: 40px;
  }

  &:hover {
    color: ${props => props.theme.colors.secundary};
    background: ${props => `linear-gradient(to right,${transparentize(1,props.theme.colors.secundary)},${transparentize(0.8, props.theme.colors.secundary)})`};
  }

  ${props => props.routed && `
    color: ${props.theme.colors.secundary};
    background: ${`linear-gradient(to right,${transparentize(1,props.theme.colors.secundary)},${transparentize(0.8, props.theme.colors.secundary)})`};
    padding-left: 20px;

    &:after {
      content: '';

      position: absolute;

      height: 100%;
      width: 3px;

      background: ${transparentize(0.3, props.theme.colors.secundary)};

      border-radius: 40px;

      top: 0;
      right: 0;
    }
  `}
`;