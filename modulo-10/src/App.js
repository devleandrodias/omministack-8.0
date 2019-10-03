import React from 'react';
import { Router } from 'react-router-dom';

import './configs/ReactotronConfig';

import history from './services/history';
import Routes from './routes';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Router history={history}>
      <GlobalStyles />
      <Routes />
    </Router>
  );
}

export default App;
