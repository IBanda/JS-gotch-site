import React, { useState, useEffect } from 'react';
import ThemeContext, { themes } from './ThemeContext';
import propTypes from 'prop-types';
import Layout from './Layout';

const ThemeWrapper = ({ children }) => {
  const [theme, setTheme] = useState('ligth');
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', theme);
      return;
    }

    setTheme(localStorage.getItem('theme'));
  }, [setTheme, theme]);
  const onThemeHandler = () => {
    setTheme((prevState) => {
      const newState = prevState === 'light' ? 'dark' : 'light';

      localStorage.setItem('theme', newState);
      localStorage;
      return newState;
    });
  };
  return (
    <ThemeContext.Provider
      value={theme === 'light' ? themes.light : themes.dark}
    >
      <Layout themeHandler={onThemeHandler}>{children}</Layout>
    </ThemeContext.Provider>
  );
};
ThemeWrapper.propTypes = {
  children: propTypes.array,
};
export default ThemeWrapper;
