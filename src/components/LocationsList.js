import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);
  
    useEffect(()=> {
      axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(res => {
            console.log(res.data.results);
            setLocations(res.data.results);
        })
    },[])
  
  return (
      <section className="location-list grid-view">
          {locations.map(item => {
              return (
                  <LocationCard 
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      type={item.type}
                      dimension={item.dimension}
                      residents={item.residents.length}
                  />
              )
          })}
      </section>
  )
}