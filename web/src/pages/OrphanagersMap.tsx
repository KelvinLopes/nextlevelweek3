import React from 'react';

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanage-map.css';

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
                center={[-19.978877,-44.0000944]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" > 
                <FiPlus size={32} color="fff" className="create-orphanage" />
            </Link>
        </div>
    );
}

export default OrphanageMap;