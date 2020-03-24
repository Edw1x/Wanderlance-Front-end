import React, { Component } from "react";
import { Container, Form} from "react-bootstrap";

export default class Resetpassword extends Component {
  render() {
    return (
      <div>
        <section id="music" className="section back">
          <section id="video" className="section bg-grey mg-top">
            <h1-1>Reset your password</h1-1>
          </section>
          <Container style={{ width: "500px" }}>
          <Form>
            <Form.Group controlId="formBasickEmail">
              <Form.Label> Email address </Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <p className="txt">
                 Enter the email so we can send you an email
                </p>
          </Form>
          </Container>
        </section>
      </div>
    );
  }
}
