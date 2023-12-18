import React from 'react'
import app from '../../config/firebase.js'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

function Register() {
  const auth = getAuth(app)
  
  return (
    <section>
    <h3>Create an account</h3>
    <form>
        <input placeholder='Email'></input>
        <input placeholder='Confirm Email'></input>
        <input placeholder='Password'></input>
        <input placeholder='Confirm Password'></input>
        <button type='submit'>Register</button>
    </form>
    </section>
  )
}

export default Register