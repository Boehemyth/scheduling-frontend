import React, { Component } from "react";

export default class Authform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      cartName: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props.onAuth(authType, this.state)
      .then(() => {
        this.props.history.push("/")
      })
      .catch(() => {
        return;
      })
  };

  render() {
    const { email, password, name, cartName } = this.state;
    const { heading, buttonText, signUp, errors, history, removeError } = this.props;

    history.listen(() => {
      removeError();
    })

    return (
      <div id="authorization-form">
        <h2>{heading}</h2>
        {errors.message && (
          <div className="alert box">{errors.message}</div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          {signUp && (
            <div id="authorization-form--signup">
              <div>
                <label htmlFor="name">Your Name:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="cartName">Name of Cart:</label>
                <input 
                  type="text" 
                  id="cartName" 
                  name="cartName"
                  value={cartName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          )}
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    );
  }
}