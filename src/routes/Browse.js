import React from 'react';
import Inventory from '../shopComponents/Inventory';
import { getAllItems } from '../api/mockApi';
import { ShoppingCartConsumer } from '../state/ShoppingCartContext';
import Header from '../components/Header';
import { TITLE_INVENTORY } from '../constants';

class Browse extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    this.setState({ items: getAllItems() });
  }

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <Header title={TITLE_INVENTORY} showCart />
        <ShoppingCartConsumer>
          {(context) => <Inventory items={items} shoppingCartContext={context} />}
        </ShoppingCartConsumer>
      </React.Fragment>
    );
  }
}

export default Browse;
