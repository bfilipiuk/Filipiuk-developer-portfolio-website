import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Page from './page/page';
import './scripts/scrollToTop';
import ScrollToTop from './scripts/scrollToTop';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Page />
    </Router>
  </React.StrictMode>
);