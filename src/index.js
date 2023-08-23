import React from "react";
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

import './index.scss';

import { Provider } from 'react-redux'; 
import { store } from './features/store'; 
import App from './Root'; // Import your main App component

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
