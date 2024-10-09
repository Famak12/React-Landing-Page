import React, { useState } from "react";
import { slides } from "./Data/CarouselData.json";
import "./Testimonials.css";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


function Testimonials( ) {

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
      setSlide(slide === slides.length - 1 ? 0 : slide + 1);
    };
  
    const prevSlide = () => {
      setSlide(slide === 0 ? slides.length - 1 : slide - 1);
    };

    return (
        <section className="testimonials-main">
            <h1 className="heading1">Testimonials from Our Clients</h1>
       
        <div className="carousel">
                <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
            {slides.map((item, idx) => 
                { return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"} /> }
            )}
               <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right"/>
               <span className="indicators">
        {slides.map((_, idx) => {
          return (
            <button key={idx} className={slide === idx ? "indicator" : "indicator indicator-inactive"} onClick={() => setSlide(idx)}>
            </button>
          );
        })}
      </span>
        </div>
        </section>
    )
}

export default Testimonials;