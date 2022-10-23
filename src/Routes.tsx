import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Dashboard } from './pages/Dashboard'
import { GlobalStyle } from './styles/global'
import { dark } from './styles/themes/dark';

function AppRoutes() {

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  )
}

export default AppRoutes;