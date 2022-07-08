import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import MyImage from "../assets/CircuitExampleImage.jpg";
import GpShopsSlider from "./Gp_circuits_shops";
import SwitchButton from "./Gp_switch_button";
import axios from "axios";

import '../styles/circuits_groups/gp_description.css';

export const GpCircuitDescription = () => {

    // Information permettant de savoir vers quelle page de description du circuit aller:
    const { id_circuit } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/circuit/all/${ id_circuit }/0`).then((response) =>{
            setData(response.data.circuits);
        });
    },);
    /**
     * Fonction qui sert à rabaisser ou remonter le panneau de description du circuit:
     * Cela engendre une modification de nombreux composants de la page.
     */
     console.log(data)
    const toggleDescriptionCard = () => {
        const MainContainer = document.querySelector(".gp-description-main");

        const descriptionContainer = document.querySelector(".gp-description-card");
        const descriptionImage = document.querySelector(".gp-description-image");
        const descriptionText = document.querySelector(".gp-description-text");
        const subscribeCircuit = document.querySelector(".gp-subscription-btn");
        const DisplayHideArrow = document.querySelector(".arrow-hide-display");
        const CircuitImage = document.querySelector(".gp-circuit-map");
        const CircuitSteps = document.querySelector(".gp-circuit-steps");
        const switchButtons = document.querySelector(".switch-buttons-section");

        if (window.getComputedStyle(descriptionText).getPropertyValue("display") === "none") {
            switchButtons.style.opacity = "0";
            descriptionImage.style.display = "block";
            descriptionText.style.display = "block";
            subscribeCircuit.style.display = "block";
            DisplayHideArrow.style.transform = "rotate(90deg)";
            descriptionContainer.style.height = '60%';
            descriptionImage.style.transition = "1s ease-in-out";
            descriptionImage.style.transform = "translateY(0%)";
            CircuitImage.style.opacity = "0.1";
            CircuitImage.style.transition = "0.5s ease";
            CircuitSteps.style.opacity = "0";
            MainContainer.style.height = '100vh';
            MainContainer.style.width = '100%';
            
        } else {
            switchButtons.style.opacity = "1";
            CircuitImage.style.opacity = "1";
            CircuitImage.style.transition = "0.5s ease";
            descriptionImage.style.transition = "0s";
            descriptionContainer.style.transition = "1s ease";
            descriptionImage.style.transform = "translateY(100%)";
            descriptionText.style.display = "none";
            subscribeCircuit.style.display = "none";
            DisplayHideArrow.style.transform = "rotate(-90deg)";
            descriptionContainer.style.height = '10%';
            MainContainer.style.height = '0vh';
            MainContainer.style.width = '0%';
        }
    }
    
    return (
        <>
            <div className="gp-circuit-steps"></div>
            <div className="gp-circuit-map" style={{ backgroundImage: `url(${MyImage})` }}></div>
       
            {/* Ici on ne filtre que les informations issu du bon circuit 
            c'est à dire équivalent à la valeur de la propriété "route" de l'objet qui liste les commerces d'un circuit et de l'url/:route */}
            {data?.map((card, index) => {
                return(
            
                <main key={index} className='gp-description-main' >

                    {/* Composant permettant d'afficher soit la liste des commerces du circuit soit une carte du circuit en fond de page */}
                    <SwitchButton />
                   
                    <div className="gp-card-container">
                        <div className="gp-description-card">
                            <span onClick={toggleDescriptionCard}><MdOutlineArrowForwardIos className="arrow-hide-display" /></span>
                            <div className='gp-description-text active'>
                                <h1>{card.name_circuit}</h1>
                                <p>{card.description_circuit}</p>
                                <ul>
                                    <li><span>Date:</span> {card.group_date}</li>
                                    <li><span>Horaires:</span> {card.group_time}</li>
                                </ul>
                            </div>

                            {/* Lien pour s'inscrire au circuit qui va renvoyer à la page d'inscription de Salma (ici ça renvoit à un module temporaire)*/}
                            <Link className="gp-subscription-btn" to={card.name_circuit}>Je m'inscris</Link>
                            
                        </div>
                        <div className='gp-description-image' style={{ backgroundImage: `url(${card.image_circuit})` }}></div>
                    </div>
                </main>
                )
})}

        </>
    )

}

export default GpCircuitDescription;