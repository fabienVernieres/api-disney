import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Menu from "./Menu";
import Loader from "./Loader";

const Body = (props) => {
  const [loader, setLoader] = useState(true);
  const [characters, setCharacters] = useState([]);
  const movies = [];
  const [movieSelected, setMovieSelected] = useState("The Lion King");

  // Chargement de l'API.
  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = async () => {
    try {
      const response = await axios.get(
        "https://api.disneyapi.dev/characters?pageSize=500000"
      );

      setCharacters(response.data.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Liste des films.
  characters.map(
    (character) =>
      !movies.includes(character.films[0]) && movies.push(character.films[0])
  );
  movies.sort();

  return loader ? (
    // Chargement en cours.
    <Loader loader={loader} />
  ) : (
    <div className="container bg-light p-3 mb-3">
      <div>
        {/* Liste des films déroulante. */}
        <Menu
          movies={movies}
          movieSelected={movieSelected}
          setMovieSelected={setMovieSelected}
        />
      </div>
      <div className="row">
        {/* Affichage des personnage du film sélectionné et ayant une image. */}
        {characters
          .filter((character) => character.films.includes(movieSelected))
          .filter((character) => character.imageUrl)
          .map((character) => (
            <Card
              key={character._id}
              character={character}
              setLoader={setLoader}
            />
          ))}
      </div>
    </div>
  );
};

export default Body;
