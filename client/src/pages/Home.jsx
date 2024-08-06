import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Carousels from "../components/Carousels";
import carouselimg from "../assets/Carousel.png";
import Card from "../components/Card";
import potatos from "../assets/potatos.png";
import tomatos from "../assets/tomatos.png";
import carrots from "../assets/carrots.png";
import onions from "../assets/onions.png";
export default function Home() {
  const [slides, setslides] = useState([]);
  const data = [
    {
      text: (
        <div>
          <h2>Delightful Strawberries</h2>
          <h2>20% off</h2> <h2>BUYNOW</h2>
        </div>
      ),
      className: "slide1",
      image: carouselimg,
    },
    {
      text: (
        <div>
          <h2>Delightful Strawberries</h2>
          <h2>20% off</h2> <h2>BUYNOW</h2>
        </div>
      ),
      className: "slide2",
      image: carouselimg,
    },
    {
      text: (
        <div>
          <h2>Delightful Strawberries</h2>
          <h2>20% off</h2> <h2>BUYNOW</h2>
        </div>
      ),
      className: "slide3",
      image: carouselimg,
    },
  ];
  const [cards , setcards] = useState([]);
  const carddatas = [
    {
      productname: "Onions",
      quantity: ["10kg", "5kg"],
      price: 10000,
      image: onions,
    },
    {
      productname: "Potato",
      quantity: ["10kg", "5kg"],
      price: 10000,
      image: potatos,
    },
    {
      productname: "Tomato",
      quantity: ["10kg", "5kg"],
      price: 10000,
      image: tomatos,
    },
    {
      productname: "Carrot",
      quantity: ["10kg", "5kg"],
      price: 10000,
      image: carrots,
    },
  ];
  useEffect(() => {
    const fetchslides = () => {
      setslides(data);
    };
    const fetchcards = () => {
      setcards(carddatas);
    };
    fetchslides();
    fetchcards();
  }, []);
  return (
    <>
      <Navbar />
      <Carousels isData={slides}></Carousels>
      <Card isCarddata={cards}></Card>`{" "}
    </>
  );
}
