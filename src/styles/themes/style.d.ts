import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: string;
    colors: {
      primary: string;
      secundary: string;
      tertiary: string;
    
      text: string;
      background: string;
    }
  }
}