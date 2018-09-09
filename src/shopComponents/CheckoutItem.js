import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import { SYMBOL_EURO } from '../constants';

const CheckoutItem = (props) => (
  <ItemPaper id={props.id}>
    <div>{props.name}</div>
    <Image src={props.imgSrc} alt="" />
    <div>{`${props.price}${SYMBOL_EURO}`}</div>
  </ItemPaper>
);
CheckoutItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

const ItemPaper = styled(Paper)`
  display: inline-block;
  width: 100px;
  margin: 4px;
  padding: 4px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100px;
`;

export default CheckoutItem;
