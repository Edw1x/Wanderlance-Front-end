import React, { Component } from "react";
import { Tabs, Tab} from "react-bootstrap";
import "./userprofile.css";
import UserCard from "../Components/UserCard";
export default class ResetpasswordConfirm extends Component {
  render() {
    return (
      <div class="cnt">
        <header>
          <div className="report right">
            <button type="submit">report</button>
            </div>
        </header>
        <main>
          <div class="">
            <div class="left">
              <div class="photo-left">
                <img
                  class="photo"
                  src="https://picsum.photos/200/150/?random"
                />
              </div>
              <div>
                <h4 class="name txt">Igor Chaikovskiy</h4>
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
