import React from 'react';
import PropTypes from 'prop-types';
import Header from '../themeHeader/Header';

const CharacterDetailsPresentation = ({ character }) => { 
  return (
    <>
      <Header />
      <figure>
        <img src={character.image} alt={character.name} />
        <figcaption>{character.name}</figcaption>
      </figure>
    </>
  );
};

CharacterDetailsPresentation.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};  

export default CharacterDetailsPresentation;
