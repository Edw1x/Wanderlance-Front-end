/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./background.css";
import "./text.css";
import CarouselBox from "../Components/CarouselBox";
import Infocards from "../Components/Infocards";
import Ourseller from "../Components/OurSeller";
import Categories from "../Components/Categories";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";

export default class background extends Component {
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
        <title>Welcome to myTunes</title>
        {/* Showcase & Nav */}
        <div id="showcase">
          <div className="section-main container">
            <h1>WanderLance</h1>
            <h2>
              Site for people that want to become a freelancer or make an order.
            </h2>
            <p className="lead hide-on-small red">
              Enjoy the time you spend here
            </p>
          </div>
        </div>
        <section class="hero">
          <div class="hero-one">
            <h1-1>BUY</h1-1>
            <ul className="txt">
              <li>1 million orders sold</li>
              <li>25 million people with us</li>
              <li>5 thound world wide partners</li>
            </ul>
            <img
              className="smallImg"
              src="https://icons.iconarchive.com/icons/inipagi/business-economic/1024/graph-icon.png"
            />
          </div>
          <div class="hero-two">
            <h1-1>SELL</h1-1>
            <ul className="txt">
              <li>1 million orders sold</li>
              <li>25 million people with us</li>
              <li>5 thound world wide partners</li>
            </ul>
            <img
              className="smallImg"
              src="https://icons.iconarchive.com/icons/inipagi/business-economic/1024/graph-icon.png"
            />
          </div>
          <h1 class="header-title">
            <img
              className="smallImg"
              src="https://icons.iconarchive.com/icons/100-seedless-penguins/borderlands/512/Borderlands-Crimson-Lance-icon.png"
            />
          </h1>
        </section>
        {/* Music Section */}
        <section id="music" className="section back">
          <div class="container col">
            <h2 className="section-head text-center">
              <i className="fas fa-music" /> Sellers
            </h2>
            <h4 className="text-center text">
              45 million sellers with us now. Zero ads.
            </h4>
            <div class="container row col">
              <div class="cellphone-container">
                <div class="movie">
                  <div class="flip">
                    <div class="front">
                      <img
                        class="movie-img"
                        src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      ></img>
                    </div>
                    <div class="back text-center">
                      <div className="margin-top">
                        <h2>Yurii Girnuk</h2>
                        <p>
                          Please be careful when u smth Please be careful when u smth Please be careful when u smth Please be careful when u smth
                          here
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
                  <div class="text-movie-cont">
                    <div class="mr-grid">
                      <div class="col1">
                        <h1>Web Designer</h1>
                        <Ourseller />
                        <hr className="red" />
                      </div>
                    </div>
                    <div class="mr-grid summary-row">
                      <div class="col2">
                        <h5>Rating</h5>
                      </div>
                      <div class="col2">
                        <ul class="movie-likes">
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
                        <p class="movie-description">
                          DOING STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                          STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                          STUFFDOING STUFF.{" "}
                        </p>
                      </div>
                    </div>
                    <div class="mr-grid actors-row">
                      <div class="col1">
                        <p class="movie-actors">25 reviews on this product</p>
                      </div>
                    </div>
                    <div class="mr-grid">
                      <div class="">
                        <div class="watch-btn">
                          <h3>
                            <i class="material-icons">&#xE037;</i> PRICE:
                          </h3>
                        </div>
                      </div>
                      <div class="action-btn">
                        <h6>
                        100
                          <i class="material-icons"> &#x24;</i>
                        </h6>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cellphone-container">
                <div class="movie">
                  <div class="flip">
                    <div class="front">
                      <img
                        class="movie-img"
                        src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
                          <button type="submit">Buy this product</button>
                          <div className="grey">
                            <a href="#">Want to look for same , click here.</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-movie-cont">
                    <div class="mr-grid">
                      <div class="col1">
                        <h1>Photographer</h1>
                        <Ourseller />
                        <hr className="red" />
                      </div>
                    </div>
                    <div class="mr-grid summary-row">
                      <div class="col2">
                        <h5>Rating</h5>
                      </div>
                      <div class="col2">
                        <ul class="movie-likes">
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
                        <p class="movie-description">
                          DOING STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                          STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                          STUFFDOING STUFF.{" "}
                        </p>
                      </div>
                    </div>
                    <div class="mr-grid actors-row">
                      <div class="col1">
                        <p class="movie-actors">15 reviews on this product</p>
                      </div>
                    </div>
                    <div class="mr-grid">
                      <div class="">
                        <div class="watch-btn">
                          <h3>
                            <i class="material-icons">&#xE037;</i> PRICE:
                          </h3>
                        </div>
                      </div>
                      <div class="action-btn">
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

