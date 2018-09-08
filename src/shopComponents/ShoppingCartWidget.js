import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { ROUTE_CHECKOUT } from '../constants';

class ShoppingCartWidget extends Component {
  render() {
    const { shoppingCartContext } = this.props;
    return (
      <div>
        <div>{`TOTAL: ${shoppingCartContext.getTotalPrice()}€`}</div>
        <Button
          color="secondary"
          component={Link}
          to={ROUTE_CHECKOUT}
        >
          {'Checkout >>>'}
        </Button>
      </div>
    );
  }
}

ShoppingCartWidget.propTypes = {
  shoppingCartContext: PropTypes.object.isRequired,
};

export default ShoppingCartWidget;
