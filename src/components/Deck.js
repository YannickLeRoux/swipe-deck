import React from "react";

const Deck = ({ data, renderCard }) => {
  const renderCards = () => data.map(card => renderCard(card));

  return <div>{renderCards()}</div>;
};

export default Deck;