              <div class="cellphone-container">
                <div class="movie">
                  <div class="flip">
                    <div class="front">
                      <img
                        class="movie-img"
                        src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      ></img>
                    </div>
                    <div class="back text-center">
                      <div className="margin-top">
                        <h2>Bodya Levutskiy</h2>
                        <p>
                          Please be careful when u smth Please be careful when u smth Please be careful when u smth Please be careful when u smth
                          Please be careful when u smth Please be careful when u smth Please be careful when u smth Please be careful when u smth
                        </p>
                        <div className="cA">
                          <button type="submit">Buy this product</button>
                          <div className="grey">
                            <a href="#">Want to look for same , click here.</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-movie-cont">
                    <div class="mr-grid">
                      <div class="col1">
                        <h1>Programmer</h1>
                        <Ourseller />
                        <hr className="red" />
                      </div>
                    </div>
                    <div class="mr-grid summary-row">
                      <div class="col2">
                        <h5>Rating</h5>
                      </div>
                      <div class="col2">
                        <ul class="movie-likes">
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
                        <p class="movie-description">
                          DOING STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                          STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                          STUFFDOING STUFF.{" "}
                        </p>
                      </div>
                    </div>
                    <div class="mr-grid actors-row">
                      <div class="col1">
                        <p class="movie-actors">42 reviews on this product</p>
                      </div>
                    </div>
                    <div class="mr-grid">
                      <div class="">
                        <div class="watch-btn">
                          <h3>
                            <i class="material-icons">&#xE037;</i> PRICE:
                          </h3>
                        </div>
                      </div>
                      <div class="action-btn">
                        <h6>
                        95
                          <i class="material-icons"> &#x24;</i>
                        </h6>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
        
              <div class="cellphone-container">
                <div class="movie">
                  <div class="flip">
                    <div class="front">
                      <img
                        class="movie-img"
                        src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      ></img>
                    </div>
                    <div class="back text-center">
                      <div className="margin-top">
                        <h2>Igor Chaikovskiy</h2>
                        <p>
                          Please be careful when u smth Please be careful when u smth Please be careful when u smth Please be careful when u smth
                          Please be careful when u smth Please be careful when u smth Please be careful when u smth Please be careful when u smth
                        </p>
                        <div className="cA">
                          <button type="submit">Buy this product</button>
                          <div className="grey">
                            <a href="#">Want to look for same , click here.</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-movie-cont">
                    <div class="mr-grid">
                      <div class="col1">
                        <h1>Florist</h1>
                        <Ourseller />
                        <hr className="red" />
                      </div>
                    </div>
                    <div class="mr-grid summary-row">
                      <div class="col2">
                        <h5>Rating</h5>
                      </div>
                      <div class="col2">
                        <ul class="movie-likes">
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
                        <p class="movie-description">
                          DOING STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                          STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                          STUFFDOING STUFF.{" "}
                        </p>
                      </div>
                    </div>
                    <div class="mr-grid actors-row">
                      <div class="col1">
                        <p class="movie-actors">2 reviews on this product</p>
                      </div>
                    </div>
                    <div class="mr-grid">
                      <div class="">
                        <div class="watch-btn">
                          <h3>
                            <i class="material-icons">&#xE037;</i> PRICE:
                          </h3>
                        </div>
                      </div>
                      <div class="action-btn">
                        <h6>
                          30
                          <i class="material-icons"> &#x24;</i>
                        </h6>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-light text-center margin-bottom grey">
            Support us with your money
          </p>
        </section>
        {/* Video Section */}
        <section id="video" className="section bg-grey">
          <h1-1>Categories</h1-1>
          <Categories />
          <div className="cA">
            <button type="submit">Check all hot deals</button>
            <div className="grey">
              <a href="#">Want to look for all the sellers, click here.</a>
            </div>
          </div>
        </section>
        {/* Entertainment Section */}
        <section id="entertainment" className="section">
          <div className="container">
            <h1 className="text-center text">Make your own choise.</h1>
            <Infocards />
            <p className="txt text-center">take your time and think about</p>
          </div>
        </section>
        {/* Gift Card Section */}
        <section id="gift-cards" className="section bg-grey">
          <div className="container">
          <h2> F. A. Q. </h2>
          <Accordion/>
            <div className="gift-cards">
              <div>
                <img
                  src="https://images.pexels.com/photos/4031867/pexels-photo-4031867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="domoi"
                />
              </div>
              <div>
                <div>
                <img
                  src="https://images.pexels.com/photos/4031867/pexels-photo-4031867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="domoi"
                />
              </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <Footer/>
      </div>
    );
  }
}
