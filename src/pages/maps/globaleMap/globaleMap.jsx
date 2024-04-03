import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle  } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useNavigate} from 'react-router-dom';


import './globaleMap.scss';

import BackFromMap from "../../components/backFromMap"

import hotels from '../../../../assets/icon/png/map/motels.png'
import transport from '../../../../assets/icon/png/map/taxi.png'
import airport from '../../../../assets/icon/png/map/airport.png'
import ecole from '../../../../assets/icon/png/map/ecole.png'
import hopital from '../../../../assets/icon/png/map/hopital.png'
import kiosk from '../../../../assets/icon/png/map/kiosk.png'
import pharmacie from '../../../../assets/icon/png/map/pharmacie.png'
import pompier from '../../../../assets/icon/png/map/pompier.png'
import restaurent from '../../../../assets/icon/png/map/restaurent.png'
import shop from '../../../../assets/icon/png/map/shop.png'
import station from '../../../../assets/icon/png/map/hopital.png'
import wc from '../../../../assets/icon/png/map/wc.png'

import data from './data.json';

function GlobaleMap() {
  const [position, setPosition] = useState([0, 0]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBasemap, setSelectedBasemap] = useState('relief'); 
  const [filteredPlaces, setFilteredPlaces] = useState([]); // Ajout de l'état local pour les lieux filtrés

  const navigate = useNavigate();

  const redirectToVisit = (index) => {
    navigate(`/visit/location/${index}`);
  };

  const handleClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  

  const hotelsIcon = new Icon({
    iconUrl : hotels,
    iconSize: [38, 38]
  })

  const transportIcon = new Icon({
    iconUrl : transport,
    iconSize: [38, 38]
  })

  const airportIcon = new Icon({
    iconUrl : airport,
    iconSize: [38, 38]
  })

  const ecoleIcon = new Icon({
    iconUrl : ecole,
    iconSize: [38, 38]
  })

  const hopitalIcon = new Icon({
    iconUrl : hopital,
    iconSize: [38, 38]
  })

  const kioskIcon = new Icon({
    iconUrl : kiosk,
    iconSize: [38, 38]
  })

  const pharmacieIcon = new Icon({
    iconUrl : pharmacie,
    iconSize: [38, 38]
  })

  const pompierIcon = new Icon({
    iconUrl : pompier,
    iconSize: [38, 38]
  })

  const restaurentIcon = new Icon({
    iconUrl : restaurent,
    iconSize: [38, 38]
  })

  const shopIcon = new Icon({
    iconUrl : shop,
    iconSize: [38, 38]
  })

  const stationIcon = new Icon({
    iconUrl : station,
    iconSize: [38, 38]
  })

  const wcIcon = new Icon({
    iconUrl : wc,
    iconSize: [38, 38]
  })

  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case 'TRANSPORT':
        return transportIcon;
      case 'AIRPORT':
        return airportIcon;
      case 'ARRET TAXI':
        return transportIcon;
      case 'HOTELS':
        return hotelsIcon;
      case 'ECOLE':
        return ecoleIcon;
      case 'HOPITALS':
        return hopitalIcon;
      case 'KIOSQUE':
        return kioskIcon;
      case 'PHARMACIE':
        return pharmacieIcon;
      case 'POMPIER':
        return pompierIcon;
      case 'RESTAURENT':
        return restaurentIcon;
      case 'BOUTIQUE':
        return shopIcon;
      case 'STATION SERVICE':
        return stationIcon;
      case 'TOILETTE PUBLIQUE':
        return wcIcon;
      default:
        return defaultIcon;
    }
  };

  const getIcon = (categoryName) => {
    switch (categoryName) {
      case 'TRANSPORT':
        return transport;
      case 'AIRPORT':
        return airport;
      case 'ARRET TAXI':
        return transport;
      case 'HOTELS':
        return hotels;
      case 'ECOLE':
        return ecole;
      case 'HOPITALS':
        return hopital;
      case 'KIOSQUE':
        return kiosk;
      case 'PHARMACIE':
        return pharmacie;
      case 'POMPIER':
        return pompier;
      case 'RESTAURENT':
        return restaurent;
      case 'BOUTIQUE':
        return shop;
      case 'STATION SERVICE':
        return station;
      case 'TOILETTE PUBLIQUE':
        return wc;
      default:
        return defaultIcon;
    }
  };
  


  const handleBasemapChange = (event) => {
    const selectedBasemap = event.target.value;
    setSelectedBasemap(selectedBasemap);
  };

  const basemapsDict = {
    detaillé: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    chaud: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
    sombre:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
    relief: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
  }

  useEffect(() => {
    const superModeEnabled = localStorage.getItem('supermode');

    if (superModeEnabled === 'true') {
      setSelectedBasemap('sombre');
    } else {
      setSelectedBasemap('relief');
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((location) => {
        setPosition([location.coords.latitude, location.coords.longitude]);
      });
    } else {
      console.log('La géolocalisation n\'est pas supportée par ce navigateur.');
    }
  }, []);

  return (
    <div>

       <MapContainer center={[-21.4422, 47.0845]} zoom={15} className='global-map'>
        <TileLayer
          url={basemapsDict[selectedBasemap]}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
         {position[0] !== 0 && ( 
          <Marker position={position}>
            <Popup>Votre position actuelle</Popup>
            <Circle center={position} radius={200} />
          </Marker>
        )}


        
        {data.categories.map((category) =>
          category.lieux.map((place, index) => (
            <Marker
              key={index}
              position={[place.latitude, place.longitude]}
              icon={getCategoryIcon(category.nom)}
            >
              <Popup>
                <div className='popup-map'>
                  <h2>{place.nom}</h2>
                  <p>{place.description}</p>
                  {category.nom === 'PHARMACIE' || category.nom === 'BOUTIQUE' ? (
                    <button>Marketplace</button>
                  ) : null}
                  {category.nom === 'HOTELS' ? (
                    <button>Réservation</button>
                  ) : null}
                  {category.nom === 'RESTAURENT' ? (
                    <button>MENU</button>
                  ) : null}
                  <button onClick={() => redirectToVisit(index)}>Visiter le lieu</button>
                </div>
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>

      <div className="float-info">
        {/* Dropdown pour sélectionner le basemap */}
      <div className="basemap-dropdown">
        <label htmlFor="basemap">Thème du carte: </label>
        <select id="basemap" value={selectedBasemap} onChange={handleBasemapChange}>
          {Object.keys(basemapsDict).map((basemapKey) => (
            <option key={basemapKey} value={basemapKey}>
              {basemapKey}
            </option>
          ))}
        </select>
      </div>
      <h1>Legendes</h1>
      <div className="legend">
        <BackFromMap />
        {data.categories.map((category, index) => (
          <span className='btn-categ' key={index} onClick={() => handleClick(category.nom)}>
            <img src={getIcon(category.nom)} alt="" width={"25px"} />
            <span>{category.nom}</span>
          </span>
        ))}
      </div>
      </div>
    </div>
  );
}

export default GlobaleMap;
