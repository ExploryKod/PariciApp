import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "../styles/circuits-and-map/Map.css";

function Map() {
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
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[48.866669, 2.33333]}>
          <Popup>
            <h1>hello</h1>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
