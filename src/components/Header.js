import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <header className="App-header">
      <h1 className="App-title">{props.title}</h1>
      {props.children}
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

export default Header;
