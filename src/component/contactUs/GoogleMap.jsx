
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import React from 'react'

const mapStyles = {
    width: '100%',
    height: '50%',
};

function GoogleMap(props) {

        return (
            <Map
                google={props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            >
                <Marker position={{ lat: 48.00, lng: -122.00 }} />
            </Map>
        );
    }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDX-kpshbtLad_XG7uEKrQfY9IFTgmeaQk'
})(GoogleMap);
