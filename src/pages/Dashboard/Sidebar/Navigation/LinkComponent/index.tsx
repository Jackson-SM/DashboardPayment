import React from 'react'
import { LinkComponentStyle } from './styles'

type LinkComponentPropsCustom = {
  children: React.ReactNode;
  to: string;
}
export const LinkComponent = (props: LinkComponentPropsCustom) => {
  const { children, to } = props;
  return (
    <LinkComponentStyle to={to}>
      {children}
    </LinkComponentStyle>
  )
}
