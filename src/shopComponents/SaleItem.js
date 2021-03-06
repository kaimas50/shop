import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import StepNumberInput from '../components/StepNumberInput';
import { MAX_ITEM_AMOUNT, SYMBOL_EURO } from '../constants';

const SaleItem = (props) => (
  <ItemDiv id={props.id}>
    <ExpandingPaper>
      <div>{props.name}</div>
      <img src={props.imgSrc} alt="" />
      <div>{`${props.price}${SYMBOL_EURO}`}</div>
      <StepNumberInput
        min={0}
        max={MAX_ITEM_AMOUNT}
        value={props.value}
        onChange={props.onChange}
      />
      <div>{props.desc}</div>
    </ExpandingPaper>
  </ItemDiv>
);
SaleItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

const ItemDiv = styled.div`
  && {
    height: 315px;
    padding: 4px;

    @media only screen and (max-width: 600px) {
      width: 100%;
    }
    @media only screen and (min-width: 600px) {
      width: 33.33333%;
    }
    @media only screen and (min-width: 648px) {
      width: 25%;
    }
    @media only screen and (min-width: 820px) {
      width: 20%;
    }
    @media only screen and (min-width: 972px) {
      width: 16.66667%;
    }
    @media only screen and (min-width: 1024px) {
      max-width: 200px;
    }
  }
`;

const ExpandingPaper = styled(Paper)`
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: hidden;
`;

export default SaleItem;
