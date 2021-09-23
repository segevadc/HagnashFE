import GoogleMapReact from 'google-map-react';
import {Icon, Popup} from "semantic-ui-react";
const Marker = ({text}) => <Popup trigger={<Icon name='map pin' color='red' size='large' />} position={'top center'} content={text} />;

const MAP = "מפה";

export const Map = ({lon, lat, name}) => {
    return (
        <div className='map'>
            <h2>{MAP}</h2>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDgU31uqyBgITNn2IsP7YIxkme264SLET4" }}
                defaultCenter={{lat: parseInt(lon), lng: parseInt(lat)}}
                defaultZoom={11}
            >
                <Marker
                    lat={parseInt(lon)}
                    lng={parseInt(lat)}
                    text={name}
                />
            </GoogleMapReact>
        </div>

    )
}