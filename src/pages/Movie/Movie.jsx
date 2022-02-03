import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Movie.module.css';

const MY_API_KEY = import.meta.env.VITE_APP_API_KEY;

const Movie = () => {
  
  const [ movie, setMovie ] = useState({});
  const { id } = useParams()

  const oneMovieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${MY_API_KEY}`;
  
  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const res = await fetch(oneMovieUrl);
    const data = await res.json();
    setMovie(data);
  }
  
  return (
    <section className={classes.movieContainer}>
      <h2 className={classes.movieTitle}>{movie.original_title}</h2>
    </section>
  );
};

export default Movie;
