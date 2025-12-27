import { Home, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-xl">
                <Home className="text-white" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                Maple<span className="text-primary">Homes</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              MapleHomes Canada is a demo real estate platform showcasing next-level interactive mapping technologies and modern web design.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-all">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-all">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-all">
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Properties for Sale</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Interactive Map</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Our Communities</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">About the Demo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Buy Responsibly</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Mortgage Calculator</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>+1 (800) MAPLE-DEMO</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>hello@maplehomes.ca</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>123 Maple St, Toronto, ON</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 MapleHomes Canada. Built for portfolio demonstration.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary">Terms</Link>
            <Link href="#" className="hover:text-primary">Privacy</Link>
            <Link href="#" className="hover:text-primary">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
