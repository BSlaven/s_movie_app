import classes from './MovieCard.module.css';

const IMAGE_URL = `https://image.tmdb.org/t/p/w500`

const MovieCard = ({ original_title, id, poster_path }) => {

  return (
    <div className={classes.movie} tabIndex={0}>
      <img className={classes.image} src={`${IMAGE_URL}${poster_path}`} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
