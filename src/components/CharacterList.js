import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
      })
  }, []);

  return (
    <section className="character-list">
     {characters.map(item =>{
        return (
          <CharacterCard
            key={item.id}
            id={item.id}
            name={item.name}
            species={item.species}
            status={item.status}
            location={item.location.name}
            origin={item.origin.name}
            episode={item.episode}
            imgUrl={item.image}
            />
        );
      })};
    </section>
  );
}
