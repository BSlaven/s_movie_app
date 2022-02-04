import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import classes from './Movie.module.css';

const MY_API_KEY = import.meta.env.VITE_APP_API_KEY;

const IMAGE_URL = `https://image.tmdb.org/t/p/w500`

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
      <div className={classes.imageContainer}>
        <img
          className={classes.movieImage}
          src={`${IMAGE_URL}${movie.poster_path}`}
          alt="movie poster" />
      </div>
      <div className={classes.movieDetails}>
        <div className={classes.category}>
          <span className={classes.categoryName}>Title: </span>
          <p className={classes.movieTitle}>{movie.original_title}</p>
        </div>
        <div className={classes.category}>
          <span className={classes.categoryName}>Overview: </span>
          <p>{movie.overview}</p>
        </div>
        <div className={classes.category}>
          <span className={classes.categoryName}>Release Date: </span>
          <p>{movie.release_date}</p>
        </div>
        <Link className={classes.backHomeLink} to='/'>Go Back</Link>
      </div>
    </section>
  );
};

export default Movie;
