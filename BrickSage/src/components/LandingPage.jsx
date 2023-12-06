import React from 'react'

function LandingPage() {
  return (
    <section>
        <h3>Welcome to BrickSage</h3>
        <h4>Already a user?</h4>
        <form>
            <input placeholder='username'></input>
            <input placeholder='password'></input>
        </form>
        <h4>First time?</h4>
        <button>Register</button>

    </section>
  )
}

export default LandingPage