import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BlogProvider from './Context/BlogProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <BlogProvider>
      <App />
    </BlogProvider>
  </BrowserRouter>
);

