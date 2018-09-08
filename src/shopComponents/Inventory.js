import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import SaleItem from './SaleItem';
import { ShoppingCartConsumer } from '../state/ShoppingCartContext';

class Inventory extends React.Component {
  Items = (shoppingCartProps) => this.props.items.map(item => {
    return (
      <SaleItem
        value={shoppingCartProps.getAmount(item.id)}
        onChange={shoppingCartProps.getChangeHandler(item.id)}
        key={item.id}
        {...item}
      />
    );
  });

  render() {
    return (
      <ContainerGrid
        container
        spacing={8}
        justify="flex-start"
        alignItems="flex-start"
        wrap="wrap"
      >
        <ShoppingCartConsumer>
          {
            context => this.Items(context)
          }
        </ShoppingCartConsumer>
      </ContainerGrid>
    );
  }
}
Inventory.propTypes = {
  items: PropTypes.array.isRequired,
};

const ContainerGrid = styled(Grid)`
  padding: 8px;
`;

export default Inventory;
