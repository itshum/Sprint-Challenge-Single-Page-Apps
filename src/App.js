import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import TabNav from "./components/TabNav.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";



export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character" component={CharacterList} />
      <Route path="/location" component={LocationList} />
      <Route path="/episode" component={EpisodeList} />
    </main>
  );
}
