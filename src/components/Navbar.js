import React from 'react'
import PropTypes from 'prop-types'

import { Link  } from "react-router-dom";




export default function Navbar(props)
{
   return (

   
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.homeText}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/textform">Contact</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

   )

   
}


Navbar.propTypes= {
    title:PropTypes.string,
    aboutText:PropTypes.string
}

Navbar.defaultProps= {
    title:"My Title",
    aboutText:"My About Text"
}



