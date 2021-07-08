import React from "react";
import { useState } from 'react';

function ListingCard({ description, image, location, handleDeleteButton, id }) {
  const [isFavorited, setIsFavorited] = useState(false)

  const handleStarClick = () => {
    setIsFavorited(!isFavorited)
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={handleStarClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleStarClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button id={id} onClick={handleDeleteButton} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
