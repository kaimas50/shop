/* eslint react/no-unused-state: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import * as helper from './ShoppingCartHelper';
import { getShoppingCart } from '../api/dummyApi';

const ShoppingCartContext = React.createContext({});

export const ShoppingCartConsumer = ShoppingCartContext.Consumer;

export class ShoppingCartProvider extends React.Component {
  constructor(props) {
    super(props);
    this.getDefaultState = this.getDefaultState.bind(this);
    this.getAmount = this.getAmount.bind(this);
    this.getChangeHandler = this.getChangeHandler.bind(this);
    this.setItems = this.setItems.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
    this.getAllItems = this.getAllItems.bind(this);
    this.clear = this.clear.bind(this);

    this.state = this.getDefaultState();

    const persistedCart = getShoppingCart();
    if (persistedCart) this.state = { ...this.state, ...persistedCart };
  }

  getDefaultState() {
    return {
      itemAmounts: {},
      items: [],
      getAmount: this.getAmount,
      getChangeHandler: this.getChangeHandler,
      setItems: this.setItems,
      getTotalPrice: this.getTotalPrice,
      getAllItems: this.getAllItems,
      clear: this.clear,
    };
  }

  newChangeHandler = (itemId) => (value) => {
    const { itemAmounts } = this.state;
    this.setState({ itemAmounts: { ...itemAmounts, [itemId]: value } });
  }

  getAmount(itemId) {
    const { itemAmounts } = this.state;
    return itemAmounts[itemId] || 0;
  }

  setItems(items) {
    this.setState({ items: [...items] });
  }

  getAllItems() {
    return Object.values(this.state.items);
  }

  getChangeHandler(itemId) {
    return this.newChangeHandler(itemId);
  }

  getTotalPrice() {
    const { items, itemAmounts } = this.state;
    return helper.getTotalPrice(items, itemAmounts);
  }

  clear() {
    this.setState(this.getDefaultState());
  }

  render() {
    window.ctx = this.state;
    return (
      <ShoppingCartContext.Provider value={this.state}>
        {this.props.children}
      </ShoppingCartContext.Provider>
    );
  }
}
ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
