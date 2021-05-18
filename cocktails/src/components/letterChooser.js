import React from 'react';
import PropTypes from 'prop-types';

const LetterChooser = (props) => {
  const letters = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ';
  return (
    <div>
      {letters.split('').map((item, index) => {
        return <button onClick={() => props.onClickHandler(item)} key={index}> {item} </button>
      })
    }
    </div>
  );
}

LetterChooser.propTypes = {
  onClickHandler: PropTypes.func.isRequired
};

export default LetterChooser;
