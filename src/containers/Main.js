import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Authform from "../components/Authform";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth"; 

import Admin from "./Admin";
import SingleEvent from "./SingleEvent";

const Main = props => {
  const { authUser, errors, removeError } = props;
  return (
    <div className="container">
      <Switch>
        <Route path="/signin" render={props => {
          return (
            <Authform 
              onAuth={authUser}
              errors={errors}
              removeError={removeError}
              buttonText="Log in"
              heading="Welcome back!"
              {...props}
            />
          )
        }} />
        <Route path="/signup" render={props => {
          return (
            <Authform 
              signUp
              onAuth={authUser}
              errors={errors}
              removeError={removeError}
              buttonText="Sign up!"
              heading="Cart Owners: Join Today!"
              {...props}
            />
          )
        }} />
        <Route path="/api/admin/events/:event" component={SingleEvent} />
        <Route exact path="/" component={withAuth(Admin)} />
      </Switch>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  }
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));