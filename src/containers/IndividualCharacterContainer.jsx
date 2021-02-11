/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useCharacterDetail } from '../hooksAndContext/useCharacterDetail';
import IndividualCharacterPre from '../components/Presentational/IndividualCharacterPre';
import LoadingSpinner from '../components/loading/Loading';

const CharacterDetails = ({ match }) => {
  const { loading, character } = useCharacterDetail(match.params.name);
  if(loading) return <LoadingSpinner />;
  return <IndividualCharacterPre {...character} />;
 
};

CharacterDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CharacterDetails;



