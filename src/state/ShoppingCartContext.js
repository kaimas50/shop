/* eslint react/no-unused-state: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCartContext = React.createContext({
  items: [],
});

export const ShoppingCartConsumer = ShoppingCartContext.Consumer;

export class ShoppingCartProvider extends React.Component {
  constructor(props) {
    super(props);
    this.getAmount = this.getAmount.bind(this);
    this.getChangeHandler = this.getChangeHandler.bind(this);

    this.state = {
      items: {},
      changeHandlers: {},
      getAmount: this.getAmount,
      getChangeHandler: this.getChangeHandler,
    };
  }

  newChangeHandler = (itemId) => (value) => {
    const { items } = this.state;
    this.setState({ items: { ...items, [itemId]: value } });
  }

  getAmount(itemId) {
    const { items } = this.state;
    return items[itemId] || 0;
  }

  getChangeHandler(itemId) {
    const { changeHandlers } = this.state;
    if (!changeHandlers[itemId]) changeHandlers[itemId] = this.newChangeHandler(itemId);
    return changeHandlers[itemId];
  }

  render() {
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
