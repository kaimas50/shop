import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Inventory from '../shopComponents/Inventory';
import { getAllItems } from '../api/mockApi';

const title = 'Inventory';

class Browse extends Component {
  state = {
    items: [],
  }

  componentDidMount() {
    this.props.setTitle(title);
    this.setState({ items: getAllItems() });
  }

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <Inventory items={items} />
      </React.Fragment>
    );
  }
}

Browse.propTypes = {
  setTitle: PropTypes.func.isRequired,
};

export default Browse;
