import { combineReducers } from "redux";

//reducers
export const counterReducer=(state=0,action)=>{
  switch(action.type){
    case "INCREMENT":return state+1;
    case "DECREMENT":return state-1;
    case "RESET":return 0;
    case "INCREMENT BY VALUE":return state+action.payload;
    default:return state;
  }
}
const movieListReducer = () => {
  return [
    { id: 1, title: "Iron Man", lead: "Robert Downey Jr.", year: 2008 },
    { id: 2, title: "The Dark Knight", lead: "Christian Bale", year: 2008 },
    { id: 3, title: "Inception", lead: "Leonardo DiCaprio", year: 2010 },
    { id: 4, title: "The Avengers", lead: "Robert Downey Jr.", year: 2012 },
    { id: 5, title: "Interstellar", lead: "Matthew McConaughey", year: 2014 }
  ];
};
const selectedMovieReducer =(state=null,action)=>{
  switch(action.type){
    case"SELECTEDMOVIE":return action.payload;
    default:return state;
  }
}

const reducer=combineReducers({
    count:counterReducer,
    movies:movieListReducer,
    selectedMovie:selectedMovieReducer
})
export default reducer;