import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <section>
        <h3>Welcome to BrickSage</h3>
        <h4>Already a user?</h4>
        <form>
            <input placeholder='email'></input>
            <input placeholder='password'></input>
        </form>
        <h4>First time?</h4>
        <Link to={"/register"}><button>Register</button></Link>

    </section>
  )
}

export default LandingPage