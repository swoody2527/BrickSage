import React from 'react'

function Register() {
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