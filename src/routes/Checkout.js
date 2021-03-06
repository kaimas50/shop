import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';
import { TITLE_CHECKOUT, ROUTE_BROWSE, SYMBOL_EURO, ROUTE_HOME } from '../constants';
import LinkButton from '../components/LinkButton';
import { ShoppingCartConsumer } from '../state/ShoppingCartContext';
import CheckoutItemDetails from '../shopComponents/CheckoutDetails';
import { PageBody, BigText, Layout } from '../components/HelperComponents';
import * as api from '../api/dummyApi';

class Checkout extends React.Component {
  CheckoutItems = () => {
    const { context } = this.props;
    return context.getAllItems()
      .filter(item => context.getAmount(item.id))
      .map(item => {
        return (
          <CheckoutItemDetails
            key={item.id}
            item={item}
            amount={context.getAmount(item.id)}
          />
        );
      });
  };

  handleConfirm = () => {
    const { context } = this.props;
    const { items, itemAmounts, getTotalPrice } = context;
    api.submit({ items, itemAmounts, getTotalPrice });
    context.clear();
  }

  render() {
    const { context } = this.props;
    const total = context.getTotalPrice();
    return (
      <Layout>
        <Header title={TITLE_CHECKOUT}>
          <BackWrapper>
            <LinkButton label={'<<< Back to inventory'} to={ROUTE_BROWSE} />
          </BackWrapper>
        </Header>
        <PageBody>
          <ItemsWrapper>
            <this.CheckoutItems />
          </ItemsWrapper>
          <TextWrapper>
            <StyledBigText>{`TOTAL: ${total}${SYMBOL_EURO}`}</StyledBigText>
          </TextWrapper>
          <LinkWrapper>
            <LinkButton
              label="CONFIRM"
              to={ROUTE_HOME}
              buttonProps={{
                variant: 'contained',
                onClick: this.handleConfirm,
              }}
            />
          </LinkWrapper>
        </PageBody>
      </Layout>
    );
  }
}
Checkout.propTypes = {
  context: PropTypes.object.isRequired,
};

const BackWrapper = styled.div`
  left: 10px;
  top: 100px;
  position: absolute;
`;

const TextWrapper = styled.div`
  margin-bottom: 20px;
`;
const StyledBigText = styled(BigText)`
  text-align: right;
  width: 50%;
  border-top: 1px solid black;
  padding-top: 4px;
  display: inline-block;
`;

const ItemsWrapper = styled.div`
  display: flex;
  margin-left: 50%;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const LinkWrapper = styled.div`
  margin-bottom: 14px;
`;

export default props => (
  <ShoppingCartConsumer>
    {context => <Checkout {...props} context={context} />}
  </ShoppingCartConsumer>
);
