import React from 'react'
import PropTypes from 'prop-types'
// import { link } from 'react-router-dom'


export default function
  NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/about">{props.aboutText}</a>
            </li>
          </ul>
          {/* <div className={`form-check mx-3 form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input type="checkbox" data-onstyle="success" className="form-check-input "  onClick={props.toggleModeTwo}  role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red Mode</label>
          </div>
          <div className={`form-check mx-3 form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleModeThree} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green Mode</label>
          </div> */}
          <div className={`form-check mx-3 form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
          <form className="d-flex" role="search">
            <input className={`form-control me-2 bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}  type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
NavBar.defaultProps = {
  title: 'Set Title Here',
  aboutText: 'Set Text Here'
}