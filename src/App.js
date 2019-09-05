import React from 'react';

import { connect } from 'react-redux';

import { activateTarget, closeTarget } from './redux';

// App.js
export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.target.title || 'Hello World!'}</h1>

        {this.props.target.title ? (
          <button onClick={this.props.closeTarget}>Exit Target</button>
        ) : (
          <button
            onClick={() =>
              this.props.activateTarget({ title: 'I am Your target dude!' })
            }
          >
            Click Me!
          </button>
        )}
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  target: state.target,
});

const mapDispatchToProps = {
  activateTarget,
  closeTarget,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
