import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from '../src/navigation/Routes'
import Providers from './Providers';

const App = () => {
  return (
    <Providers>
      <Router>
        <Routes />
      </Router>
    </Providers>
  );
}

export default App;
