import React from 'react'
import { HeaderSidebarContainer } from './styles'
import logo from '../../../../assets/logo.svg';

export const HeaderSidebar = () => {
  return (
    <HeaderSidebarContainer>
      <img src={logo} alt="" />
    </HeaderSidebarContainer>
  )
}
