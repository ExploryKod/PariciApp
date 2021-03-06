import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBackIos, MdArrowForwardIos, MdOutlineShare } from "react-icons/md";
import axios from "axios";

import "../styles/circuits_groups/Gp_circuit_card.css";
import "../styles/circuits_groups/Gp_circuit_carrousel.css";

// Ce sont ici les slides du carrousel de la page de défilement des différents circuits (importés de notre base des circuits).
const GpCircuitsSlider = () => {
  const [listOfCircuits, setListOfCircuits] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/circuit/allCircuit").then((response) => {
      setListOfCircuits(response.data.circuits)

    });
  }, []);

  const [current, setCurrent] = useState(0);
  const length = listOfCircuits.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(listOfCircuits) || listOfCircuits.length <= 0) {
    return null;
  }

  window.addEventListener('load', () =>  { 
    const ShareToFb = document.querySelector(".fb-share-button");
    ShareToFb.classList.add("close");
  })

  function ShareToNetwork() {
    const ShareToFb = document.querySelector(".fb-share-button");
    const ShareBtn = document.querySelector(".map-wrapper span");
    if(ShareToFb.classList.contains("open")){
        ShareToFb.classList.remove("open");
        ShareToFb.classList.add("close");
    } else {
      ShareToFb.classList.remove("close");
      ShareToFb.classList.add("open");
    }
    
    
  }
      
  return (
    <>
    <section className='slider'>
  
      <MdArrowBackIos className='left-arrow' onClick={prevSlide} />
      <MdArrowForwardIos className='right-arrow' onClick={nextSlide} />
      {listOfCircuits.map((slide, index) => {
      
        return (
           
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}>
            {index === current && (
            <div className="carousel-wrapper">
                <div className="map-wrapper">
                    <span> <MdOutlineShare onClick={ShareToNetwork} /></span>
                   
                    <img src={slide.image_circuit} alt='circuit en groupe' className='map-img-gp' />
                    <div className='title-wrapper'><h1>{slide.name_circuit}</h1></div>
                </div>
                <div className="information-wrapper">
                    
                    <h2> Descriptions: {slide.description_circuit}</h2>
                </div>
                {/* Lien qui va renvoyer à la description du circuit lié à la slide présente via la sub-route de l'url avec react-router, 
                cette route est celle de la propriété route de l'objet qui fournit les data du circuit. */}
                <Link className="btn"  to={`/circuits-de-groupe/${slide.id_circuit}`}>En savoir plus</Link>
                <div className="gp_counter"><h1>{listOfCircuits.indexOf(slide)+1}/{listOfCircuits.length}</h1></div>
            </div>
            
            )}
          </div>
        );
      })}
    </section>
        <div className="SocialWrapper">
         <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="small">
         <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore"> 
         </a></div>
         </div>
        </>
  );
};

export default GpCircuitsSlider;