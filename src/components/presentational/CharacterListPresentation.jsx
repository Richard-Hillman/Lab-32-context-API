/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Character from '../Presentational/Character';
import { useTheme } from '../../hooksAndContext/ThemeContext';
import styles from './CharacterListPresentation.css';

const CharacterListPresentation = ({ characters }) => {
  const { theme } = useTheme();

  const characterElements = characters.map(character => (
    <li key={character.name} className={`${styles.CharacterListPresentation} ${styles[theme]}`}>
      <Link to={`/characters/${character.name}`}>
        <Character name={character.name} image={character.image} /> 
      </Link>
    </li>
  ));

  return (
    <>
      <ul className={`${styles.CharacterListPresentation} ${styles[theme]}`}>
        {characterElements}
      </ul>
    </>
  );
};

CharacterListPresentation.propTypes = {
  characters: PropTypes.shape(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }))
};

export default CharacterListPresentation;
