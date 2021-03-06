import React from 'react';
import Helmet from 'react-helmet-async';
import Route from 'react-router-dom/Route';
import Home from './pages/home';
import Login from './pages/login';
import Console from './pages/console';

const App = () => (
  <div>
    <Helmet>
      <title>Boilerplate SPA Frontend</title>
    </Helmet>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/console" component={Console} />
  </div>
);

export default App;
