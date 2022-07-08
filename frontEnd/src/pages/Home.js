import React from "react";
import { Link } from 'react-router-dom';
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import logo from "../assets/logoParici.png";

import '../styles/welcome-pages/home.css';

const Home = () => {

  return (
    <div className="wrapper upper-container-home">
      <div></div>
      <div className="containerHome">
        <div className="home-page">
          <div className="contentHome">
            <img className="logo" src={logo} alt="" />

            <div id="head">
              <h1>CIRCUIT DU JOUR</h1>
              <img className="Cardone" src={one} alt="" />
              <img className="Cardtwo" src={two} alt="" />
              <img className="Cardthree" src={three} alt="" />
            </div>
            <div className="sectiontxt">
              <h2>Tout commence à Paris</h2>
              <p>Créez vos circuits et visitez les artisans de Paris</p>
              <Link className="create-circuit-cta" to='/CreateCircuits'>Créez votre circuit</Link>
              <Link className="visit-circuit-cta" to='//AllCircuits'>Voir nos circuits</Link>
            </div>

          </div>
          <div id="section1">

            <div className="card-sector cardA1"><h1>Paris 7ème</h1></div>
            <div className="card-sector cardA2"><h1>Paris 12ème</h1></div>
            <div className="card-sector cardA3"><h1>Paris 18ème</h1></div>
            <div className="card-sector cardA4"><h1>Paris 16ème</h1></div>

          </div>

        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
