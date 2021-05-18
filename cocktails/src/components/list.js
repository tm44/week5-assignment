import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const List = (props) => {

  const makeList = (cocktails) => {
    if (cocktails === null)
      return <div>No drinks found.  Try another letter.</div>
    else {
      return cocktails.map((item, index) => {
        return (
          <div key={index}><Link to={`/detail/${item.idDrink}`} key={index}>{item.strDrink}</Link></div>
        );
      });
    }
  }

  return (
    <div id="cocktailList">
      {props.loading && <div>Loading...</div>}
    {!props.loading && makeList(props.cocktails)}
    </div>
  )
}

List.propTypes = {
  loading: PropTypes.bool.isRequired,
  cocktails: PropTypes.array
}

export default List;
