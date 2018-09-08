import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ShoppingCartWidget from '../shopComponents/ShoppingCartWidget';
import { ShoppingCartConsumer } from '../state/ShoppingCartContext';

const Header = props => {
  const { showCart } = props;
  return (
    <header className="App-header">
      <h1 className="App-title">{props.title}</h1>
      { showCart && (
        <CartWrapper>
          <ShoppingCartConsumer>
            {(context) => <ShoppingCartWidget shoppingCartContext={context} />}
          </ShoppingCartConsumer>
        </CartWrapper>
      )}
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  showCart: PropTypes.bool,
};
Header.defaultProps = {
  showCart: false,
};

const CartWrapper = styled.div`
  float: right;
  font-size: 18px;
`;

export default Header;
