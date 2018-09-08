import React from 'react';
import PropTypes from 'prop-types';
import Inventory from '../shopComponents/Inventory';
import { getAllItems } from '../api/mockApi';
import { ShoppingCartConsumer } from '../state/ShoppingCartContext';

const title = 'Inventory';

class Browse extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    this.props.setTitle(title);
    this.setState({ items: getAllItems() });
  }

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <ShoppingCartConsumer>
          {(context) => <Inventory items={items} shoppingCartContext={context} />}
        </ShoppingCartConsumer>
      </React.Fragment>
    );
  }
}

Browse.propTypes = {
  setTitle: PropTypes.func.isRequired,
};

export default Browse;
