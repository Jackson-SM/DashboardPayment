import React from 'react'
import { LinkComponent } from './LinkComponent'
import { NavigationContainer } from './styles'

export const Navigation = () => {
  return (
    <NavigationContainer>
      <LinkComponent to="/chart">Dashboard</LinkComponent>
    </NavigationContainer>
  )
}
