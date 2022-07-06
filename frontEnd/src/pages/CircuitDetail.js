import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { NavLink } from "react-router-dom";

import "../styles/circuits-and-map/circuitsDetail.css";
import "../styles/circuits-and-map/Map.css";

const CircuitsDetails = () => {

  function handleClick(e) {
    
    e.preventDefault();
    window.location.assign("/details");
  }

  const [shopData, setShopData] = useState([]);

  // appel de l'API grace à axios (à installer avec npm)
  useEffect(() => {
    axios
      .get(
        "https://opendata.paris.fr/api/records/1.0/search/?dataset=coronavirus-commercants-parisiens-livraison-a-domicile&q=&rows=100&facet=code_postal&facet=type_de_commerce&facet=fabrique_a_paris&facet=services"
      )
      .then((res) => setShopData(res.data.records));
  }, []);

  return (
    <div className="wrapper">
      <MapContainer
        center={[48.866669, 2.33333]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shopData.slice(0, 3).map((shop) => (
          <Marker
            key={shop.recordid}
            position={[
              shop.fields.geo_point_2d[0],
              shop.fields.geo_point_2d[1],
            ]}
          >
            <Popup>
              <h1>{shop.fields.nom_du_commerce}</h1>
              <h2>{shop.fields.type_de_commerce}</h2>
              <h4>
                {shop.fields.adresse} <br /> {shop.fields.code_postal}
              </h4>
              <p>
                {shop.fields.telephone
                  ? shop.fields.telephone
                  : "Numéro de téléphone indisponible"}
              </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="back">
       <NavLink to="/AllCircuit">
        <button>
          <img src="./pics/svg/corner-down-left.svg" alt="arrow" />
        </button>
       </NavLink>
      </div>
      <div className="circuit">
        <h1>La balade des pâtissiers</h1>
      </div>
      <div className="buttons">
      <NavLink to="/description">
        <button>
          <img src="./pics/svg/heart.svg" alt="coeur" />
        </button>
      </NavLink>

      </div>
    </div>
  );
};

export default CircuitsDetails;
