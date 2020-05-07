import React, { useState, useEffect } from 'react';
import ThemeContext, { themes } from './ThemeContext';
import propTypes from 'prop-types';
import Layout from './Layout';

const ThemeWrapper = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', theme);
      return;
    }
    let latestTheme = localStorage.getItem('theme');
    document.body.classList.remove(
      `${latestTheme === 'light' ? 'dark' : 'light'}`
    );
    document.body.classList.add(latestTheme);
    setTheme(latestTheme);
  }, [setTheme, theme]);

  const onThemeHandler = () => {
    setTheme((prevState) => {
      const newState = prevState === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newState);

      return newState;
    });
  };
  return (
    <ThemeContext.Provider value={themes[theme]}>
      <Layout themeHandler={onThemeHandler}>{children}</Layout>
    </ThemeContext.Provider>
  );
};
ThemeWrapper.propTypes = {
  children: propTypes.array,
};
export default ThemeWrapper;
