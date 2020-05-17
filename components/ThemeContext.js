import React from 'react';

export const themes = {
  light: {
    background: '#faf9f9',
  },
  dark: {
    background: '#263238',
  },
};

const ThemeContext = React.createContext(themes.dark);
export default ThemeContext;
