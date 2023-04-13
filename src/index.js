import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './components/App';
import POPOSList from './components/POPOSList';
import About from './components/About';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import POPOSDetails from './components/POPOSDetails';
import NewsLetter from './components/NewsLetter';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<POPOSList />} />
        <Route path="about" element={<About />} />
        <Route path="/details/:id" element={<POPOSDetails />} />
        <Route path="/newsletter" element={<NewsLetter />} />
      </Route>
    </Routes>
  </Router>
);

reportWebVitals();