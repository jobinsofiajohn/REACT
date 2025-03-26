import React from 'react'
import { validator } from './functions/validator.js'

const Form = () => {
  return(
    <>
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name"/>
     <label htmlFor="email">Email</label>    
     <input type="text" name="email" id="email"/>
     <label htmlFor="phone">Phone</label>    
     <input type="text" name="phone" id="phone"/>
    <label htmlFor="pwd">Password</label>    
     <input type="text" name="pwd" id="pwd"/>
    <button type="button" onClick={validator}>Submit</button>
    </form>
    </>
  )
}

export default Form
