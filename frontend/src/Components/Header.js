import React, { Component } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
import settings from "../Pages/Settings";
import confirmedEmail from "../Pages/ConfirmedEmail";
import "./header.css";

const token = localStorage.getItem('Token');
let isLogined = token ? true : false;
const url = "http://localhost:8000/media/images/"

function LogedinUser(props){
  return(
    <div class="btn-group rounded-circle size red ">
                <a
                  type="link"
                  class="btn dropdown-toggle "
                  data-toggle="dropdown"
                >
                  <figure class="fir-image-figure">
                    <a
                      class="fir-imageover"
                      rel="noopener"
                      target="_blank"
                      href="/userProfile"
                    >
                      <img
                        class="fir-author-image fir-clickcircle fir-circle"
                        src={props.img}
                      />
                      <div class="fir-imageover-color"></div>
                      <img
                        class="fir-imageover-image fir-clickcircle fir-circle"
                        src={props.img}
                      />
                    </a>
                  </figure>
                </a>
                <div class="dropdown-menu">
                  <div>
                    <figure class="fir-image-figure ">
                      <a
                        class="fir-imageover"
                        rel="noopener"
                        target="_blank"
                        href="/userProfile"
                      >
                        <img
                          class="fir-author-image fir-clickcircle fir-margin"
                          src={props.img}
                        />
                        <div class="fir-imageover-color"></div>
                        <img
                          class="fir-imageover-image fir-clickcircle fir-margin"
                          src={props.img}
                        />
                      </a>

                      <figcaption>
                        <div class="fig-author-figure-title txt ">
                          {props.first_name} {props.last_name}
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item colorLink">
                    <i
                      class="fa fa-shopping-cart iconRed"
                      aria-hidden="true"
                    ></i>
                    My orders
                  </a>
                  <a href="#" class="dropdown-item colorLink">
                    <i class="fa fa-money iconRed" aria-hidden="true"></i>
                    My products
                  </a>
                  <a href="#" class="dropdown-item colorLink">
                    <i class="fa fa-comment iconRed" aria-hidden="true"></i>
                    Messages
                  </a>
                  <a href="/userProfile/settings" class="dropdown-item colorLink">
                    <i class="fa fa-cog iconRed" aria-hidden="true"></i>
                    Settings
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item colorLink">
                    Balance: <span className="txt moneyColor">1000$</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" onClick={props.logOutClick} class="dropdown-item colorLink">
                    <i class="fa fa-sign-out iconRed" aria-hidden="true"></i>
                    Log out
                  </a>
                </div>
              </div>
  )
}
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      username: "",
      first_name: "",
      last_name: "",
      last_login: null,
      date_joined: null,
      fetched: false,
      image: null
    };
  }

  logOut = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      }
    }).then(res => {
      localStorage.removeItem("Token");
      localStorage.removeItem("User");
      window.location.reload(false);
      return res.json();

    });

  }

  componentDidMount() {

    if (isLogined) {
      fetch('http://localhost:8000/users/me/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        }
      }).then(res => res.json()).then(data => {
        console.log(data);
        this.setState(data.user);
        this.setState({ fetched: true });
        this.setState({image: data.image.image});
        localStorage.setItem("User", JSON.stringify(this.state));
        console.log(this.state);
      })
    }
  }
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
                <Nav.Link href="/sellers"> Sellers </Nav.Link>
                <Nav.Link href="https://edw1x.github.io/Lab1/?#/contacts">
                  {" "}
                  Contacts{" "}
                </Nav.Link>
                <Nav.Link href="/login"> Login </Nav.Link>
              </Nav>
              {isLogined && this.state.fetched ? <LogedinUser 
              first_name={this.state.username} 
              last_name={this.state.last_name} 
              logOutClick={this.logOut}
              img = {url + this.state.image}/>:isLogined?<p></p>:                <div className="cA">
                  <button type="submit" onClick={event =>  window.location.href='/login'}>Click here to enter your account</button>
                </div>}
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
            <Route exact path="/sellers" component={sellers} />
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
            <Route exact path="/userProfile/settings" component={settings} />
            <Route exact path="/register/:id/:token" component={confirmedEmail} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
