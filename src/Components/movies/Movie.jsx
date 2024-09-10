import React, { useEffect, useState } from 'react';
import './movies.css';
import axios from 'axios';
import { baseUrl, API_KEY, imageUrl } from '../Constants/Constants';

function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
        <h5>Trending Movies(Week)</h5><br />

    <div className='row-cards'>

      {movies.slice(0, 15).map((movie) => (
        <div key={movie.id} className='card'>
          <img
            src={`${imageUrl}${movie.backdrop_path}`}
            alt={movie.title || movie.name}
            className='card-image'
          />
          <h2 className='card-title'>{movie.title || movie.name}</h2>
        </div>
      ))}
    </div>
    </>
  );
}

export default Movie;
