import React from 'react'

function NewListingForm({ handleChange, handleSubmit, formData }) {
    return (
        <form onSubmit={handleSubmit}>
            <h4>Add New Listing</h4>
            <input
                type='text'
                name='description'
                placeholder='description'
                onChange={handleChange}
                value={formData.description}
            />
            <input
                type='text'
                name='location'
                placeholder='location'
                onChange={handleChange}
                value={formData.location}
            />
            <input
                type='text'
                name='image'
                placeholder='image'
                onChange={handleChange}
                value={formData.image}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default NewListingForm
