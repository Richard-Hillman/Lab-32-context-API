import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext(null);

// -----------------------------------------------------------------

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  const toggle = ({ target }) => { 
    if(target.checked) setProvider(() => LightSide);
    else setProvider(() => DarkSide);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// -----------------------------------------------------------------

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};
  
// -----------------------------------------------------------------

export const useSetTheme = () => {
  const { setTheme } = useContext(ThemeContext);
  return setTheme;
};

// -----------------------------------------------------------------



