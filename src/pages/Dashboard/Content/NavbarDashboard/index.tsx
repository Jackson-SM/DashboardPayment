import React from 'react'
import { NavbarDashboardContainer } from './styles'
import { BsBellFill, BsMoonFill, BsSunFill, BsTextLeft } from 'react-icons/bs'
import photo from '../../../../assets/photo.jpg'
import { Switch } from '@mui/material'

export const NavbarDashboard = () => {
  return (
    <NavbarDashboardContainer>
      <button className="menu"><BsTextLeft /></button>
      <div className="user">
        <button className="notification-btn"><BsBellFill /></button>
        <div className="avatar"><img src={photo} alt="" /></div>
        <div className="themed">
          <BsSunFill />
          <Switch />
          <BsMoonFill />
        </div>
      </div>
    </NavbarDashboardContainer>
  )
}