import { useDispatch } from "react-redux";
import { setSelectedMovie } from "../reducers/SelectedMovireducer";

const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();

    const image =  movie.poster_path || movie.backdrop_path
      ? `https://image.tmdb.org/t/p/w342${
          movie.poster_path || movie.backdrop_path
        }`: "" ;
          return (
    <article
      className="movie-card"
      onClick={() => dispatch(setSelectedMovie(movie.id))}
    >
      <img src={image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.overview.slice(0, 120)}...</p>
    </article>
  );
};

export default MovieCard;

