import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

// -----------------------------------------------------------------

export const ThemeContext = createContext();

// -----------------------------------------------------------------

export const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  );
};

// -----------------------------------------------------------------

export const useToggleTheme = () => {
  const [theme, setTheme] = useState('lightSide');
  const toggleTheme = () => {
    setTheme(theme => {
      if(theme === 'lightSide') return 'darkSide';
      else return 'lightSide';
    });
  };

  return { theme, toggleTheme };
};

// -----------------------------------------------------------------

export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return theme, toggleTheme;
};
  
// -----------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.object
};
