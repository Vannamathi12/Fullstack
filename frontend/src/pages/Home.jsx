import React, { useContext } from 'react'
import { InfoTextContext } from '../hooks/InfoText'

function Home() {
  const info = useContext(InfoTextContext)
  return (
    <div>
      <h1>Home Page</h1>
      <p>Name: {info.name}</p>
      <p>Age: {info.age}</p>
      <p>City: {info.city}</p>
    </div>
  )
}

export default Home
