import React from "react";
import QuoteCard from "./QuoteCard";
import randomQuoteData from "../helpers/randomQuoteData";

function SimpsonsQuoteList() {
  const [quotes, setQuotes] = React.useState([]);

  // Runs for each render
  React.useEffect(() => {
    console.log("A rerender has been triggered");
    // dont call any functions here which update the state, this will cause infinite loops
  });

  // Runs once when the component is mounted
  React.useEffect(() => {
    console.log("component has mounted");
    fetchQuotes(10);
  }, []);

  // Runs every time the item in the dependency array updates
  React.useEffect(() => {
    console.log("new quotes have been loaded");
  }, [quotes]);

  function fetchQuotes(quoteCount) {
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${quoteCount}`)
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.log(error));
  }

  return (
    <div style={{ border: "2px solid blue" }}>
      <h1>Quotes List</h1>
      <button onClick={() => fetchQuotes(10)}>Fetch 10 Quotes</button>
      <button onClick={() => fetchQuotes(2)}>Fetch 2 Quotes</button>

      {quotes.map(function (item, index) {
        return <QuoteCard key={index} {...item} />;
      })}
      {/* <QuoteCard
        quote="Shoplifting is a victimless crime, like punching someone in the dark."
        character="Nelson Muntz"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
      /> */}
    </div>
  );
}

export default SimpsonsQuoteList;
