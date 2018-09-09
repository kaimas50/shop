import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CheckoutItem from './CheckoutItem';
import { SYMBOL_EURO } from '../constants';
import { BigText } from '../components/HelperComponents';

const CheckoutItemDetails = (props) => {
  const { item, amount } = props;
  const total = (amount * item.price).toFixed(2);
  return (
    <Wrapper>
      <CheckoutItem
        key={item.id}
        id={item.id}
        value={amount}
        name={item.name}
        imgSrc={item.imgSrc}
        price={item.price}
      />
      <BigText>x {amount} = {total}{SYMBOL_EURO}</BigText>
    </Wrapper>
  );
};
CheckoutItemDetails.propTypes = {
  item: PropTypes.object.isRequired,
  amount: PropTypes.number.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: -100px;
`;

export default CheckoutItemDetails;
