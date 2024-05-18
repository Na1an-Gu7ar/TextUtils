import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} navbar-${props.Greymode==='lightgrey'?'secondary':'light'} bg-${props.Greymode==='lightgrey'?'secondary':'light'}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-1`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?"Light Mode":"Dark Mode"}</label>
                        </div>
                        <div className={`form-check form-switch text-${props.Greymode==='lightgrey'?'dark':'dark'} mx-1`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleGreyMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.Greymode==='light'?"Light Mode":"Grey Mode"}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

// Due to proptypes we cannot change title and aboutText to number or any other data types
Navbar.propTypes = {
    title: propTypes.string,
    aboutText: propTypes.string
}

// Navbar.propTypes = {
//     title: propTypes.string.isRequired,
//     aboutText: propTypes.string.isRequired
// }

Navbar.defaultProps = {
    title: "set title",
    aboutText: "set aboutText"
}