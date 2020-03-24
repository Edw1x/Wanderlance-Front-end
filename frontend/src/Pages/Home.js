/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import logo from "../Components/cafe.gif";
import CarouselBox from "../Components/CarouselBox";
import Carousel from "react-bootstrap/Carousel";
import {
  Tab,
  Container,
  Nav,
  Row,
  Col,
  CardDeck,
  Card,
  Button
} from "react-bootstrap";
import { CardBody, CardText } from "react-bootstrap/Card";
import "./text.css";
import "./background.css";
import Ourseller from "../Components/OurSeller";
import Categories from "../Components/Categories";
import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from 'react-image-gallery';


const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default class Home extends Component {
  render() {
    return (
      <div>
        <ImageGallery items={images} />
        </div>
    );
  }
}
