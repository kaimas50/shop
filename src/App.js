import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Inventory from './components/Inventory';
import SaleItem from './components/SaleItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Inventory items={getDummyItems()} />
      </div>
    );
  }
}

function getDummyItems() {
  const items = [];
  for (let i = 0; i < 21; i += 1) {
    items.push(<SaleItem key={i} num={i} />);
  }
  return items;
}

export default App;
