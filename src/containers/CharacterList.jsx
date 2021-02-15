/* eslint-disable max-len */
import React from 'react';
import CharacterListPresentation from '../components/Presentational/CharacterListPresentation';
import Header from '../components/themeHeader/Header';
import { useCharacterList } from '../hooksAndContext//UseCharacterList';
import { useTheme } from '../hooksAndContext/ThemeContext';
import styles from './CharacterList.css';

export default function CharacterList() {
  const { characters } = useCharacterList();
  const { theme } = useTheme();

  return (
    <>
      <Header /> 

      <div > 
      return <CharacterListPresentation characters={characters} className={`${styles.CharacterListPresentation} ${styles[theme]}`} />
      </div>
    </>
  );
}
