import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function App() {
  return (
    <MuiThemeProvider>
      <div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/example" component={ExampleComponent} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </MuiThemeProvider>
  );
}
