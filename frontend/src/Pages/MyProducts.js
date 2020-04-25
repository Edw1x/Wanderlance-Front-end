import React, { Component } from "react";

import "./home.css";

import UserCard from "../Components/UserCard";

export default class MyProducts extends Component {
  render() {
    return (
      <div class="cnt cardSettings cA text-center">
        <div className="cardSettings">
          <h2 class="card-title mb-0 text-center">My products</h2>
        </div>
        <main>
        <h4 class="card-title mb-0 text-center">You have 6 products on this account</h4>
        <button type="submit" onClick={(event) => (window.location.href = "/userProfile/myProducts/createProduct")}>Create product</button>
          <div class="row col">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </main>
      </div>
    );
  }
}
