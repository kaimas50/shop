import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, IconButton } from '@material-ui/core';
import styled from 'styled-components';

class StepNumberInput extends Component {
  handleMinus = () => this.setValue(this.props.value - 1);
  handlePlus = () => this.setValue(this.props.value + 1);
  handleChange = (e) => {
    this.setValue(parseInt(e.target.value || 0, 10));
  };

  setValue = (value) => {
    const { onChange, min } = this.props;
    const tooSmall = min !== null && value < min;
    const isInteger = Number.isInteger(value);
    if (isInteger && !tooSmall) onChange(value);
  }

  render() {
    const { value } = this.props;
    const displayValue = value || '';

    return (
      <Wrapper>
        <NumButton onClick={this.handlePlus}>+</NumButton>
        <NumInput value={displayValue} onChange={this.handleChange} />
        <NumButton onClick={this.handleMinus}>-</NumButton>
      </Wrapper>
    );
  }
}
StepNumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
};
StepNumberInput.defaultProps = {
  min: null,
};

const NumInput = styled(Input)`
  width: 50px;
  input {
    text-align: center;
  }
`;
const NumButton = styled(IconButton)`
  && {
    height: 34px
    width: 34px
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  width: 130px;
  padding: 4px;
`;


export default StepNumberInput;
