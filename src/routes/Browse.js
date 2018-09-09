import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Inventory from '../shopComponents/Inventory';
import * as api from '../api/dummyApi';
import { ShoppingCartConsumer } from '../state/ShoppingCartContext';
import Header from '../components/Header';
import { TITLE_INVENTORY } from '../constants';
import ShoppingCartWidget from '../shopComponents/ShoppingCartWidget';
import { PageBody } from '../components/HelperComponents';

class Browse extends React.Component {
  componentDidMount() {
    const items = api.getAllItems();
    this.props.context.setItems(items);
  }

  persistCart = () => {
    const { context } = this.props;
    api.setShoppingCart(context);
  }

  render() {
    const { context } = this.props;
    return (
      <React.Fragment>
        <Header title={TITLE_INVENTORY}>
          <CartWrapper>
            <ShoppingCartWidget
              totalPrice={context.getTotalPrice()}
              onNavigate={this.persistCart}
            />
          </CartWrapper>
        </Header>
        <PageBody>
          <Inventory shoppingCartContext={context} />
        </PageBody>
      </React.Fragment>
    );
  }
}
Browse.propTypes = {
  context: PropTypes.object.isRequired,
};

const CartWrapper = styled.div`
  top: 82px;
  position: absolute;
  right: 9px;
  font-size: 18px;
`;

export default props => (
  <ShoppingCartConsumer>
    {context => <Browse {...props} context={context} />}
  </ShoppingCartConsumer>
);
