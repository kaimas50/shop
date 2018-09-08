import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import SaleItem from './SaleItem';

class Inventory extends React.Component {
  componentDidMount() {
    this.setItems(this.props.items);
  }

  componentDidUpdate(prevProps) {
    const { items } = this.props;
    if (items !== prevProps.items) {
      this.setItems(items);
    }
  }

  setItems = (items) => {
    const { shoppingCartContext } = this.props;
    shoppingCartContext.setItems(items);
  }

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
    const { shoppingCartContext } = this.props;
    return (
      <ContainerGrid
        container
        spacing={8}
        justify="flex-start"
        alignItems="flex-start"
        wrap="wrap"
      >
        <this.Items {...shoppingCartContext} />
      </ContainerGrid>
    );
  }
}
Inventory.propTypes = {
  items: PropTypes.array.isRequired,
  shoppingCartContext: PropTypes.object.isRequired,
};

const ContainerGrid = styled(Grid)`
  padding: 8px;
`;

export default Inventory;
