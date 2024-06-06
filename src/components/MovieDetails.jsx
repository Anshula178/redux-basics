import React from 'react'
import { useSelector } from 'react-redux'

const MovieDetails = () => {
    const {selectedMovie}=useSelector(state=>state)
  return (
    <div>
        <h3>Movie Details</h3>
        {
            selectedMovie ?
            <>
            <h5>{selectedMovie.title}</h5>
        <strong>{selectedMovie.lead}</strong>
        <p>{selectedMovie.year}</p>

            </>:"Please Select a movie"
        }
        
      
    </div>
  )
}

export default MovieDetails
