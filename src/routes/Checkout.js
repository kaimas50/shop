import React from 'react';
import PropTypes from 'prop-types';

const title = 'Checkout';

class Checkout extends React.Component {
  componentDidMount() {
    this.props.setTitle(title);
  }

  render() {
    return (
      <div>
        Checkout
      </div>
    );
  }
}
Checkout.propTypes = {
  setTitle: PropTypes.func.isRequired,
};

export default Checkout;
