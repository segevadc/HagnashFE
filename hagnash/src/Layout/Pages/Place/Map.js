import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({text}) => <div>{text}</div>;

const MAP = "מפה";

export const Map = () => {
    return (
        <div className='map'>
            <h2>{MAP}</h2>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDgU31uqyBgITNn2IsP7YIxkme264SLET4" }}
                defaultCenter={{lat: 59.95, lng: 30.33}}
                defaultZoom={11}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>

    )
}