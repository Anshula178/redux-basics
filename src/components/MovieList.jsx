import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectMovieAction } from '../actions/Index';

const MovieList = () => {
    const movies=useSelector((state)=>state.movies)
    const dispatch =useDispatch();
    const handleDetails =(movie)=>{
    dispatch(selectMovieAction(movie))
    }
  return (
    <div className='list-container'>
        <div className="mov-col">
    {
    movies.map((movie)=>{
        return(
        <div className="mov-col">
         <p>{movie.id}</p>
         <h5>{movie.title}</h5>
         <strong>{movie.lead}</strong>
         <p>{movie.year}</p>
         <button onClick={()=>{handleDetails(movie)}}>View</button>
        </div>
        )
    })
}
        </div>
      
    </div>
  )
}

export default MovieList
