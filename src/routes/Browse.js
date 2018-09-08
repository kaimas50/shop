import React from 'react';
import PropTypes from 'prop-types';
import Inventory from '../shopComponents/Inventory';
import { getAllItems } from '../api/mockApi';
import { ShoppingCartConsumer } from '../state/ShoppingCartContext';
import Header from '../components/Header';
import { TITLE_INVENTORY } from '../constants';

class Browse extends React.Component {
  componentDidMount() {
    const items = getAllItems();
    this.props.context.setItems(items);
  }

  render() {
    const { context } = this.props;
    return (
      <React.Fragment>
        <Header title={TITLE_INVENTORY} showCart />
        <Inventory shoppingCartContext={context} />
      </React.Fragment>
    );
  }
}
Browse.propTypes = {
  context: PropTypes.object.isRequired,
};

export default props => (
  <ShoppingCartConsumer>
    {context => <Browse {...props} context={context} />}
  </ShoppingCartConsumer>
);
