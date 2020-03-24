import React, { Component } from "react";
import { Tab, Container, Nav, Row, Col } from "react-bootstrap";

import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
import member4 from "../assets/member4.jpg";
import member5 from "../assets/member5.jpg";
import logo from "../assets/team.jpg";

export default class About extends Component {
  render() {
    return (
      <Container className="red">
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">1 member</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">2 member</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">3 member</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">4 member</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">5 member</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img
                    src={logo}
                    height="500"
                    width="1000"
                    className="d-inline-block alighn-top"
                    alt="Logo"
                  />{" "}
                  <img src={member1} alt="" />
                  <p>this is 1 member</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    src={logo}
                    height="500"
                    width="1000"
                    className="d-inline-block alighn-top"
                    alt="Logo"
                  />{" "}
                  <img src={member2} alt="" />
                  <p>this is 2 member</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    src={logo}
                    height="500"
                    width="1000"
                    className="d-inline-block alighn-top"
                    alt="Logo"
                  />{" "}
                  <img src={member3} alt="" />
                  <p>this is 3 member</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    src={logo}
                    height="500"
                    width="1000"
                    className="d-inline-block alighn-top"
                    alt="Logo"
                  />{" "}
                  <img src={member4} alt="" />
                  <p>this is 4 member</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img
                    src={logo}
                    height="500"
                    width="1000"
                    className="d-inline-block alighn-top"
                    alt="Logo"
                  />{" "}
                  <img src={member5} alt="" />
                  <p>this is 5 member</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
