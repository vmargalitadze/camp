'use client';
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';
const iconUrl =
  'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png';
const markerIcon = icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});

import { findCountry } from '@/utils/countries';
import CountryNames from '../card/CountryNames';
import Title from './Title';

function PropertyMap({ countryCode }: { countryCode: string }) {
    const defaultLocation = [41.643414, 41.639900] as [number, number];
    const location = findCountry(countryCode)?.location as [number, number];
  return (
   <div className="mt-4">
    <div className="mb-4">
    <Title text='Where you will be stay ? ' />
    <CountryNames countryCode={countryCode} />
    </div>
    <MapContainer center={location || defaultLocation} zoom={7} scrollWheelZoom={false} zoomControl={false} className='h-[50vh] rounded-lg relative z-0 ' >
    <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <ZoomControl position='bottomright' />
        <Marker
          position={location || defaultLocation}
          icon={markerIcon}
        ></Marker>
    </MapContainer>
    </div>
  )
}

export default PropertyMap