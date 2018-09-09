import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { PageBody, Layout } from '../components/HelperComponents';
import Header from '../components/Header';
import { TITLE_HOME, ROUTE_BROWSE } from '../constants';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Header title={TITLE_HOME} />
        <StyledPageBody>
          <BrowseButton
            variant="contained"
            component={Link}
            to={ROUTE_BROWSE}
          >
            Browse inventory
          </BrowseButton>
        </StyledPageBody>
      </Layout>
    );
  }
}

const BrowseButton = styled(Button)`
  && {
    margin-bottom: 50px;
  }
`;

const StyledPageBody = styled(PageBody)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
StyledPageBody.displayName = 'StyledPageBody';

export default Home;
