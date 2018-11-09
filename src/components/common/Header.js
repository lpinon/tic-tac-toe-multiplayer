import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
const Header = () => {
  return (
    <nav>
      <h1 className="text-center">
        <span className="glyphicon glyphicon-th logo" /> Online Tic-Tac-Toe{' '}
        <span className="glyphicon glyphicon-th logo" />
      </h1>
    </nav>
  );
};
export default Header;
