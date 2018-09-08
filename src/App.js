import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Inventory from './shopComponents/Inventory';
import { getAllItems } from './api/mockApi';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <header className="App-header">
          <h1 className="App-title">Welcome to the Shop</h1>
        </header>
        <Inventory items={getAllItems()} />
      </div>
    );
  }
}

export default App;
