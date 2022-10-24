import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainContainer } from './styles'

export const Main = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  )
}
