import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const Inventory = (props) => {
  const { items } = props;
  return (
    <ContainerGrid
      container
      spacing={8}
      justify="flex-start"
      alignItems="flex-start"
      wrap="wrap"
    >
      {items}
    </ContainerGrid>
  );
};
Inventory.propTypes = {
  items: PropTypes.array.isRequired,
};

const ContainerGrid = styled(Grid)`
  padding: 8px;
`;

export default Inventory;
