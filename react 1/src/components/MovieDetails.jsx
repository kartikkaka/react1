import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearSelectedMovie } from "../reducers/SelectedMovireducer";

const API = "https://api.themoviedb.org/3";
const KEY = "e366d974f73ae203397850eadc7bce1f";

const MovieDetails = ({ movieId }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const [details, credits, videos] = await Promise.all([
        axios.get(`${API}/movie/${movieId}?api_key=${KEY}`),
        axios.get(`${API}/movie/${movieId}/credits?api_key=${KEY}`),
        axios.get(`${API}/movie/${movieId}/videos?api_key=${KEY}`),
      ]);

        setData(details.data);
      setCast(credits.data.cast.slice(0, 6));

      const trailerVideo = videos.data.results.find(
        (v) => v.type === "Trailer"
      );
      setTrailer(trailerVideo);
    };

    fetchDetails();
  }, [movieId]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <button onClick={() => dispatch(clearSelectedMovie())}>❌</button>

      <h2>{data.title}</h2>
      <p>{data.overview}</p>

      
      {trailer && (
        <iframe
          title="trailer"
          src={`https://www.youtube.com/embed/${trailer.key}`}
        />
      )}

      <h3>Cast</h3>
      <ul>
        {cast.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;