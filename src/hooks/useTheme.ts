import { useContext } from 'react'
import { ThemedContext } from '../contexts/Theme';

export const useTheme = () => {
  const { theme, handleChangeTheme } = useContext(ThemedContext);

  return {
    theme,
    handleChangeTheme
  }
}