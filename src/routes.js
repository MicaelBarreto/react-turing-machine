import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './partials/header/Header';
import Footer from './partials/footer/Footer';

import Setup from './pages/setup/Setup';
import Run from './pages/run/Run';
import Log from './pages/log/Log';

const Routes = () => (
    <Router>
      <Header />
      <Route path='/' exact component={() => <Setup />} />
      <Route path='/run' exact component={() => <Run />} />
      <Route path='/log' exact component={() => <Log />} />
      <Footer />
    </Router>
);

export default Routes;