import React, {useState, useEffect} from 'react';
import List from './list';
import LetterChooser from './letterChooser';
import {getStoredLetter, setStoredLetter} from './storedLetter';

function Search() {
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedLetter, setSelectedLetter] = useState(getStoredLetter()); // TODO: Get this out of local storage

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + selectedLetter)
      .then(response => response.json())
      .then(data => {
        setCocktails(data.drinks);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        setError(true);
      })
  }, [selectedLetter]);

  const handleLetterClick = (letter) => {
    setLoading(true);
    setSelectedLetter(letter);
    setStoredLetter(letter);
  }

  return (
    <div id="searchContainer">
      <h1>Search for a Cocktail</h1>
      <p>Click on a letter below to see cocktails that begin with that letter.</p>
      <LetterChooser onClickHandler={handleLetterClick} />
      {error && <div>There was an error</div>}
      {!error && <List cocktails={cocktails} loading={loading}  />}
  </div>
  )

}

export default Search;
