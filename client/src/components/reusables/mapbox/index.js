//Reference: https://blog.mapbox.com/mapbox-gl-js-react-764da6cc074a
import React from 'react'
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl'
//import {MAPBOX_TOKEN} from '../../../configuration/config';
import {colors} from '../../../globals'
mapboxgl.accessToken = "pk.eyJ1IjoiZWQweWFoc2thIiwiYSI6ImNqeWhsaThzNjAwdzMzaGp4dGIzNWdoNXMifQ.4b4QnTCrMT1ZgIE_-mUoCg";

const StyledMapContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    box-shadow: 0 0 8px 2px ${colors.light_gray};
    .stats {
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px;
        font-family: Roboto;
        background: rgb(255,255,255,0.5);
        border-radius: 25px;
        color:${colors.font_color}

    }
    .mapbox-wrapper{
        height: 100%;
    }
`

class Map extends React.Component {

    constructor() {
        super();
        this.state = {
            lng: -123.2811121,
            lat: 44.5649175,
            zoom: 15.5
        };
        }

        componentDidMount() {
        const { lng, lat } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [lng, lat],
            zoom: 15.5,
            pitch: 45,
            bearing: -17.6,
            antialias: true
        });

        map.on('move', () => {
            const { lng, lat } = map.getCenter();

            this.setState({
            lng: lng.toFixed(4),
            lat: lat.toFixed(4),
            zoom: map.getZoom().toFixed(2)
            });
        });
        map.on('load', function() {
            // Insert the layer beneath any symbol layer.
            var layers = map.getStyle().layers;
             
            var labelLayerId;
            for (var i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
            }
            }
             
            map.addLayer({
            'id': '3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 10,
            'paint': {
            'fill-extrusion-color': '#aaa',
             
            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
            "interpolate", ["linear"], ["zoom"],
            15, 0,
            15.05, ["get", "height"]
            ],
            'fill-extrusion-base': [
            "interpolate", ["linear"], ["zoom"],
            15, 0,
            15.05, ["get", "min_height"]
            ],
            'fill-extrusion-opacity': .6
            }
            }, labelLayerId);
            });
        }

        render() {
        const { lng, lat, zoom } = this.state;

        return (
            <StyledMapContainer>
            <div ref={el => this.mapContainer = el} className="mapbox-wrapper" />
            <div className="stats inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
                <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
            </div>
            </StyledMapContainer>
        );
        }
}

export default Map