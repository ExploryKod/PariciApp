import React from 'react';

import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

import '../styles/circuits-and-map/allCircuits.css';

const Intro = () => {
  const [listOfCircuits, setListOfCircuits] = useState([]);
  const [listOfRecommandations, setListOfRecommandations] = useState([]);



  useEffect(() => {
    axios.get("http://localhost:3000/circuit/allCircuit").then((response) => {
      setListOfCircuits(response.data.circuits)

    });
  }, []);
  // afficher 4 circuits aprés le 1er comme ça on ne va pas afficher toutes les circuits de notre bdd dans recommadation
  useEffect(() => {
    axios.get("http://localhost:3000/circuit/all/4/2").then((response) => {
      setListOfRecommandations(response.data.circuits)

    });
  }, []);

  return (
    <div className="containeAllCircuit">
      <div className="BtnA">
        <Link to="/Home" className="backBtn"><span class="material-icons">arrow_back</span></Link>
        <Link className='nameCircuit' to="/CreateCircuits"><button className="createBtn" type="submit" ><span class="material-icons">add_task</span></button></Link>
      </div>
      <h2 id="BigTitle" >Selon vos préferences</h2>

      <div id="sectionCard">
        {listOfCircuits.map((value) => {

          return (
            <div className="cardCircuit">
              <img className="picture" src={value.image_circuit} alt="carte" />

              <Link className='nameCircuit' to={`/CircuitDT/${value.id_circuit}`}>{value.name_circuit}</Link>


            </div>


          );
        })}
      </div>

      <h2 id="BigTitle" >Nos Recommandations</h2>
      <div id="sectionCard">
        {listOfRecommandations.map((value) => {
          /* const magasin = value.magasins.map(magasin => magasin.recordId_magasin) */
          return (
            <div className="cardCircuit">

              <img className="picture" src={value.image_circuit} alt="ambiance du circuit" ></img>

              <Link className='nameCircuit' to={`/CircuitDT/${value.id_circuit}`}>{value.name_circuit}</Link>

            </div>


          );
        })}
      </div>



    </div>
  );
};

export default Intro
