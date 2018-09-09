import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = props => {
  const { children } = props;
  return (
    <header className="App-header">
      <Title className="App-title">{props.title}</Title>
      {children}
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
Header.defaultProps = {
  children: null,
};

const Title = styled.h1`
  margin-bottom: 0px;
`;

export default Header;
