import { useState, useEffect } from 'react';
import { GetListOfCharacters } from '../services/GetListOfCharacters';

export const useCharacterList = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters]  = useState([]);
  
  useEffect(() => {
    GetListOfCharacters()
      .then(characters => {
        setCharacters(characters);
        setLoading(false);
      });
  }, []);
  
  
  return {
    loading,
    characters
  };
};
