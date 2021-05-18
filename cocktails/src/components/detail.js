import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './cocktail.css';

const Detail = (props) => {

  const [cocktail, setCocktail] = useState({});
  const [cocktailLoaded, setCocktailLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setCocktailLoaded(false);
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + props.match.params.id)
    .then(response => response.json())
    .then(data => {
      console.log(data.drinks[0]);
      setCocktail(data.drinks[0]);
      setCocktailLoaded(true);
    })
    .catch(error => {
      setCocktailLoaded(false);
      setError(true);
      console.log(error);
    });
  }, [props.match.params.id]);

  const getIngredients = () => {
    let ingredients = [];
    for (let i = 1; i < 15; i++) {
      const ingredientPropName = `strIngredient${i}`;
      const measurePropName = `strMeasure${i}`;
      if (cocktail[ingredientPropName] !== null) {
        ingredients.push(`${cocktail[measurePropName] || ''}${cocktail[ingredientPropName]}`);
      }
      else {
        break;
      }
    }
    const list = ingredients.map((item, index) => {
      return (<li key={index}>{item}</li>);
    });

    return (
      <ul>
        {list}
      </ul>
    );
  }

  return (
    <>
    <div id="detailContainer">
      {error && <div>There was an error retrieving the cocktail.</div>}
      {!cocktailLoaded && <div>Loading...</div>}
      {cocktailLoaded && (
        <>
      <div className="basicInfo">
      <h1>{cocktail.strDrink}</h1>
      <table>
        <tbody>
          <tr>
            <td>Serve in:</td>
            <td>{cocktail.strGlass}</td>
          </tr>
        </tbody>
      </table>
      <h3>Instructions:</h3>
      <p>{cocktail.strInstructions}</p>
    </div>
    <div className="extendedInfo">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="drinkImage"  />
      {getIngredients()}
    </div>
        </>
      )}
    </div>
    <div><Link to="/">Back to list</Link></div>
    </>
  );
}

export default Detail;
