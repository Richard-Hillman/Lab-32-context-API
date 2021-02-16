
import React from 'react';
import { useTheme } from '../../hooksAndContext/ThemeContext';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <div className={`${styles.Header} ${styles[theme]}`}>
        <NavLink className="link" to="/">Home</NavLink>
      </div>

      <div className={styles.toggle}>
        <h3>Toggle Styled Mode</h3>
        <input type="checkbox" onChange={toggleTheme} />
      </div>

    </div>
  );
}

export default Header;

