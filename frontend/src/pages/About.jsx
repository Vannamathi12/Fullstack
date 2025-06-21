import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to='/state'>Usestate Example</Link><br/>
      <Link to='/form'>Controlled Form</Link>
      <Link to='/effect'>UseEffect Example</Link>
    </div>
  )
}

export default About
