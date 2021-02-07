import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/repositories/:repository+" component={Repository}/>
  </>
);
export default Routes;