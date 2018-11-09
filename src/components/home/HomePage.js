import React from 'react';
import { Link } from 'react-router';
class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron text-center m-auto">
        <h1>Welcome to Tic-Tac-Toe</h1>
        <p>Connect to our network and start playing</p>
        <Link to="connect" className="btn btn-primary btn-lg">
          Start <span className="glyphicon glyphicon-play-circle" />
        </Link>
      </div>
    );
  }
}
export default HomePage;
