import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment, IncrementByValue, Reset } from '../actions/Index';

const Counter = (props) => {
    const dispatch=useDispatch(); 
    const count =useSelector((state)=>state.count);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>{dispatch(Increment)}}>Increment</button>
      <button onClick={()=>{dispatch(Decrement)}}>Decrement</button>
      <button onClick={()=>{dispatch(Reset)}}>Reset</button>
      <button onClick={()=>{dispatch(IncrementByValue(5))}}>Increment By Value</button>
    </div>
  )
}

export default Counter
