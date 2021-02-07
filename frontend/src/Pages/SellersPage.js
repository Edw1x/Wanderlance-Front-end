import React, { Component } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import UserCard from "../Components/UserCard";
import Ourseller from "../Components/OurSeller";
import ImageGallery from "react-image-gallery";
import Review from "../Components/Review.js";
import "./sellerspage.css";
import Footer from "../Components/Footer";

const images = [
  {
    original:
      "https://d27go2yy70kkz6.cloudfront.net/wp-content/uploads/2017/06/Programaci%C3%B3n-de-p%C3%A1ginas-web-en-Bootstrap-1024x811.jpg",
    thumbnail:
      "https://d27go2yy70kkz6.cloudfront.net/wp-content/uploads/2017/06/Programaci%C3%B3n-de-p%C3%A1ginas-web-en-Bootstrap-1024x811.jpg",
  },
  {
    original:
      "https://itchief.ru/assets/img/bootstrap/bootstrap-4.png",
    thumbnail:
      "https://itchief.ru/assets/img/bootstrap/bootstrap-4.png",
  },
  {
    original:
      "https://www.bootstrapdash.com/wp-content/uploads/2017/08/bootstrap-4-beta-whats-new.jpg",
    thumbnail:
      "https://www.bootstrapdash.com/wp-content/uploads/2017/08/bootstrap-4-beta-whats-new.jpg",
  },
];
const token = localStorage.getItem("Token");
export default class SellerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      description: null,
      price: null,
      date: null,
      category: {
        name: null,
        description: null,
      },
      owner: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`http://localhost:8000/services/${id}/`, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState(data);
        console.log(this.state);
      });
  }

  render() {
    return (
      <div>
        <section className="section back">
          <div class="container contain bg-grey cont border border-dark">
            <h1 class="my-4 red ">{this.state.title}</h1>
            <div class="row">
              <div class="col-md-8">
                <ImageGallery items={images} />
              </div>
              <div class="col-md-4">
                <div className="cont">
                  <h3 class="my-3">Product Description</h3>
                  <p className="white-text wordBreak">
                    {this.state.description}
                  </p>
                  <hr className="white" />
                  <h3 class="my-3">Seller</h3>
                  <Ourseller
              username = {"PavloZinko"}
              image = {"https://codeguida.com/media/post_title/bootstrap-logo.png"} />
                  <div class="mr-grid rating-margin">
                    <div class="col2">
                      <h5>Rating</h5>
                    </div>
                    <div class="col2">
                      <ul class="userRating">
                        <li>
                          <i class="material-icons">&#10032;</i>
                          <i class="material-icons">&#10032;</i>
                          <i class="material-icons">&#10032;</i>
                          <i class="material-icons">&#10032;</i>
                          <i class="material-icons">&#10032;</i>
                        </li>
                        <li>0.0</li>
                      </ul>
                    </div>
                  </div>
                  <hr className="white" />
                  <h3>Price</h3>
                  <h4>{this.state.price} $</h4>
                </div>
                <hr className="white" />
                <div className="button-buy">
                  <button type="submit"onClick={(event) =>(window.location.href = `/orderproductpage`)}>Buy this product</button>
                  <button type="submit">Contact with seller</button>
                </div>
              </div>
            </div>

            <div className="border border-dark row"></div>

            <h1 class="my-4 red ">Reviews</h1>
            <div className="reviews">
              <Review />
            </div>

            <div className="border border-dark row"></div>

            <h1 class="my-4 red ">Simmilar products</h1>
            <div class="container row col">
              <UserCard
                title="Template title"
                description="Hi, we are Wanderlance team, thanks for coming today here, have a nice day. Here is a template description"
                price="100000"
              />
              <UserCard
                title="Template title"
                description="Hi, we are Wanderlance team, thanks for coming today here, have a nice day. Here is a template description"
                price="100000"
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
