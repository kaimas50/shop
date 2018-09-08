/* eslint react/no-unused-state: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import * as helper from './ShoppingCartHelper';

const ShoppingCartContext = React.createContext({
  items: [],
});

export const ShoppingCartConsumer = ShoppingCartContext.Consumer;

export class ShoppingCartProvider extends React.Component {
  constructor(props) {
    super(props);
    this.getAmount = this.getAmount.bind(this);
    this.getChangeHandler = this.getChangeHandler.bind(this);
    this.setItems = this.setItems.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);

    this.state = {
      itemAmounts: {},
      items: {},
      changeHandlers: {},
      getAmount: this.getAmount,
      getChangeHandler: this.getChangeHandler,
      setItems: this.setItems,
      getTotalPrice: this.getTotalPrice,
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
    this.setState({ items });
  }

  getChangeHandler(itemId) {
    const { changeHandlers } = this.state;
    if (!changeHandlers[itemId]) changeHandlers[itemId] = this.newChangeHandler(itemId);
    return changeHandlers[itemId];
  }

  getTotalPrice() {
    const { items, itemAmounts } = this.state;
    return helper.getTotalPrice(items, itemAmounts);
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
