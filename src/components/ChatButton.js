import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import styled from 'styled-components';

class ChatButton extends Component {
  render() {
    return (
      <FloatButton variant="fab">
        <QuestionAnswer />
      </FloatButton>
    );
  }
}

// ChatButton.propTypes = {

// };

const FloatButton = styled(Button)`
  && {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
`;
export default ChatButton;
