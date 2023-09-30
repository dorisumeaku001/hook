
import React from 'react';
import Card from 'react-bootstrap/Card';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
        {title}
        {description}
        Rating: {rating}

  )

};

export default MovieCard;