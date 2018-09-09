import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { ROUTE_CHECKOUT, SYMBOL_EURO } from '../constants';

class ShoppingCartWidget extends Component {
  render() {
    const { totalPrice, onNavigate } = this.props;
    return (
      <div>
        <div>{`TOTAL: ${totalPrice}${SYMBOL_EURO}`}</div>
        <CheckoutButton
          hide={totalPrice === '0.00' ? 1 : 0} // throws warning if bool passed
          color="secondary"
          component={Link}
          to={ROUTE_CHECKOUT}
          onClick={onNavigate}
        >
          {'Checkout >>>'}
        </CheckoutButton>
      </div>
    );
  }
}
ShoppingCartWidget.propTypes = {
  totalPrice: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

const CheckoutButton = styled(Button)`
  visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
`;

export default ShoppingCartWidget;
