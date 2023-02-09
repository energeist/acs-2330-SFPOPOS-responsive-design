// src/Title.js
import React from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';
import RandomSpace from './RandomSpace/RandomSpace';
// import SearchBar from './SearchBar/SearchBar';

function Title() {
  return (
    <div className='Title'>
      <header>
        <h1>SFPOPOS</h1>
        <div className='Title-Subtitle'>
          San Francisco Privately Owned Public Open Spaces
        </div>
        <div className="Title-Buttons">
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/"
            >
              List
          </NavLink>
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/about"
            >
              About
          </NavLink>
          <RandomSpace />
        </div>
      </header>
    </div>
  )
}

export default Title;