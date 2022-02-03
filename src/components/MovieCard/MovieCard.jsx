import { Link } from 'react-router-dom'

import classes from './MovieCard.module.css';

const IMAGE_URL = `https://image.tmdb.org/t/p/w500`

const MovieCard = ({ id, poster_path }) => {

  return (
    <div className={classes.movie} tabIndex={0}>
      <img className={classes.image} src={`${IMAGE_URL}${poster_path}`} alt="movie poster" />
      <Link to={`/${id}`} className={classes.detailsBtn}>more details</Link>
    </div>
  );
};

export default MovieCard;