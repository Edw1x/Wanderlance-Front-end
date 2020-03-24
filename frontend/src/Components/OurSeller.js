import React, { Component } from "react";
import "./ourseller.css";
export default class UserCard extends Component {
  render() {
    return (
      <div>
        <figure class="fir-image-figure">
          <a
            class="fir-imageover"
            rel="noopener"
            target="_blank"
            href="https://twitter.com/_davideast"
          >
            <img
              class="fir-author-image fir-clickcircle"
              src="https://picsum.photos/200/150/?random"
              alt="David East - Author"
            />
            <div class="fir-imageover-color"></div>
            <img
              class="fir-imageover-image fir-clickcircle"
              src="https://picsum.photos/200/150/?random"
            />
          </a>

          <figcaption>
            <div class="fig-author-figure-title txt">Igor Chaikovskiy</div>
            <div class="fig-author-figure-title red txt">
              in company thince october 12.
            </div>
            <div class="fig-author-figure-title txt small">
              Last seen 10 min ago
            </div>
          </figcaption>
        </figure>
      </div>
    );
  }
}
