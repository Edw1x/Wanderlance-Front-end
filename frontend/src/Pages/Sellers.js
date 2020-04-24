import React, { Component } from "react";
import "./home.css";
import "./sellerbar.css";
import CarouselBox from "../Components/CarouselBox";
import Ourseller from "../Components/OurSeller";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";

export default class Sellers extends Component {
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
          <h1 class="hero-title"></h1>
        </section>
        <section id="music" className="section back">
          <div style={{color: 'white'}} className="text-center">
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-google-plus-square"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fas fa-share-alt-square"></i>
          </div>
          <div class="">
            <section id="video" className="section bg-grey mg-top">
              <h1-1>Best sellers in Graphics & Design</h1-1>
            </section>
            <CarouselBox />
            <section id="video" className="section bg-grey mg-top">
              <h1-1>Best sellers in Digital Marketing</h1-1>
            </section>
            <CarouselBox />
            <section id="video" className="section bg-grey mg-top">
              <h1-1>Best sellers in Writing & Translation</h1-1>
            </section>
            <CarouselBox />
            <section id="video" className="section bg-grey mg-top">
              <h1-1>Best sellers in Video & Animation</h1-1>
            </section>
            <CarouselBox />
            <section id="video" className="section bg-grey mg-top">
              <h1-1>Best sellers in Music & Audio</h1-1>
            </section>
            <CarouselBox />
            <section id="video" className="section bg-grey mg-top">
              <h1-1>Best sellers in Programming & Tech</h1-1>
            </section>
            <CarouselBox />
            <section id="video" className="section bg-grey mg-top">
              <h1-1>Best sellers in Business</h1-1>
            </section>
            <CarouselBox />
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}
