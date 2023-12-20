import React, { useState } from 'react'
import app from '../../config/firebase.js'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

function Register() {
  const [email, setEmail] = useState("")
  const [emailConfirmation, setEmailConfirmation] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [isEmailMatching, setIsEmailMatching] = useState(false)
  const [isPasswordMatching, setIsPasswordMatching] = useState(false)

  
  const auth = getAuth(app)

  function handleSubmit(e) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message
      console.log(errorCode);
    })


  }

  
  return (
    <section>
    <h3>Create an account</h3>
    <form onSubmit={handleSubmit}>
        <input required placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}></input>
        <input required placeholder='Confirm Email'onChange={(e) => {setEmailConfirmation(e.target.value)}}></input>
        { isEmailMatching || !email ? null : <p>Email's do not match</p>}
        <input required placeholder='Password'onChange={(e) => {setPassword(e.target.value)}}></input>
        <input required placeholder='Confirm Password'onChange={(e) => {setPasswordConfirmation(e.target.value)}}></input>
        { isPasswordMatching || !password ? null : <p>Password's do not match</p>}
        <button type='submit'>Register</button>
    </form>
    </section>
  )
}

export default Register