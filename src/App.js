import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeLite from './components/Home/HomeLite';
import HomePro from './components/Home/HomePro';
import ModeChooser from './components/ModeChooser/ModeChooser';


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={ModeChooser} />
          <Route path="/lite" component={HomeLite} />
          <Route path="/pro" component={HomePro} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
