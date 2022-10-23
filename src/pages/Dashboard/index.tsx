import React from 'react'
import { Content } from './Content'
import { Main } from './Content/Main'
import { NavbarDashboard } from './Content/NavbarDashboard'
import { Sidebar } from './Sidebar'
import { DashboardContainer } from './styles'

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <Content>
        <NavbarDashboard />
        <Main />
      </Content>
    </DashboardContainer>
  )
}
