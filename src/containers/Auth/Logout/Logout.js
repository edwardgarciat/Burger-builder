import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

class logout extends Component {
  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

const mapStateToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapStateToProps)(logout);
