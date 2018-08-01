import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export const Navigator = ({ children }) => (
  <Router>
    {children}
  </Router>
);
