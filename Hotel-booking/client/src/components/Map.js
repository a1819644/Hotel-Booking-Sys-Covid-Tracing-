import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";

const WrappedMap = withScriptjs(withGoogleMap((props) => (
    <GoogleMap 
    default zoom ={10}
    defaultCenter={{lat:-34.9285, lng:138.6007}}
    />
)));
export default function Map(props) {

    return (
        <WrappedMap
            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&librarier=geometry,drawing,places&key=AIzaSyCi6hN_VL27fPKsbtEZ3S2478CzdkKdXCo'}
            loadingElement={<div style={{ height:"500px", width: "500px"}} />}
            containerElement={<div style={{ height:"500px", width: "500px"}} />}
            mapElement={<div style={{ height:"400px"}} />}
         />
    )
}