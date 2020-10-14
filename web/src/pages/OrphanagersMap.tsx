import React from 'react';

import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';
import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanage-map.css';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor : [29, 68],
    popupAnchor: [178, 2]
})

function OrphanageMap(){ 
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={ mapMarkerImg } alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong> Minas Gerais </strong>
                    <strong> Belo Horizonte </strong> 
                </footer>

            </aside>

            <Map 
                center={[-19.9206833,-43.9462256]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker 
                    icon={mapIcon}
                    position={[-19.9206833,-43.9462256]}
                >
                    <Popup 
                        className="map-popup"
                        closeButton={false}
                        minWidth={248}
                        maxWidth={248}
                    >
                        Lar das meninas

                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#fff" />
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/orphanages/create" > 
                <FiPlus size={32} color="fff" className="create-orphanage" />
            </Link>
        </div>
    );
}

export default OrphanageMap;