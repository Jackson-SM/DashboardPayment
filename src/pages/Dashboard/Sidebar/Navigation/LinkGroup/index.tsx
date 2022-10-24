import React from 'react'
import { LinkGroupComponent } from '../styles'

type LinkGroupPropsCustom = {
  children: React.ReactNode;
  title: string;
}

type LinkGroupProps = React.ComponentProps<typeof LinkGroupComponent> & LinkGroupPropsCustom;

export const LinkGroup = ({children, title, ...rest}: LinkGroupProps) => {
  return (
    <LinkGroupComponent {...rest}>
      <div className="title">
        <span>{title}</span>
      </div>
      {children}
    </LinkGroupComponent>
  )
}
