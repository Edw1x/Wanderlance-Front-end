import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
} from "react-bootstrap";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import userProfile from "../Pages/userProfile";
import Test from "../Pages/Test";
import GraphicsAndDesign from "../Pages/GraphicsAndDesign";
import DigitalMarketing from "../Pages/DigitalMarketing";
import Business from "../Pages/Business";
import MusicAndAudio from "../Pages/MusicAndAudio";
import ProgrammingAndTech from "../Pages/ProgrammingAndTech";
import VideoAndAnimation from "../Pages/VideoAndAnimation";
import WritingAndTranslation from "../Pages/WritingAndTranslation";
import background from "../Pages/background";
import sellers from "../Pages/Sellers";
import sellerspage from "../Pages/SellersPage";
import resetpassword from "../Pages/Resetpassword";
import resetpasswordConfirm from "../Pages/ResetpasswordConfirm";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          className="navbar-custom sticky-top"
          collapseOnSelect
          expand="md"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/">WanderLance</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/about"> About </Nav.Link>
                <Nav.Link href="/categories"> Categories </Nav.Link>
                <Nav.Link href="https://edw1x.github.io/Lab1/?#/contacts"> Contacts </Nav.Link>
                <Nav.Link href="/login"> Login </Nav.Link>
              </Nav>
              <Form className="cA" inline>
                <div className="cA">
                  <button type="submit">Click here to enter your account</button>
                </div>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={background} />
            <Route exact path="/about" component={Home} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/categories" component={sellers} />
            <Route exact path="/userProfile" component={userProfile} />
            <Route exact path="/categories/GraphicsandDesign" component={GraphicsAndDesign} />
            <Route exact path="/categories/DigitalMarketing" component={DigitalMarketing} />
            <Route exact path="/categories/Business" component={Business} />
            <Route exact path="/categories/MusicAndAudio" component={MusicAndAudio} />
            <Route exact path="/categories/ProgrammingAndTech" component={ProgrammingAndTech} />
            <Route exact path="/categories/VideoAndAnimation" component={VideoAndAnimation} />
            <Route exact path="/categories/WritingAndTranslation" component={WritingAndTranslation} />
            <Route exact path="/sellerspage" component={sellerspage} />
            <Route exact path="/resetpassword" component={resetpassword} />
            <Route exact path="/resetpasswordConfirm" component={resetpasswordConfirm} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
