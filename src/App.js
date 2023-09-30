
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Movie 1',
      description: 'Description 1',
      posterURL: 'https://example.com/poster1.jpg',
      rating: 5,
    },
    {
      id: 2,
      title: 'Movie 2',
      description: 'Description 2',
      posterURL: 'https://example.com/poster2.jpg',
      rating: 4,
    },
    // Add more movie objects as needed
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRateChange = (event) => {
    setRateFilter(event.target.value);
  };

  const filteredMovies = movies.filter((movie)) => {
    if (!titleFilter && !rateFilter) {
      return true;
    }

    if (titleFilter && !rateFilter) {
      return movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    }

    if (!titleFilter && rateFilter) {
      return movie.rating >= parseInt(rateFilter);
    }

    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= parseInt(rateFilter)
    )
