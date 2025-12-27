'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import PropertyModal from '@/components/PropertyModal';
import { Listing } from '@/types/listing';
import { Map as MapIcon, List as ListIcon } from 'lucide-react';

// Dynamically import Map with no SSR
const Map = dynamic(() => import('@/components/Map'), { 
  ssr: false,
  loading: () => (
    <div className="h-[600px] w-full rounded-2xl bg-muted animate-pulse flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <MapIcon size={48} className="text-muted-foreground opacity-20" />
        <p className="text-muted-foreground font-medium">Initializing Interactive Map...</p>
      </div>
    </div>
  )
});

export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  
  const mapSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/listings.json')
      .then(res => res.json())
      .then(data => {
        setListings(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading listings:', err);
        setLoading(false);
      });
  }, []);

  const scrollToMap = () => {
    mapSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenDetails = (listing: Listing) => {
    setSelectedListing(listing);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero onStartExploring={scrollToMap} />

      {/* Map Section */}
      <section id="map" ref={mapSectionRef} className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                <MapIcon size={16} />
                Visual Exploration
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                Interactive property map
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Click on any marker to view property details. Each home includes price, features, and a photo. Enjoy exploring the Canadian landscape.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                200 Active Listings
              </div>
            </div>
          </div>
          
          <Map listings={listings} onViewDetails={handleOpenDetails} />
        </div>
      </section>

      {/* Listings Grid */}
      <section id="listings" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                <ListIcon size={16} />
                Property Catalog
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                Featured listings
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              Showing <span className="text-foreground font-bold">{listings.length}</span> properties across Canada
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {loading ? (
              Array(8).fill(0).map((_, i) => (
                <div key={i} className="h-[450px] rounded-2xl bg-muted animate-pulse" />
              ))
            ) : (
              listings.map((listing) => (
                <PropertyCard 
                  key={listing.id} 
                  listing={listing} 
                  onViewDetails={() => handleOpenDetails(listing)}
                />
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />

      <PropertyModal 
        listing={selectedListing} 
        onClose={() => setSelectedListing(null)} 
      />
    </main>
  );
}
