import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './scripts/generateStars'
import Page from './page/page';
import BackgroundStars from './scripts/generateStars';
import './scripts/scrollToTop';
import ScrollToTop from './scripts/scrollToTop';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <BackgroundStars />
      <Page />
    </Router>
  </React.StrictMode>
);