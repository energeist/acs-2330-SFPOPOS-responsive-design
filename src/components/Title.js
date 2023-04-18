// src/Title.js
import React from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';
import RandomSpace from './RandomSpace/RandomSpace';
// import SearchBar from './SearchBar/SearchBar';

function Title() {
  return (
    <section className='Title'>
  <header>
    <h1>SFPOPOS</h1>
    <h2 className='Title-Subtitle'>
      San Francisco Privately Owned Public Open Spaces
    </h2>
    <nav className="Title-Buttons" aria-label="Main Navigation">
      <section className="ListAbout">
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/"
          aria-label="Spaces List Navigation Link"
        >
          List
        </NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/about"
          aria-label="About Page Navigation Link"
        >
          About
        </NavLink>
      </section>
      <NavLink
        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
        to="/newsletter"
        id="newsletter"
        aria-label="Newsletter Subscription Navigation Link"
      >
        Sign up for our newsletter!    
      </NavLink>
      <RandomSpace aria-label="Random POPOS" />
    </nav>
  </header>
</section>
  )
}

export default Title;