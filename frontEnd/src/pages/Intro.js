import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, Outlet } from "react-router-dom";

import '../styles/welcome-pages/intro.css';

const Intro = () => {

    const [pictures, setPictures] = useState('intro');
    var [count, setCount] = useState(1);
    const [title, setTitle] = useState([
        "Selectionnez votre parcours",
        "Rendez-vous le jour J",
        "Profitez du moment !"
    ]);
    const [bio, setBio] = useState([
        "Trouver le parcours qui vous plaira parmi notre sélection de commerces ou découvrez Paris sous un tout nouvel angle",
        "Préparez vos chaussures, votre carnet de bonnes adresses et votre groupe d’amis, votre journée sera bien remplie !",
    ]);

    useEffect(() => {
        document.getElementById(count).style.backgroundColor = "blue";
        document.getElementById(count).style.width = "50px";
    });

    const handleClick = () => {
        document.getElementById(count).style.backgroundColor = "grey";
        document.getElementById(count).style.width = "10px";
        setCount(count + 1);
        document.getElementById(count + 1).style.backgroundColor = "blue";
        document.getElementById(count + 1).style.width = "50px";
    }

    if (count === 3) {
        document.getElementById("footerBlock").style.display = "none";
        document.getElementById("footerEnd").style.display = "flex";
    }

    return (
        <div className='wrapper intro-page'>
            <div className='picture-block'>
                <img
                    className='introPicture'
                    src={process.env.PUBLIC_URL + "pics/" + pictures + count + ".jpg"}
                    alt="ambiance de commerce" />
            </div>
            <div className='textBlock'>
                <div id="carrousel">
                    <div className="cercles" id="1"></div>
                    <div className="cercles" id="2"></div>
                    <div className="cercles" id="3"></div>
                </div>
                <div className='text-part'>
                    <h2 id="titlePart">{title[count - 1]}</h2>
                    <p id="bioPart">{bio[count - 1]}</p>
                </div>
                <div id="footerBlock">

                    <NavLink to="/Home">
                        <p id="skip">Passer</p>
                    </NavLink>

                    <button onClick={handleClick} id="buttonNext">Next</button>
                </div>

                <div id="footerEnd">
                    <NavLink to="/Home">
                        <button id="Start">Commencer</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Intro;