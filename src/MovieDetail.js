// src/components/MovieDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Movie 1",
    description: "Description for Movie 1",
    trailerLink: "https://www.youtube.com/embed/your-trailer-id1",
  },
  {
    id: 2,
    title: "Movie 2",
    description: "Description for Movie 2",
    trailerLink: "https://www.youtube.com/embed/your-trailer-id2",
  },
  // Add more movies as needed
];

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div>
        {/* Embed YouTube trailer */}
        <iframe
          title="trailer"
          width="560"
          height="315"
          src={movie.trailerLink}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default MovieDetail;
