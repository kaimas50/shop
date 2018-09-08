import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { CenteringDiv } from '../components/HelperComponents';

const title = 'Welcome to the Shop';

class Home extends Component {
  componentDidMount() {
    this.props.setTitle(title);
  }

  render() {
    return (
      <CenteringDiv>
        <BrowseButton
          variant="contained"
          component={Link}
          to="/browse"
        >
          Browse inventory
        </BrowseButton>
      </CenteringDiv>
    );
  }
}
Home.propTypes = {
  setTitle: PropTypes.func.isRequired,
};

const BrowseButton = styled(Button)`
  && {
    margin-bottom: 50px;
  }
`;

export default Home;
