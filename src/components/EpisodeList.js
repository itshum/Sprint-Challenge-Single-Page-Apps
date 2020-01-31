import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(()=> {
    axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(res => {
          console.log(res.data.results);
          setEpisodes(res.data.results);
      })
  },[])

return (
    <section className="episode-list grid-view">
        {episodes.map(item => {
            return (
                <EpisodeCard 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    episode={item.episode}
                    airDate={item.air_date}
                />
            )
        })}
    </section>
)
} 