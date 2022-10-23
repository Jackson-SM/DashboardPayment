import React from 'react'
import { HeaderSidebar } from './HeaderSidebar'
import { Navigation } from './Navigation'
import { SidebarContainer } from './styles'

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <HeaderSidebar />
      <Navigation />
    </SidebarContainer>
  )
}
