import React, { Component } from "react";
import ImageUploader from "../Components/ImageUploader";
import "./home.css";
import "./createproduct.css";

const token = localStorage.getItem("Token");
const user = localStorage.getItem("User");
let isLogined = token ? true : false;
const url = "http://localhost:8000/media/images/";

export default class createProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      username: "",
      first_name: "",
      last_name: "",
      last_login: null,
      date_joined: null,
      fetched: false,
      image: null,
    };
  }

  componentWillMount() {
    if (!isLogined) {
      this.props.history.push("/");
    }
  }
  componentDidMount() {
    if (!user)
      fetch("http://localhost:8000/users/me/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.user) {
            this.setState(data.user);
            this.setState({ fetched: true });
            this.setState({ image: data.image.image });
            console.log(this.state);
          }
        });
    else {
      this.setState(JSON.parse(user));
    }
  }
  render() {
    return (
      <div class="createproductContainer cardSettings cA text-center white-text">
        <div className="cardSettings">
          <h2 class="card-title mb-0 text-center">Create product</h2>
        </div>
        <main>
          <div class="card-body">
            <form>
              <div class="row">
                <div class="col-md-8">
                  <div class="form-group text-left">
                    <label for="inputUsername">Product title</label>
                    <textarea
                      rows="2"
                      class="form-control"
                      id="inputBio"
                      placeholder="Product title"
                    ></textarea>
                  </div>
                  <div class="form-group text-left">
                    <label for="inputUsername">Product description</label>
                    <textarea
                      rows="2"
                      class="form-control"
                      id="inputBio"
                      placeholder="Product description"
                    ></textarea>
                  </div>
                  <div class="form-group text-left">
                    <label for="inputUsername">Price</label>
                    <textarea
                      rows="2"
                      class="form-control"
                      id="inputBio"
                      placeholder="Price"
                    ></textarea>
                  </div>
                  <div class="form-group text-left">
                    <label for="inputUsername">Category</label>
                    <select class="custom-select d-block w-100" id="country" required="">
                      <option value="">Choose category</option>
                      <option>Business</option>
                      <option>Digital marketing</option>
                      <option>Graphics and design</option>
                      <option>Music and audio</option>
                      <option>Programming and tech</option>
                      <option>Video and animation</option>
                      <option>Writing and translation</option>
                      </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <h3>The uncreateble params people will see:</h3>

                  <p className="mt-3">Rating</p>
                  <div class="rating">
                    <input type="radio" id="star1" name="rating" value="1" />
                    <label for="star1"></label>
                    <input type="radio" id="star2" name="rating" value="2" />
                    <label for="star2"></label>
                    <input type="radio" id="star3" name="rating" value="3" />
                    <label for="star3"></label>
                    <input type="radio" id="star4" name="rating" value="4" />
                    <label for="star4"></label>
                    <input type="radio" id="star5" name="rating" value="5" />
                    <label for="star5"></label>
                  </div>

                  <div className="border border-dark row mt-2 mb-2"></div>

                  <p>Number of reviews</p>
                  <div class="mr-grid">
                    <div class="col1">
                      <p class="userCardReviews">999 reviews on this product</p>
                    </div>
                  </div>
                </div>

                <div className="text-center col-12">
                  <div className="border border-dark row mt-2 mb-2"></div>
                  <div>
                    <p>Choose title photo</p>
                    <img
                      class="mt-3"
                      src={this.state.image ? url + this.state.image : ""}
                      width="100%"
                      height="100%"
                    />
                    <div class="mt-2">
                      <ImageUploader />
                    </div>
                  </div>
                </div>

                <div className="text-center col-12">
                  <div className="border border-dark row mt-2 mb-2"></div>
                  <div>
                    <p>Choose product photos</p>
                    <img
                      class="mt-3"
                      src={this.state.image ? url + this.state.image : ""}
                      width="100%"
                      height="100%"
                    />
                    <div class="mt-2">
                      <ImageUploader />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-dark row mt-2 mb-2"></div>
              <div className="text-left">
                <button type="submit">Create</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }
}
