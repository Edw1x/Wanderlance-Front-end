import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./userprofile.css";
import UserCard from "../Components/UserCard";
import ImageUploader from "../Components/ImageUploader";
import Review from "../Components/Review.js";

const token = localStorage.getItem("Token");
const user = localStorage.getItem("User");
let isLogined = token ? true : false;
const url = "http://localhost:8000/media/images/";

export default class userProfile extends Component {
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
      image: null,
    };
  }

  componentWillMount() {
    if (!isLogined) {
      this.props.history.push("/");
    }
  }
  componentDidMount() {
    if (!user)
      fetch("http://localhost:8000/users/me/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState(data.user);
          this.setState({ fetched: true });
          this.setState({ image: data.image.image });
          console.log(this.state);
        });
    else {
      this.setState(JSON.parse(user));
    }
  }

  render() {
    return (
      <div class="cnt cardSettings">
        <header>
          <div className="report right">
          <button type="submit" onClick={event =>  window.location.href='/reportForm'} >Report</button>
          </div>
        </header>
        <main>
          <div class="">
            <div class="left">
              <div class="photo-left">
                <img
                  class="photo"
                  src={this.state.image ? url + this.state.image : ""}
                />
              </div>
              <div>
                <h4 class="name white-text">
                  {" "}
                  {this.state.first_name} {this.state.last_name}
                </h4>
              </div>
              <p class="desc white-text">I am the best</p>
              <div class="icon-container iconLink">
                <a
                  href="https://www.youtube.com/watch?v=ZVVWuPMWc5U"
                  class="fa fa-facebook fa-2x icon-3d iconLink"
                ></a>
                <a
                  href="https://www.youtube.com/watch?v=ZVVWuPMWc5U"
                  class="fa fa-twitter fa-2x icon-3d iconLink"
                ></a>
                <a
                  href="https://www.youtube.com/watch?v=ZVVWuPMWc5U"
                  class="fa fa-google fa-2x icon-3d iconLink"
                ></a>
                <a
                  href="https://www.youtube.com/watch?v=ZVVWuPMWc5U"
                  class="fa fa-github fa-2x icon-3d iconLink"
                ></a>
                <a
                  href="https://www.youtube.com/watch?v=ZVVWuPMWc5U"
                  class="fa fa-telegram fa-2x icon-3d iconLink"
                ></a>
              </div>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="red Tabs"
              >
                <Tab eventKey="home" title="Products" className="">
                  <div class="row col">
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Information" className="">
                  <p>cook</p>
                </Tab>
                <Tab eventKey="contact" title="Reviews" className="">
                  <div className="reviews">
                    <Review />
                    <Review />
                    <Review />
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
