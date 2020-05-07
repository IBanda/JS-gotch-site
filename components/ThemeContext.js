import React from 'react';

export const themes = {
  light: {
    background: '#faf9f9',
  },
  dark: {
    background: '#222831',
  },
};

const ThemeContext = React.createContext(themes.dark);
export default ThemeContext;
