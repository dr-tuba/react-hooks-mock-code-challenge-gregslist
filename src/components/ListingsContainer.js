import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings, inputText }) {
  const handleDeleteButton = (e) => {
    const arrayWithoutDeletedListing = listings.filter(listing => parseInt(e.target.id) !== listing.id)
    setListings(arrayWithoutDeletedListing)
    fetch(`http://localhost:6001/listings/${e.target.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json'
      }
    })
  }
  
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => { 
          if (listing.description.toLowerCase().startsWith(inputText.toLowerCase())) 
            return (
          <ListingCard 
            key={listing.id}
            id={listing.id}
            description={listing.description}
            image={listing.image}
            location={listing.location}
            handleDeleteButton={handleDeleteButton}
          />
        )})}
      </ul>
    </main>
  );
}

export default ListingsContainer;
