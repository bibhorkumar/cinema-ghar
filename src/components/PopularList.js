import React from "react";
import ThemeContext from "../ThemeContext";

function PopularList({ popularMovies }) {

  const darkMode =React.useContext(ThemeContext)
  const cardClassName= darkMode ? "movie-card dark" : "movie-card"
  return (
    <>
      {popularMovies.map((movie) => (
        <div className={cardClassName}>
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
