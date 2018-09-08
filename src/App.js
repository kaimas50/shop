import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './routes/Home';
import Browse from './routes/Browse';
import Checkout from './routes/Checkout';
import { ShoppingCartProvider } from './state/ShoppingCartContext';
import { ROUTE_HOME, ROUTE_BROWSE, ROUTE_CHECKOUT } from './constants';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <ShoppingCartProvider>
          <Route exact path={ROUTE_HOME} component={Home} />
          <Route exact path={ROUTE_BROWSE} component={Browse} />
          <Route exact path={ROUTE_CHECKOUT} component={Checkout} />
        </ShoppingCartProvider>
      </div>
    );
  }
}

export default App;
