'use client';

import { Home, Map as MapIcon, Search, User, Menu } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-xl transition-transform group-hover:rotate-12">
              <Home className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter">
              Maple<span className="text-primary">Homes</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link href="#map" className="text-sm font-medium hover:text-primary transition-colors">Map Explore</Link>
            <Link href="#listings" className="text-sm font-medium hover:text-primary transition-colors">Listings</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" size={18} />
              <input 
                type="text" 
                placeholder="Search location..." 
                className="pl-10 pr-4 py-2 bg-secondary border-none rounded-full text-sm focus:ring-2 focus:ring-primary w-48 transition-all focus:w-64 outline-none"
              />
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-primary/20 active:scale-95 transition-all">
              Sign In
            </button>
          </div>

          <button className="md:hidden p-2 bg-secondary rounded-lg">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
