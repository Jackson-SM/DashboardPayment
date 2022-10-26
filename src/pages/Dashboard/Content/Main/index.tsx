import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarDashboard } from '../NavbarDashboard'
import { MainContainer } from './styles'

export const Main = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  )
}
