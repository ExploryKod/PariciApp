import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

import '../styles/circuits-and-map/CircuitDT.css';

function CircuitDT(){
    let { id_circuit } = useParams()
    const [CircuitObject, setCircuitObject] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:3000/circuit/getCircuitById/${id_circuit}`).then((response) =>{
            setCircuitObject(response.data.circuits);
           
        });
    },);

    return (
        <div className="wrapper containCircuitDT">
           <div className="BtnA">
             
            <Link className='arrowBtn' to="/AllCircuits"><span class="material-icons">arrow_back</span></Link>
              </div>
            <div className="contenthead">
                <div className="header">
                    <h3>Durée</h3>
                    <p>4H</p>
                </div>
                <div className="header">
                    <h3>{CircuitObject.arrondissement}</h3>
                    <p>5</p>
                </div>
                </div>
                <div className="cardDT">
                    <img className="pict" src={CircuitObject.image_circuit} alt="" />
                    <div className="contentTXT">
                        <h1>{CircuitObject.name_circuit}</h1>
                        <div>{CircuitObject.description_circuit}</div>
                        <Link className='to-map-btn' to='/circuitDetail'>Explorer le circuit</Link>
                        <p>{CircuitObject.magasins?.map(magasin => <p>{magasin.recordId_magasin}</p> )}</p>
                    </div>
                </div>
               
            
        </div>
    );
}

export default CircuitDT;