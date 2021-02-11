/* eslint-disable max-len */
import React from 'react';
import CharacterListPre from '../components/Presentational/CharacterListPre';
import LoadingSpinner from '../components/loading/Loading';
import { useCharacterList } from '../hooksAndContext/useCharacterList';

const CharacterList = () => {
  const { loading, characters } = useCharacterList();

  if(loading) return <LoadingSpinner />;
  return <CharacterListPre characters={characters} />;
};

export default CharacterList;
