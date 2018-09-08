import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './routes/Home';
import Browse from './routes/Browse';
import Checkout from './routes/Checkout';
import { ExpandingDiv } from './components/HelperComponents';
import styled from 'styled-components';

class App extends Component {
  state = {
    title: '',
  }

  setTitle = (title) => this.setState({ title });

  withProps = (WrappedComponent) =>
    (props) => <WrappedComponent setTitle={this.setTitle} {...props} />;

  WithPropsHome = this.withProps(Home);
  WithPropsBrowse = this.withProps(Browse);
  WithPropsCheckout = this.withProps(Checkout);

  render() {
    const { title } = this.state;

    return (
      <div className="App">
        <CssBaseline />
        <header className="App-header">
          <h1 className="App-title">{title}</h1>
        </header>
        <Body>
          <Route exact path="/" component={this.WithPropsHome} />
          <Route exact path="/browse" component={this.WithPropsBrowse} />
          <Route exact path="/checkout" component={this.WithPropsCheckout} />
        </Body>
      </div>
    );
  }
}

const Body = styled.div`
  flex: 1;
`;

export default App;
