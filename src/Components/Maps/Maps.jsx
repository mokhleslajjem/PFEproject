import "./Maps.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import LeafletRoutingMachine from "../Maps/LeafletRoutingMachine";
import { Icon, divIcon, point } from "leaflet";

// create custom icon
const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("../../asser/emplacement.png"),
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

// markers
const markers = [
    {
      geocode: [35.3, 10.71667],
      popUp: "El Jem, Tunisie",
      image: require("../../asser/eljem.jpg") // Replace with the actual path to the image
    },
    {
      geocode: [36.8529, 10.3217],
      popUp: "Carthage, Tunisie",
      image:  require("../../asser/carthage.jpg")  // Replace with the actual path to the image
    },
    {
      geocode: [36.4228, 9.2193],
      popUp: "Dougga, Tunisie",
      image: require("../../asser/dougga.jpg") // Replace with the actual path to the image
    },
    {
      geocode: [36.558668, 8.754987],
      popUp: "Bulla Regia, Tunisie",
      image:require("../../asser/bella.jpg")  // Replace with the actual path to the image
    }
  ];
  
  const Maps = () => {
      return (
          <MapContainer center={[36.8065, 10.1815]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
          >
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.geocode} icon={customIcon}>
                <Popup>
                  <div>
                    <img src={marker.image} alt={marker.popUp} style={{ width: "100px", height: "100px" }} />
                    <p>{marker.popUp}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
          <LeafletRoutingMachine />
        </MapContainer>
      );
  };

  export default Maps;
