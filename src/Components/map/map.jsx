import { height, width } from "@mui/system";
import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { mapOptions} from "./mapConfiguration"

const map = (props) => {
    const{isLoaded} =props;
    const containerStyle = {
        width: "100vw",
        height: "100vh",
    };
    const center = {
        lat: 30.3165,
        lng: 78.0322,
    };

    const anotherMarker ={
        lat: 30.2559,
        lng: 78.0972,
    };
    const markers= [
        {
            name: "location-1",
            location:{
                lat: 30.4598,
                lng: 78.0644,
            },
        },
        {
            name: "location-2",
            location:{
                lat: 30.1951,
                lng: 78.1921,
            },
        },
        {
            name: "location-3",
            location:{
                lat: 30.2553,
                lng: 78.0972,
            },
        },
        {
            name: "location-4",
            location:{
                lat: 30.2553,
                lng: 78.0972,
            },
        },

    ];

   
    
    return (  isLoaded &&(
       <> 
        <GoogleMap 
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >    
        {
            markers.map((marker) => {
                return (
                    <div key={marker.name} >
                        <marker position={marker.location} />

                    </div>
                );
            })
        }


        </GoogleMap>
    </>
    )
    
    );
};
export default map;