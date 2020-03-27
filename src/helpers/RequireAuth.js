import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../redux/user/user.selectors";

const RequireAuth = ({ children, currentUser, ...otherProps }) => {
  return (
    <Route
      {...otherProps}
      render={() => (currentUser ? <Redirect to="/" /> : children)}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(RequireAuth);
