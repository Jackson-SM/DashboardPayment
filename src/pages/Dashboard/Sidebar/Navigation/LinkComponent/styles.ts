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
    background: ${props => transparentize(0.9, props.theme.colors.secundary)};
  }

  ${props => props.routed && `
    color: ${props.theme.colors.secundary};
    background: ${transparentize(0.9, props.theme.colors.secundary)};
    padding-left: 20px;

    &:after {
      content: '';

      position: absolute;

      height: 100%;
      width: 3px;


      background: ${props.theme.colors.secundary};

      top: 0;
      left: 0;
    }
  `}
`;