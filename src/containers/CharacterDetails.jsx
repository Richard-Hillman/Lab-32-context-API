/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useCharacterDetail } from '../hooksAndContext/UseCharacterDetail';
import CharacterDetailsPresentation from '../components/Presentational/CharacterDetailsPresentation';
import Loading from '../components/loading/Loading';

const CharacterDetails = ({ match }) => {
  console.log(match.params.name);
  const { loading, character } = useCharacterDetail(match.params.name);
  if(loading) return <Loading />;
  return <CharacterDetailsPresentation character={character} />;
};

CharacterDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CharacterDetails;



