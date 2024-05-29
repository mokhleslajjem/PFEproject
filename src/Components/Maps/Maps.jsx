import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Maps.css'
import L from "leaflet";
import LeafletGeocoder from "./LeafletGeocoder";
import LeafletRoutingMachine from "./LeafletRoutingMachine";

const Maps = () => {
    const position = [36.8065, 10.1815]

    return (

        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <LeafletGeocoder /> */}
            <LeafletRoutingMachine />
        </MapContainer>
    );

};

let DefaultIcon = L.icon({
    iconUrl: "/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
})
L.Marker.prototype.options.icon = DefaultIcon;
export default Maps;