import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import SaleItem from './SaleItem';

class Inventory extends Component {
  Items = () => this.props.items.map(x => <SaleItem key={x.id} {...x} />);

  render() {
    return (
      <ContainerGrid
        container
        spacing={8}
        justify="flex-start"
        alignItems="flex-start"
        wrap="wrap"
      >
        <this.Items />
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
