import React, { useEffect, useState } from 'react'
import app from '../../config/firebase.js'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

function Register() {
  const [email, setEmail] = useState("")
  const [emailConfirmation, setEmailConfirmation] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [isEmailMatching, setIsEmailMatching] = useState(false)
  const [isPasswordMatching, setIsPasswordMatching] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    checkMatchingInputs();
  }, [email, emailConfirmation, password, passwordConfirmation])

  
  const auth = getAuth(app)

  function handleSubmit(e) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      setIsRegistered(true)
      setEmail("");
      setEmailConfirmation("");
      setPassword("");
      setPasswordConfirmation("");
    })
    .catch((error) => {
      setIsRegistered(false)
      const errorCode = error.code;
      const errorMessage = error.message
      console.log(errorCode);
    })
  }

  function checkMatchingInputs() {
    setIsEmailMatching(email === emailConfirmation)
    setIsPasswordMatching(password === passwordConfirmation)
  }

  
  return (
    <section>
    <h3>Create an account</h3>
    <form onSubmit={handleSubmit}>
        <input required placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
        <input required placeholder='Confirm Email' value={emailConfirmation} onChange={(e) => {setEmailConfirmation(e.target.value)}}></input>
        { isEmailMatching || !email ? null : <p>Email's do not match</p>}
        <input required placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
        <input required placeholder='Confirm Password' value={passwordConfirmation} onChange={(e) => {setPasswordConfirmation(e.target.value)}}></input>
        { isPasswordMatching || !password ? null : <p>Password's do not match</p>}
        <button type='submit'>Register</button>
        { isRegistered ? <p>Successfully Registered</p> : null}
    </form>
    </section>
  )
}

export default Register