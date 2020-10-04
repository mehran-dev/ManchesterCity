import React from 'react';
import Layout from './hoc/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';






const Routes = () => {
  return (
    <Layout>Second line

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  )
}

export default Routes;
