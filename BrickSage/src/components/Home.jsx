import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

function Home() {
    const { user } = useContext(UserContext)
    console.log(user);
  return (
    <div>Home</div>
  )
}

export default Home