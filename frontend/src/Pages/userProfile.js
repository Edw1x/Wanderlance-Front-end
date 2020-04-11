import React, { Component } from "react";
import { Tabs, Tab} from "react-bootstrap";
import "./userprofile.css";
import UserCard from "../Components/UserCard";
import ImageUploader from "../Components/ImageUploader"

const token = localStorage.getItem('Token');
const user = localStorage.getItem("User");
let isLogined = token ? true : false;
const url = "http://localhost:8000/media"

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
      image: null
    };
  }

componentWillMount(){
  if(!isLogined){
    this.props.history.push('/');
  }
}
componentDidMount(){
  if(!user)
  fetch('http://localhost:8000/auth/me/', {
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
    console.log(this.state);
  })
  else{
    this.setState(JSON.parse(user));
  }
}


  render() {
    return (
      <div class="cnt">
        <header>
          <div className="report right">
            <button type="submit">report</button>
            
            </div>
            <ImageUploader/>
        </header>
        <main>
          <div class="">
            <div class="left">
              <div class="photo-left">
                <img
                  class="photo"
                  src={this.state.image?url + this.state.image:""}
                />
              </div>
              <div>
    <h4 class="name txt"> {this.state.first_name} {this.state.last_name}</h4>
              </div>
              <p class="desc txt">
                I am the best 
              </p>
              <div class="social">
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                <i class="fa fa-pinterest-square" aria-hidden="true"></i>
                <i class="fa fa-tumblr-square" aria-hidden="true"></i>
              </div>
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="red Tabs">
                <Tab eventKey="home" title="Products" className="">
                <div class="row col">
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
              </div>
                </Tab >
                <Tab eventKey="profile" title="Information" className="">
                <p>cook</p>
                </Tab>
                <Tab eventKey="contact" title="Reviews" className="">
                <p>wook</p>
                </Tab>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
