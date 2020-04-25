import React, { Component } from "react";
import Ourseller from "./OurSeller";

import "./userCard.css";

export default class UserCard extends Component {
  render() {
    return (
      <div class="userCardContainer">
      <div class="rightGradientAfterFlip">
        <div class="flip">
          <div class="front">
            <img
              class="userCardImage"
              src="https://images.pexels.com/photos/3694706/pexels-photo-3694706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ></img>
          </div>
          <div class="back text-center">
            <div className="margin-top">
              <h2>Bodya Gornostai</h2>
              <p>
                Please be careful when u smth Please be careful when u smth Please be careful when u smth Please be careful when u smth
                Please be careful when u smth Please be careful when u smth Please be careful when u smth Please be careful when u smth
              </p>
              <div className="cA">
                <button type="submit" onClick={event =>  window.location.href='/sellerspage#'}>Buy this product</button>
                <div className="grey">
                  <a href="#">Want to look for same , click here.</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-card-cont">
          <div class="mr-grid">
            <div class="col1">
              <h1>Photographer</h1>
              <Ourseller />
              <hr className="white" />
            </div>
          </div>
          <div class="mr-grid rating-margin">
            <div class="col2">
              <h5>Rating</h5>
            </div>
            <div class="col2">
              <ul class="userRating">
                <li>
                  <i class="material-icons">&#128970;</i>
                  <i class="material-icons">&#128970;</i>
                  <i class="material-icons">&#128970;</i>
                  <i class="material-icons">&#128970;</i>
                  <i class="material-icons">&#10032;</i>
                </li>
                <li>4</li>
              </ul>
            </div>
          </div>
          <div class="mr-grid">
            <div class="col1">
              <p class="userCardDescription">
                DOING STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                STUFFDOING STUFF.{" "}
              </p>
            </div>
          </div>
          <div class="mr-grid">
            <div class="col1">
              <p class="userCardReviews">15 reviews on this product</p>
            </div>
          </div>
          <div class="mr-grid">
            <div class="">
              <div class="priceBorder">
                <h3>
                  <i class="material-icons">&#xE037;</i> PRICE:
                </h3>
              </div>
            </div>
            <div class="priceSection">
              <h6>
              25
                <i class="material-icons"> &#x24;</i>
              </h6>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
