import { Listing } from '@/types/listing';
import { Bed, Bath, MapPin, ChevronRight } from 'lucide-react';

interface PropertyCardProps {
  listing: Listing;
  onViewDetails?: () => void;
}

export default function PropertyCard({ listing, onViewDetails }: PropertyCardProps) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={listing.imageUrl} 
          alt={listing.description}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
          {listing.price}
        </div>
        <div className="absolute bottom-4 left-4 flex gap-2">
          <span className="bg-black/50 backdrop-blur-md text-white px-2 py-1 rounded text-xs">
            {listing.city}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex flex-col">
            <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
              {listing.city} Residence
            </h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
              <MapPin size={14} />
              <span>Greater {listing.city} Area</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-6 mb-4 border-y border-border py-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Bed size={18} className="text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-none">{listing.beds}</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Beds</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Bath size={18} className="text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-none">{listing.baths}</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Baths</span>
            </div>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-5">
          {listing.description}
        </p>
        
        <button 
          onClick={onViewDetails}
          className="w-full flex items-center justify-center gap-2 bg-secondary hover:bg-primary hover:text-white text-foreground font-bold py-3 rounded-xl transition-all duration-300 group/btn cursor-pointer"
        >
          View Details
          <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
