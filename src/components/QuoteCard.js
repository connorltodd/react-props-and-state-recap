import React from "react";

function QuoteCard(props) {
  return (
    <div style={{ border: "2px solid red", margin: "50px" }}>
      <p>{props.quote}</p>
      <p>{props.character}</p>
      <img src={props.image} />
    </div>
  );
}

export default QuoteCard;
