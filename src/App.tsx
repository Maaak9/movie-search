import React, { useEffect } from 'react';
import './App.scss';
import { fetchMovie, fetchMovies } from './api/api';

function App() {

  useEffect(() => {
    fetchMovies();
    fetchMovie();
  }, [])

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
