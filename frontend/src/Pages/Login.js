/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "./text.scss";

export default class Login extends Component {
  render() {
    return (
      <div className="container px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="wrapper row box">
          <img
            className="loginimg"
            src="https://images.pexels.com/photos/3530056/pexels-photo-3530056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <div className="form-wrapper">
            <h1-1>Log in with email</h1-1>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="grey">
              <a href="https://images.pexels.com/photos/944773/pexels-photo-944773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
                Forgot password?
              </a>
            </div>
            <Form.Group controlId="formBasickCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <div className="createAccount">
              <button type="submit">Log in</button>
              <div className="grey">
                <a href="https://edw1x.github.io/Lab1/?#/register">
                  Don't have an account? Click here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
