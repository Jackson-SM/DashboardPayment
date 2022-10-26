import React from 'react'
import { NavbarDashboardContainer } from './styles'
import { BsBellFill, BsMoonFill, BsSunFill, BsTextLeft } from 'react-icons/bs'
import photo from '../../../../assets/photo.jpg'
import { Switch } from '@mui/material'
import { useTheme } from '../../../../hooks/useTheme'

export const NavbarDashboard = () => {
  const { theme, handleChangeTheme } = useTheme();

  return (
    <NavbarDashboardContainer>
      <button className="menu"><BsTextLeft /></button>
      <div className="user">
        <button className="notification-btn"><BsBellFill /></button>
        <div className="avatar"><img src={photo} alt="" /></div>
        <div className="themed">
          <BsSunFill />
          <Switch size="small" onClick={handleChangeTheme} checked={theme.theme === 'dark'} />
          <BsMoonFill />
        </div>
      </div>
    </NavbarDashboardContainer>
  )
}