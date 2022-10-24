import React from 'react'
import { useLocation } from 'react-router-dom';
import { LinkComponentStyle } from './styles'

type LinkComponentPropsCustom = {
  children: React.ReactNode;
  to: string;
}

type LinkComponentStyleProps = React.ComponentProps<typeof LinkComponentStyle> & LinkComponentPropsCustom;

export const LinkComponent = (props: LinkComponentStyleProps) => {
  const { children, to, ...rest } = props;

  const location = useLocation();

  console.log(location.pathname);

  const routed = location.pathname === to;

  return (
    <LinkComponentStyle to={to} routed={routed ? `${routed}` : undefined} {...rest}>
      {children}
    </LinkComponentStyle>
  )
}
