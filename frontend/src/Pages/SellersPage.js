import React, { Component } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Ourseller from "../Components/OurSeller";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    thumbnail: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    original: "https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    thumbnail: "https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    original: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    thumbnail: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
];
export default class SellerPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title : null,
      description : null,
      price : null,
      date : null,
      category:{
        name: null,
        description: null
      } ,
      owner : null,
    };
  }

  componentDidMount(){
    const { id } = this.props.match.params;

    fetch(`http://localhost:8000/services/${id}/`,{
      method: "GET"
    }).then(res => res.json()).then(data => {
      console.log(data);
      this.setState(data);
      console.log(this.state);
    })


  }

  render() {
    return (
      <div>
      <section className="section back">
        <div class="container contain bg-grey cont">
    <h1 class="my-4 red ">{this.state.title}</h1>
          <hr className="red" />
          <div class="row">
            <div class="col-md-8">
              <ImageGallery items={images} />
            </div>
            <div class="col-md-4">
              
              <div className="cont">
                <h3 class="my-3">Product Description</h3>
                <p className="txt">
                 {this.state.description}
                </p>
                <hr className="red" />
                <h3 class="my-3">Seller</h3>
                <Ourseller />
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
                <hr className="red" />
                <h3 >Price</h3>
    <h4>{this.state.price} shekelei</h4>
              </div>
              <hr className="red" />
              <div className="button-buy">
            <button type="submit">Buy this product</button>
            <button type="submit">Contact with seller</button>
          </div>
            </div>
          </div>
          <hr className="red" />
          <h1 class="my-4 red ">Reviews</h1>
          <hr className="red" />
          <Ourseller />
          <p className="txt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  viverra euismod odio, gravida pellentesque urna varius vitae.
                  Sed dui lorem, adipiscing in adipiscing et, interdum nec
                  metus. Mauris ultricies, justo eu convallis placerat, felis
                  enim.
                </p>
          <br/>
          <Ourseller />
          <p className="txt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  viverra euismod odio, gravida pellentesque urna varius vitae.
                  Sed dui lorem, adipiscing in adipiscing et, interdum nec
                  metus. Mauris ultricies, justo eu convallis placerat, felis
                  enim.
                </p>
          <br/>
          <Ourseller />
          <p className="txt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  viverra euismod odio, gravida pellentesque urna varius vitae.
                  Sed dui lorem, adipiscing in adipiscing et, interdum nec
                  metus. Mauris ultricies, justo eu convallis placerat, felis
                  enim.
                </p>
          <br/>
          <Ourseller />
          <p className="txt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  viverra euismod odio, gravida pellentesque urna varius vitae.
                  Sed dui lorem, adipiscing in adipiscing et, interdum nec
                  metus. Mauris ultricies, justo eu convallis placerat, felis
                  enim.
                </p>
          <br/>
          <hr className="red" />
          <h1 class="my-4 red ">Simmilar products</h1>
          <hr className="red" />
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
              </div>
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
