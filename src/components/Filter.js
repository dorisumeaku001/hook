import React from 'react';

const Filter = ({ title, rate, onTitleChange, onRateChange }) => {
  return (
    

      Title:
           type= "text"
         id="title"
         value={title}
         onChange={onTitleChange}
      />

      


      Rating:
              type="number"
         id="rate"
         value={rate}
         onChange={onRateChange}
       />
    

  );
};

export default Filter;