import React, { useState, useEffect } from 'react'
import { DefaultTheme } from 'styled-components';
import { dark } from '../../styles/themes/dark';
import { light } from '../../styles/themes/light';

type ThemeContextProps = {
  handleChangeTheme(): void;
  theme: DefaultTheme;
}

type ThemeProviderProps = {
  children: React.ReactNode;
}

export const ThemedContext = React.createContext({} as ThemeContextProps);

export const ThemedProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    const themeStorage = localStorage.getItem('theme-dashboard');

    if(themeStorage){
      return JSON.parse(themeStorage);
    }else{
      return dark;
    }    
  });

  useEffect(() => {
    localStorage.setItem('theme-dashboard', JSON.stringify(theme))
  },[theme])

  const handleChangeTheme = () => {
    setTheme(theme => theme.theme === 'dark' ? light : dark);
  }

  return (
    <ThemedContext.Provider value={{theme, handleChangeTheme}}>
      {children}
    </ThemedContext.Provider>
  )
}
