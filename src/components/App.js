import React from "react";
import { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from "./NewListingForm";

function App() {
  const [listings, setListings] = useState([])
  const [inputText, setInputText] = useState('')
  const [formData, setFormData] = useState({
    description: '',
    location: '',
    image: ''
})
 
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp=>resp.json())
    .then(data=>setListings(data))
  }, [listings])

  const handleSortClick = () => {
    const sortedArrayByLocation = [...listings].sort(function(a, b) {
      let locationA = a.location.toUpperCase();
      let locationB = b.location.toUpperCase();
      if (locationA < locationB) {
        return -1
      }
      if (locationA > locationB) {
        return 1
      }
    })
    setListings(sortedArrayByLocation)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:6001/listings', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(formData)
    })
    setListings([...listings, formData])
}

  return (
    <div className="app">
      <Header 
        inputText={inputText}
        setInputText={setInputText}
        handleSortClick={handleSortClick}
        formData={formData}
        setFormData={setFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <NewListingForm 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ListingsContainer 
        listings={listings}
        setListings={setListings}
        inputText={inputText}
        handleSortClick={handleSortClick}
      />
    </div>
  );
}

export default App;
