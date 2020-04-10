import React, { Component } from "react";

export default class Footer extends Component {
    render() {
      return (
        <footer className="back">
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
      );
    }
}