import React from 'react'
import { ContentContainer } from './styles';

type ContentProps = {
  children: React.ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return (
    <ContentContainer>
      {children}
    </ContentContainer>
  )
}
