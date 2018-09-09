import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { CenteringDiv, PageBody } from '../components/HelperComponents';
import Header from '../components/Header';
import { TITLE_HOME, ROUTE_BROWSE } from '../constants';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header title={TITLE_HOME} />
        <PageBody>
          <CenteringDiv>
            <BrowseButton
              variant="contained"
              component={Link}
              to={ROUTE_BROWSE}
            >
              Browse inventory
            </BrowseButton>
          </CenteringDiv>
        </PageBody>
      </React.Fragment>
    );
  }
}

const BrowseButton = styled(Button)`
  && {
    margin-bottom: 50px;
  }
`;

export default Home;
