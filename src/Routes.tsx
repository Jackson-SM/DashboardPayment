import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Dashboard } from './pages/Dashboard'
import { CreditCard } from './pages/Dashboard/Sections/CreditCard'
import { DashboardSection } from './pages/Dashboard/Sections/DashboardSection'
import { Profile } from './pages/Dashboard/Sections/Profile'
import { Settings } from './pages/Dashboard/Sections/Settings'
import { GlobalStyle } from './styles/global'
import { dark } from './styles/themes/dark';

function AppRoutes() {

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<DashboardSection />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/creditcard" element={<CreditCard />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default AppRoutes;