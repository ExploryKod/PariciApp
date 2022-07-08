import React from 'react';
import { latLngBounds, DivIcon } from 'leaflet';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    FeatureGroup,
    useMap,
} from 'react-leaflet';

const Map = ({ waypoints }) => {
    // -- INIT
    // Base coords
    const baseCoords = [12.34567, 76.54321];

    // -- RENDER
    return (
        <MapContainer
            center={baseCoords}
            zoom={10}
            scrollWheelZoom
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MapContent waypoints={waypoints} />
        </MapContainer>
    );
};

// Subcomponent mandatory for useMap()
const MapContent = ({ waypoints }) => {
    // Map context
    const map = useMap();

    // ... Code pour générer les waypoints

    // -- RENDER
    return (
        <FeatureGroup>
            {waypoints.map((wp, idx) => {
                // ... du code
                // Marker Icon
                const myIcon = new DivIcon({
                    // ... options
                });

                // Add marker
                return (
                    <Marker
                        key={wp.id}
                        position={[wp.coordinates.latitude, wp.coordinates.longitude]}
                        icon={myIcon}
                    >
                        {/* ... Code du marqueur */}
                    </Marker>
                );
            })}
        </FeatureGroup>
    );
};

export default Map;
