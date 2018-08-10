import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { bindActionCreators } from 'redux';
import { login } from '../actions/users';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {

  state = {
    user: ['dsdsd', 'sdsdsds']
  }

  componentDidMount () {
    this.props.login();
  }

  render () {
    return (
      <div>
        {this.state.user.map((item, i) => <li key={i}>{item}</li>)}
      </div>
    );
  }
}

App.propTypes = {
  login: PropTypes.func
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login: () => login()
}, dispatch);

export default connect(null, mapDispatchToProps)(App);
