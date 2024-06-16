import React, { useEffect } from 'react';
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
import L from "leaflet";

const LeafletRoutingMachine = () => {
    const map = useMap();
    let DefaultIcon = L.icon({
        iconUrl: "/marche-a-pied-image-animee-0006.gif",
        iconSize: [60, 60],
    });

    useEffect(() => {
        if (!map) return; // Assurez-vous que la carte est initialisée

        var marker1 = L.marker([36.8065, 10.1815], { icon: DefaultIcon }).addTo(map);

        map.on("click", function (e) {
            const { latlng } = e;
            if (!latlng) return; // Assurez-vous que les coordonnées sont valides

            L.marker([latlng.lat, latlng.lng]).addTo(map);
            L.Routing.control({
                waypoints: [
                    L.latLng(36.8065, 10.1815),
                    L.latLng(latlng.lat, latlng.lng),
                ],
                lineOptions: {
                    styles: [
                        {
                            color: "blue",
                            weight: 4,
                            opacity: 0.7,
                        },
                    ],
                },
                routeWhileDragging: false,
                geocoder: L.Control.Geocoder.nominatim(),
                addWaypoints: false,
                draggableWaypoints: false,
                fitSelectedRoutes: true,
                showAlternatives: true,
            })
                .on("routesfound", function (e) {
                    e.routes[0].coordinates.forEach((c, i) => {
                        setTimeout(() => {
                            marker1.setLatLng([c.lat, c.lng]);
                        }, 100 * i);
                    });
                })
                .addTo(map);
        });
    }, [map]);

    return null;
};


let DefaultIcon = L.icon({
    iconUrl: "/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  L.Marker.prototype.options.icon = DefaultIcon;
  
export default LeafletRoutingMachine;
