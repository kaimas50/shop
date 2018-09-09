import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

class LinkButton extends Component {
  render() {
    const { label, to, buttonProps } = this.props;
    return (
      <Button
        color="secondary"
        component={Link}
        to={to}
        {...buttonProps}
      >
        {label}
      </Button>
    );
  }
}
LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  buttonProps: PropTypes.object,
};
LinkButton.defaultProps = {
  buttonProps: {},
};

export default LinkButton;
