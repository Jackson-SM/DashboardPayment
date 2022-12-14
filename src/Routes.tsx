import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useTheme } from './hooks/useTheme'
import { Dashboard } from './pages/Dashboard'
import { CreditCard } from './pages/Dashboard/Sections/CreditCard'
import { DashboardSection } from './pages/Dashboard/Sections/DashboardSection'
import { Profile } from './pages/Dashboard/Sections/Profile'
import { Settings } from './pages/Dashboard/Sections/Settings'
import { Transactions } from './pages/Dashboard/Sections/Transactions'
import { GlobalStyle } from './styles/global'

function AppRoutes() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<DashboardSection />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/creditcard" element={<CreditCard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default AppRoutes;