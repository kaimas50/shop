import React from 'react';
import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import PropTypes from 'prop-types';
import CheckoutItem from './CheckoutItem';
import { SYMBOL_EURO } from '../constants';
import { BigText } from '../components/HelperComponents';

const CheckoutItemDetails = (props) => {
  const { item, amount } = props;
  const total = (amount * item.price).toFixed(2);
  return (
    <Wrapper>
      <StyledBadge badgeContent={amount} color="secondary">
        <CheckoutItem
          key={item.id}
          id={item.id}
          value={amount}
          name={item.name}
          imgSrc={item.imgSrc}
          price={item.price}
        />
      </StyledBadge>
      <BigText> = {total}{SYMBOL_EURO}</BigText>
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
  margin-left: -50px;
  margin-top: 10px;
`;
const StyledBadge = styled(Badge)`
  span {
    margin-top: 8px;
  }
`;

export default CheckoutItemDetails;
