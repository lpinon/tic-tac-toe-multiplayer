import React from 'react';
import { Link } from 'react-router';
class ConnectionPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: '',
    };
    this.onUsernameChange = this.onUsernameChange.bind(this);
  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <div className="jumbotron text-center m-auto">
        <h2>Please choose a username</h2>
        <input
          type="text"
          onChange={this.onUsernameChange}
          value={this.state.username}
        />
        <input type="submit" value="Save" />
      </div>
    );
  }
}
export default ConnectionPage;
