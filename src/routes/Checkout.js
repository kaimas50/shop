import React from 'react';
import Header from '../components/Header';
import { TITLE_CHECKOUT } from '../constants';

class Checkout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header title={TITLE_CHECKOUT} />
        Checkout
      </React.Fragment>
    );
  }
}

export default Checkout;
