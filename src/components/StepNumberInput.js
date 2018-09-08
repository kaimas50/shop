import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, IconButton } from '@material-ui/core';
import styled from 'styled-components';

class StepNumberInput extends Component {
  handleMinus = () => this.props.onChange(this.props.value - 1);
  handlePlus = () => this.props.onChange(this.props.value + 1);

  render() {
    const { value, onChange } = this.props;

    return (
      <Wrapper>
        <NumButton onClick={this.handleMinus}>-</NumButton>
        <NumInput value={value} onChange={onChange} />
        <NumButton onClick={this.handlePlus}>+</NumButton>
      </Wrapper>
    );
  }
}
StepNumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const NumInput = styled(Input)`
  width: 50px;
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
