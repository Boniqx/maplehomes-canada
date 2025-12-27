import { ArrowRight, Search, Map as MapIcon, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onStartExploring?: () => void;
}

export default function Hero({ onStartExploring }: HeroProps) {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full border border-border animate-fade-in">
            <ShieldCheck size={16} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Certified Premium Listings</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
            Find your <span className="text-primary italic">dream home</span> <br /> across Canada.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Explore hundreds of properties visually on our interactive map. Whether you&apos;re searching in Vancouver, Toronto, Montreal, or anywhere in between, MapleHomes Canada brings listings to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <div className="relative w-full sm:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Region, City, or Zip Code" 
                className="w-full pl-12 pr-4 py-4 bg-white border border-border rounded-2xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-muted-foreground/60"
              />
            </div>
            <button 
              onClick={onStartExploring}
              className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:scale-95 transition-all cursor-pointer"
            >
              Start Exploring
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
            {[
              { label: 'Properties', value: '200+' },
              { label: 'Cities', value: '10+' },
              { label: 'Reviews', value: '4.9/5' },
              { label: 'Happy Users', value: '12k+' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center p-4 bg-background border border-border rounded-2xl shadow-sm">
                <span className="text-2xl font-black text-primary">{stat.value}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
