import React from 'react';

export const themes = {
  light: {
    background: '#faf9f9',
    paragraph: '#000',
    otherText: '#000',
    variation: '',
  },
  dark: {
    background: '#222831',
    paragraph: '#fff',
    otherText: '#f7e032',
    variation: '-light',
  },
};

const ThemeContext = React.createContext(themes.dark);
export default ThemeContext;
