'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Listing } from '@/types/listing';
import { Bed, Bath, Home } from 'lucide-react';
import Image from 'next/image';

// Fix for default marker icons in Leaflet with Next.js
const customIcon = L.divIcon({
  html: `<div class="bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white transform hover:scale-110 transition-transform flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
  </div>`,
  className: 'custom-div-icon',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

interface MapProps {
  listings: Listing[];
  onViewDetails?: (listing: Listing) => void;
}

export default function Map({ listings, onViewDetails }: MapProps) {
  // Canada centroid approximately [56, -96]
  const center: [number, number] = [54, -96];
  const zoom = 4;

  return (
    <div className="h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-border bg-muted">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {listings.map((listing) => (
          <Marker 
            key={listing.id} 
            position={[listing.latitude, listing.longitude]} 
            icon={customIcon}
          >
            <Popup className="property-popup">
              <div className="flex flex-col w-full overflow-hidden">
                <div className="relative h-40 w-full">
                  <img 
                    src={listing.imageUrl} 
                    alt={listing.description}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-bold shadow-md">
                    {listing.price}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-base mb-1 text-foreground truncate">{listing.city}</h3>
                  <div className="flex gap-4 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Bed size={14} className="text-primary" /> {listing.beds} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={14} className="text-primary" /> {listing.baths} Baths
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                    {listing.description}
                  </p>
                  <button 
                    onClick={() => onViewDetails?.(listing)}
                    className="w-full bg-primary hover:bg-primary/90 text-white text-xs font-bold py-2 px-4 rounded transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
