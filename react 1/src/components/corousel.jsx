import { useState } from "react";

const Carousel = ({ items = [] }) => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  if (!items.length) return null;

  const movie = items[index];
  const image = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <section className="carousel">
      <button onClick={prev}>◀</button>
      <img src={image} alt={movie.title} />
      <button onClick={next}>▶</button>
    </section>
  );
};

export default Carousel;