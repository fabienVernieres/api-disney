import React from "react";

const Menu = ({ movies, movieSelected, setMovieSelected }) => {
  return (
    <div>
      <label htmlFor="selectMovie" className="mb-2">
        Sélectionnez un film
      </label>
      <select
        className="form-select form-select-lg mb-3"
        id="selectMovie"
        aria-label=".form-select-lg example"
        value={movieSelected}
        onChange={(e) => setMovieSelected(e.target.value)}
      >
        <option>Choisir un film</option>
        {movies.map((movie, index) => (
          <option value={movie} key={index}>
            {movie}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Menu;
