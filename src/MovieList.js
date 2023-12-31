// src/components/MovieList.js
import React from "react";
import { Link } from "react-router-dom";

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

const MovieList = () => {
  return (
    <div>
      <h1>Movie App</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
