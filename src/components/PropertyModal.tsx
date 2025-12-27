'use client';

import { Listing } from '@/types/listing';
import { X, Bed, Bath, MapPin, CheckCircle2, Calendar, ShieldCheck, Mail, Phone } from 'lucide-react';
import { useEffect } from 'react';

interface PropertyModalProps {
  listing: Listing | null;
  onClose: () => void;
}

export default function PropertyModal({ listing, onClose }: PropertyModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (listing) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [listing]);

  if (!listing) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-background w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white rounded-full transition-all"
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
          <img 
            src={listing.imageUrl} 
            alt={listing.description}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
              {listing.price}
            </span>
            <span className="bg-white/90 backdrop-blur-md text-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
              {listing.city}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                <ShieldCheck size={16} />
                Verified Exclusive Listing
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Modern {listing.city} Estate
              </h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} />
                <span>123 Maple Avenue, {listing.city}, Canada</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-border">
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground text-xs uppercase tracking-widest font-bold">Bedrooms</span>
                <div className="flex items-center gap-2 font-black text-xl">
                  <Bed className="text-primary" size={20} />
                  {listing.beds}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground text-xs uppercase tracking-widest font-bold">Bathrooms</span>
                <div className="flex items-center gap-2 font-black text-xl">
                  <Bath className="text-primary" size={20} />
                  {listing.baths}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground text-xs uppercase tracking-widest font-bold">Area</span>
                <div className="flex items-center gap-2 font-black text-xl">
                  <Calendar className="text-primary" size={20} />
                  2,450 <span className="text-sm font-normal text-muted-foreground ml-1">sqft</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground text-xs uppercase tracking-widest font-bold">Built</span>
                <div className="flex items-center gap-2 font-black text-xl">
                  <Calendar className="text-primary" size={20} />
                  2022
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-xl uppercase tracking-tight">Property Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {listing.description} This stunning property in the heart of {listing.city} offers the perfect blend of luxury and comfort. With premium finishes, expansive living spaces, and state-of-the-art amenities, this home is designed for the modern lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Smart Home System', 'Underfloor Heating', 'Professional Kitchen', 
                'Energy Efficient', 'Landscaped Garden', 'Double Garage'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all">
                <Mail size={20} />
                Contact Agent
              </button>
              <button className="flex-1 bg-secondary text-foreground py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-muted transition-all">
                <Phone size={20} />
                Call +1 (800) 123
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
