import React, { Component } from "react";
import "../home.css";
import "../text.css";
import "../sellerbar.css";
import CarouselBox from "../../Components/CarouselBox";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";

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
        <Footer/>
      </div>
    );
  }
}
