import React from 'react';

import Routes from './routes';
import './App.css';
import { RootStoreProvider } from './data/store/root-store';

const App = () => (
  <RootStoreProvider>
    <Routes />
  </RootStoreProvider>
);

export default App;
