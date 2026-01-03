import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { initializeMovies } from "./reducers/MovieReducer";
import Header from "./components/Header";
import Carousel from "./components/corousel";
import MovieCard from "./components/MoviCard";
import MovieDetails from "./components/MovieDetails";

const API =
  "https://api.themoviedb.org/3/movie/popular?api_key=e366d974f73ae203397850eadc7bce1f";

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const selectedMovie = useSelector((state) => state.selectedMovie);

    useEffect(() => {
    axios.get(API).then((res) => {
      dispatch(initializeMovies(res.data.results));
    });
  }, [dispatch]);

  if (selectedMovie) {
    return <MovieDetails movieId={selectedMovie} />;
  }

    return (
    <>
      <Header />
      <Carousel items={movies.slice(0, 8)} />

      <section className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}

export default App;