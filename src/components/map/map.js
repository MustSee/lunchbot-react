import React from 'react';
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import style from './style.json';

console.log(style);


export const MyMapComponent = compose(
    withProps({
        googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBtTZVLHUDCLukR0VwUg2Jujy7IHKV8FT0&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh`, width:`50%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withStateHandlers(()=>({
        isOpen : false
    }), {
        onToggleOpen : ({ isOpen }) => () =>({
            isOpen : !isOpen
        })
    }),
    withScriptjs,
    withGoogleMap
)((props) => {


    const markers = [];

    props.spots.map((element, index) => {
        return markers.push(
            <Marker key={index}
                    position={{ lat : parseFloat(element.positionLatitude), lng: parseFloat(element.positionLongitude) }}
                    onClick={props.onToggleOpen}>

                {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
                    <p>LOLO</p>
                </InfoWindow>}

            </Marker>
        )
    });

    return (
        <GoogleMap
            defaultZoom={17}
            defaultCenter={{ lat: 48.834016, lng: 2.236963 }}
            // Map styling here
            defaultOptions={{styles : style}}
        >

            {markers}

        </GoogleMap>
    )
});