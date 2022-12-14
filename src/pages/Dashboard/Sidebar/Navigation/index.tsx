import React, { useRef } from 'react'
import { LinkComponent } from './LinkComponent'
import { NavigationContainer } from './styles'

import { BsGrid, BsPerson, BsGear, BsCreditCard, BsArrowRepeat } from 'react-icons/bs'
import { LinkGroup } from './LinkGroup'

export const Navigation = () => {

  return (
    <NavigationContainer>
      <LinkGroup title="Main">
        <LinkComponent to="/"><BsGrid /> Dashboard</LinkComponent>
        <LinkComponent to="/profile"><BsPerson /> Profile</LinkComponent>
        <LinkComponent to="/creditcard"><BsCreditCard /> Credit Card</LinkComponent>
        <LinkComponent to="/settings"><BsGear /> Settings</LinkComponent>
        <LinkComponent to="/transactions"><BsArrowRepeat /> Transactions</LinkComponent>
      </LinkGroup>
    </NavigationContainer>
  )
}
