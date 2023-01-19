import React from "react";

function PopularList({ popularMovies }) {
  return (
    <>
      {popularMovies.map((movie) => (
        <div className="movie-card">
          <img
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          ></img>
          <div className="card-details">
            <p className="movie-title">
              {movie.title ? movie.title : movie.name}
            </p>
            <p>
              {movie.release_date ? movie.release_date : movie.first_air_date}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default PopularList;
