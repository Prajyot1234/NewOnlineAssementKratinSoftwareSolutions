import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import React from 'react'

export default function map() {
    const position = [21.1458, 79.0882];

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%", backgroundColor:"grey"  }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
           <Marker position={position}></Marker>
        </MapContainer>
    )
}
