import React, { Component } from "react";
import UserCard from "./UserCard";


export default class CarouselBox extends Component {
  render() {
    return (
      <section className="container row col">
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
      </section>
    );
  }
}
