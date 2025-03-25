import React from 'react';
import {compute} from './compute/function.js'


const Selector = () =>{
  return(
    <>
    <select id="operand">
      <option>x</option>
      <option>+</option>
      <option>-</option>
      <option>/</option>
    </select> 
    </>
  )
}

const Comp = () => {
  return(
    <>
    <input type="text" id="opOne"></input>
    <span> <Selector /> </span>
    <input type="text" id="opTwo"></input><span> <button onClick={compute}> = </button> </span>
    <input type="text" id="out"></input>
    </>
  )
}

export default Comp
