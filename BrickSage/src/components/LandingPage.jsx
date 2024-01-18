import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../../config/firebase.js'
import { UserContext } from '../contexts/UserContext.jsx'

function LandingPage() {
  const {user} = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useContext(UserContext)

  console.log(user);

  const auth = getAuth(app)
  function handleLogin(e) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      login(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message
      console.log(errorMessage);
      console.log(errorCode)
    })

  }
  return (
    <section>
        <h3>Welcome to BrickSage</h3>
        <h4>Already a user?</h4>
        <form onSubmit={handleLogin}>
            <input onChange={(e) => setEmail(e.target.value)} placeholder='email'></input>
            <input onChange={(e) => setPassword(e.target.value)} placeholder='password'></input>
            <button type='submit'>Log In</button>
        </form>
        <h4>First time?</h4>
        <Link to={"/register"}><button>Register</button></Link>

    </section>
  )
}

export default LandingPage