import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { ROUTE_CHECKOUT } from '../constants';

class ShoppingCartWidget extends Component {
  render() {
    const { shoppingCartContext } = this.props;
    const totalPrice = shoppingCartContext.getTotalPrice();
    return (
      <div>
        <div>{`TOTAL: ${totalPrice}€`}</div>
        <CheckoutButton
          hide={totalPrice === '0.00' ? 1 : 0} // throws warning if bool passed
          color="secondary"
          component={Link}
          to={ROUTE_CHECKOUT}
        >
          {'Checkout >>>'}
        </CheckoutButton>
      </div>
    );
  }
}
ShoppingCartWidget.propTypes = {
  shoppingCartContext: PropTypes.object.isRequired,
};

const CheckoutButton = styled(Button)`
  visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
`;

export default ShoppingCartWidget;
