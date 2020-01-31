import React, { useState, useEffect } from "react";
import axios from "axios"

export default function SearchForm( onSearch ) {
 
  const [character, setCharacter] = useState("")
  const [part2, setPart2] = useState("")
  const [part3, setPart3] = useState("")

  const handleInputChange  =  (event) => {
    setCharacter(event.target.value)
    // console.log(character);
}

const submitForm = (event) => {
  event.preventDefault();
  // console.log(character);
  setPart2(character);   
}

useEffect(() => {
  console.log(part2)
  axios.get(`https://rickandmortyapi.com/api/character/?name=${part2}`)
      .then(response => {
          console.log(response.data)
      })
      .catch(error => {
      console.error('Server Error', error);
      });  
}, [part2]);


  return (
    <section className="search-form">
    <form onSubmit={submitForm}>
      <input
        placeholder="Search here"
        value={character.name}
        name="name"
        onChange={handleInputChange}
      />
      </form>
      <button type="submit">Search</button>
  </section>
);
}

