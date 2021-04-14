import { getSuggestedQuery } from "@testing-library/dom";
import React from "react";

function RickAndMortySearch() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    fetchCharacters(query);
  }, [query]);

  function fetchCharacters(searchQuery) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => setResults(data.results));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for your favourite character"
        onChange={(event) => setQuery(event.target.value)}
      />
      {results.map(function (item) {
        return <h1>{item.name}</h1>;
      })}
    </div>
  );
}

export default RickAndMortySearch;
