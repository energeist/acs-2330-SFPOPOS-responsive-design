/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';

import Title from './Title';
import Footer from './Footer';
import POPOSDetails from './POPOSDetails';
import { Outlet } from 'react-router-dom';

//add in query hook here, pass function to Title and pass filtered object to Outlet?
//hook might also go to index.js and pass there

function App() {
  return (
    <div>
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
