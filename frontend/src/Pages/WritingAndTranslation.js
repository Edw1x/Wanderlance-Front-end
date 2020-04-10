import React, { Component } from "react";
import "./background.css";
import "./text.css";
import "./sellerbar.css";
import CarouselBox from "../Components/CarouselBox";
import Ourseller from "../Components/OurSeller";
import Categories from "../Components/Categories";

export default class WritingAndTranslation extends Component {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
          crossOrigin="anonymous"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="css/style.css" />
        <div class="menu">
          <div class="title">MENU</div>
          <Categories />
        </div>
        <section class="hero">
          <div class="hero-one"></div>
          <div class="hero-two"></div>
          <h1 class="header-title"></h1>
        </section>
        <section id="music" className="section back">
        <div style={{ color: "white" }} className="text-center">
            <div class="btn-group cA">
              <button
                type="button"
                class="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by
              </button>
              <div class="dropdown-menu">
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item colorLink">
                  Price
                </a>
                <a href="#" class="dropdown-item colorLink">
                  Rating
                </a>
                <a href="#" class="dropdown-item colorLink">
                  Date
                </a>
                <div class="dropdown-divider"></div>
              </div>
            </div>
          </div>
          <div class="">
            <section id="video" className="section bg-grey mg-top">
              <h1-1>Writing & Translation</h1-1>
            </section>
            <CarouselBox />
            <CarouselBox />
            <CarouselBox />
            <CarouselBox />
          </div>
        </section>
        <footer className="backGrey">
          <div className="container grey">
            <div className="footer-cols">
              <ul>
                <li>Shop &amp; Learn</li>
                <li>
                  <a href="#">Music</a>
                </li>
                <li>
                  <a href="#">Movies</a>
                </li>
                <li>
                  <a href="#">Shows</a>
                </li>
                <li>
                  <a href="#">Apps</a>
                </li>
                <li>
                  <a href="#">Gift Cards</a>
                </li>
              </ul>
              <ul>
                <li>Orange Store</li>
                <li>
                  <a href="#">Find a Store</a>
                </li>
                <li>
                  <a href="#">Today at Orange</a>
                </li>
                <li>
                  <a href="#">Orange Camp</a>
                </li>
                <li>
                  <a href="#">Financing</a>
                </li>
                <li>
                  <a href="#">Order Status</a>
                </li>
              </ul>
              <ul>
                <li>Education &amp; Business</li>
                <li>
                  <a href="#">Orange &amp; Education</a>
                </li>
                <li>
                  <a href="#">Shop For College</a>
                </li>
                <li>
                  <a href="#">Orange &amp; Business</a>
                </li>
                <li>
                  <a href="#">Shop For Business</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
              </ul>
              <ul>
                <li>About Orange</li>
                <li>
                  <a href="#">Newsroom</a>
                </li>
                <li>
                  <a href="#">Orange Leadership</a>
                </li>
                <li>
                  <a href="#">Investors</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Contact Orange</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom text-center txt grey">
            Copyright © 2020 WanderLance Team
          </div>
        </footer>
      </div>
    );
  }
}
