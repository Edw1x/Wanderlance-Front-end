import React, { Component } from "react";
import "./settings.css";
import ImageUploader from "../Components/ImageUploader"

const token = localStorage.getItem('Token');
const user = localStorage.getItem("User");
let isLogined = token ? true : false;
const url = "http://localhost:8000/media/images/"

export default class Settings extends Component {
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
          image: null
        };
      }

      componentWillMount(){
        if(!isLogined){
          this.props.history.push('/');
        }
      }
      componentDidMount(){
        if(!user)
        fetch('http://localhost:8000/users/me/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
          }
        }).then(res => res.json()).then(data => {
          console.log(data);
          this.setState(data.user);
          this.setState({ fetched: true });
          this.setState({image: data.image.image});
          console.log(this.state);
        })
        else{
          this.setState(JSON.parse(user));
        }
      }
    render() {
      return (
        <div class="container p-0 txt cA">

        <h1 class="h3 mb-3">Settings</h1>
    
        <div class="row">
            <div class="col-md-5 col-xl-4">
    
                <div class="cardSettings">
                    <div class="card-headerSettings">
                        <h5 class="card-title mb-0">Profile Settings</h5>
                    </div>
    
                    <div class="list-group list-group-flush" role="tablist">
                        <a class="list-group-item list-group-item-action active" data-toggle="list" href="#account" role="tab">
                          Account
                        </a>
                        <a class="list-group-item list-group-item-action" data-toggle="list" href="#password" role="tab">
                          Password
                        </a>
                        <a class="list-group-item list-group-item-action" data-toggle="list" href="#login" role="tab">
                          Login
                        </a>
                        <a class="list-group-item list-group-item-action" data-toggle="list" href="#delete" role="tab">
                          Delete account
                        </a>
                    </div>
                </div>
            </div>
    
            <div class="col-md-7 col-xl-8">
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="account" role="tabpanel">
    
                        <div class="cardSettings">
                            <div class="card-headerSettings">
                                <div class="card-actions float-right">
                                    <div class="dropdown show">
                                        <a href="#" data-toggle="dropdown" data-display="static">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal align-middle">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                                <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                        </a>
    
                                        <div class="dropdown-menu dropdown-menu-right ">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <h5 class="card-title mb-0">Public info</h5>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="row">
                                        <div class="col-md-8">
                                            <div class="form-group">
                                                <label for="inputUsername">Biography</label>
                                                <textarea rows="2" class="form-control" id="inputBio" placeholder="Tell something about yourself"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="text-center">
                                            <img
            
                                            class="photo rounded-circle img-responsive mt-2"
                                            src={this.state.image?url + this.state.image:""}
                                            width="128" height="128"
                                            />
                                                <div class="mt-2">
                                                <ImageUploader/>
                                                </div>
                                                <small>For best results, use an image at least 128px by 128px in .jpg format</small>
                                            </div>
                                        </div>
                                    </div>
    
                                    <button type="submit" class="btn btn-primary">Save changes</button>
                                </form>
    
                            </div>
                        </div>
    
                        <div class="cardSettings">
                            <div class="card-headerSettings">
                                <div class="card-actions float-right">
                                    <div class="dropdown show">
                                        <a href="#" data-toggle="dropdown" data-display="static">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal align-middle">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                                <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                        </a>
    
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <h5 class="card-title mb-0">Private info</h5>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputFirstName">First name</label>
                                            <input type="text" class="form-control" id="inputFirstName" placeholder="First name"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputLastName">Last name</label>
                                            <input type="text" class="form-control" id="inputLastName" placeholder="Last name"/>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Save changes</button>
                                </form>
    
                            </div>
                        </div>
    
                    </div>
                    <div class="tab-pane fade" id="password" role="tabpanel">
                        <div class="cardSettings">
                            <div class="card-body">
                                <h5 class="card-title">Password</h5>
    
                                <form>
                                    <div class="form-group">
                                        <label for="inputPasswordCurrent">Current password</label>
                                        <input type="password" class="form-control" id="inputPasswordCurrent"/>
                                        <div className="grey">
                                            <a href="/ResetPassword">
                                            Forgot password?
                                        </a>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPasswordNew">New password</label>
                                        <input type="password" class="form-control" id="inputPasswordNew"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPasswordNew2">Verify password</label>
                                        <input type="password" class="form-control" id="inputPasswordNew2"/>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Save changes</button>
                                </form>
    
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="login" role="tabpanel">
                        <div class="cardSettings">
                            <div class="card-body">
                                <h5 class="card-title">Login</h5>
    
                                <form>
                                    <div class="form-group">
                                        <label for="inputLoginCurrent">Current Login</label>
                                        <input type="login" class="form-control" id="inputLoginCurrent"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputLoginNew">New login</label>
                                        <input type="login" class="form-control" id="inputLoginNew"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputLoginNew2">Verify login</label>
                                        <input type="login" class="form-control" id="inputLoginNew2"/>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Save changes</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    
                    <div class="tab-pane fade" id="delete" role="tabpanel">
                        <div class="cardSettings">
                            <div class="card-body">
                                <h5 class="card-title">Delete Account</h5>
    
                                <form>
                                    <div class="form-group">
                                        <label for="inputLoginCurrent">Login</label>
                                        <input type="login" class="form-control" id="inputLoginCurrent"/>
                                        <p>Input your login here if you want to delete your account</p>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Delete</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    
    </div>
      );
    }
}