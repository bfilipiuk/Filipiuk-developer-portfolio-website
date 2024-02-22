import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './scripts/generateStars'
import Page from './page/page';
import BackgroundStars from './scripts/generateStars';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BackgroundStars />
    <Page />
  </React.StrictMode>
);