import React from "react";
import "./App.css";
import RickAndMortySearch from "./components/RickAndMortySearch";
import SimpsonsQuoteList from "./components/SimpsonsQuoteList";

function App() {
  return (
    <div className="App">
      {/* <SimpsonsQuoteList /> */}
      <RickAndMortySearch />
    </div>
  );
}

export default App;
