import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel/Carousel";
import { LazyImageProvider } from "./LazyImage/LazyImageContext";
import LazyImage from "./LazyImage/LazyImage";
import LazyImage1 from "./LazyImage/LazyImage1";
import "./bannerimg.css";

const images = [
  
  "/img1/2.jpg",
  
  "/img1/4.jpg",
  "/img1/5.jpg",
  "/img1/6.jpg",
  "/img1/7.jpg"
];

const images2 =[
  "/img1/2.jpg",
  "/img1/3.jpg",
  "/img1/4.jpg",
  "/img1/5.jpg",
  "/img1/6.jpg",
  "/img1/7.jpg"
  
]

const images3 =[
  "/img1/2.jpg",
  "/img1/3.jpg",
  "/img1/4.jpg",
  "/img1/5.jpg",
  "/img1/6.jpg",
  "/img1/7.jpg"
  
]

const images4 =[
  "/img1/2.jpg",
  "/img1/3.jpg",
  "/img1/4.jpg",
  "/img1/5.jpg",
  "/img1/6.jpg",
  "/img1/7.jpg"
  
]

const App1 = () => (
  <LazyImageProvider>
    <Carousel className="Carousel1">
      {images.map((image,i) => (
        <LazyImage aspectRatio={[10, 7]} src={image} key={i} />  
       
      ))}
      
    </Carousel>
    <Carousel className="Carousel1">
      {images.map((image,i) => (
        <LazyImage aspectRatio={[10, 7]} src={image} key={i} />
       
      ))}
    </Carousel>

    <Carousel className="Carousel2">
      {images.map((image,i) => (
        <LazyImage1 aspectRatio={[10, 7]} src={image} key={i} />
        
       
      ))}
    </Carousel>
    <Carousel className="Carousel3">
      {images.map((image,i) => (
        <LazyImage1 aspectRatio={[10, 7]} src={image} key={i} />
        
      ))}
    </Carousel>
  </LazyImageProvider>
);

export default App1;

