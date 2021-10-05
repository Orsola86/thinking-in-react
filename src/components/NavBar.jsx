import React, {useState} from 'react'


const NavBar = ({menuOpen}) => (
    <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
    <div className="container">
        <div className="navbar-header">
        <a className="navbar-brand" href="/">
            My Library
        </a>
        </div>
        <ul className="nav navbar-nav pull-right">
        <li>
            <button className="btn btn-lg btn-outline" onClick={menuOpen}>
            <i className="fa fa-graduation-cap" /> <span>Menu</span>
            </button>
        </li>
        </ul>
    </div>
    </nav>
)

export default NavBar;
      
