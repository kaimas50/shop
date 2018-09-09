import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import Home from './routes/Home';
import Browse from './routes/Browse';
import Checkout from './routes/Checkout';
import * as api from './api/dummyApi';
import { ShoppingCartProvider } from './state/ShoppingCartContext';
import { ROUTE_HOME, ROUTE_BROWSE, ROUTE_CHECKOUT } from './constants';

class App extends React.Component {
  componentDidMount() {
    addResponseMessage('Hi, need help?');
  }

  handleNewUserMessage = (msg) => {
    addResponseMessage(api.sendMessage(msg));
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <ShoppingCartProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path={ROUTE_HOME} component={Home} />
              <Route exact path={ROUTE_BROWSE} component={Browse} />
              <Route exact path={ROUTE_CHECKOUT} component={Checkout} />
            </Switch>
          </BrowserRouter>
        </ShoppingCartProvider>
        <Widget handleNewUserMessage={this.handleNewUserMessage} title="WELCOME" subtitle="The Shop Chat" />
      </div>
    );
  }
}

export default App;
