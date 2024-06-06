//actions
 export const Increment=()=>{
return{
    type:"INCREMENT",
}
}
export const Decrement=()=>{
    return{
        type:"DECREMENT",}
}
export   const Reset=()=>{
        return{
            type:"INCREMENT", }
}
export    const IncrementByValue=(value)=>{
            return{
                type:"INCREMENTBYVALUE", 
                payload:value
            }
}


export const selectMovieAction=(movie)=>{
     return{
      type:"SELECTEDMOVIE",
      payload:movie
     }
}


