import React, { useState } from 'react';
import { 
  Sparkles, Menu as MenuIcon, X, Droplet, Flame, Snowflake, 
  Cookie, Martini, Fish, Headphones, Atom, Moon, Check, 
  Send, Instagram, Twitter 
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [reservationSubmitted, setReservationSubmitted] = useState(false);
  
  // Chat state
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Greetings. I am your virtual sommelier and culinary assistant. How may I guide your sensory experience tonight?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const menuItems = [
    { id: 1, title: "Liquid Emerald Sphere", category: "molecular", price: "$45", desc: "Clarified herbaceous consommé encapsulated in an edible calcium alginate membrane that bursts upon contact.", icon: <Droplet className="w-4 h-4 text-amber-400 mr-1.5" />, tag: "Spherification" },
    { id: 2, title: "Truffle Fog Wagyu A5", category: "signature", price: "$68", desc: "Japanese Wagyu cooked at low temperature for 36 hours, presented under an aromatic smoke dome infused with white truffle.", icon: <Flame className="w-4 h-4 text-amber-400 mr-1.5" />, tag: "Sous-vide 36h" },
    { id: 3, title: "Nitrogen Scallop Carpaccio", category: "molecular", price: "$52", desc: "Hokkaido scallops flash-frozen with liquid nitrogen, paired with sea urchin air emulsion and finger lime pearls.", icon: <Snowflake className="w-4 h-4 text-amber-400 mr-1.5" />, tag: "Cryo-Gastronomy" },
    { id: 4, title: "Deconstructed Black Forest", category: "desserts", price: "$32", desc: "Valrhona chocolate soil, kirsch aerosol, dehydrated morello cherries, and organic milk foam.", icon: <Cookie className="w-4 h-4 text-amber-400 mr-1.5" />, tag: "Deconstruction" },
    { id: 5, title: "Aether Nebula Elixir", category: "cocktails", price: "$26", desc: "Botanical gin, butterfly pea flower infusion, activated edible gold dust, and customized aromatic mist.", icon: <Martini className="w-4 h-4 text-amber-400 mr-1.5" />, tag: "Alchemy" },
    { id: 6, title: "Glazed Glacier Cod", category: "signature", price: "$58", desc: "Black cod marinated in Saikyo miso for 72 hours, served over plankton risotto emulsion and crispy squid ink coral.", icon: <Fish className="w-4 h-4 text-amber-400 mr-1.5" />, tag: "Marine Science" },
  ];

  const filteredMenu = activeFilter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  const handleReservation = (e) => {
    e.preventDefault();
    setReservationSubmitted(true);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const userMsg = inputMessage;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInputMessage('');

    setTimeout(() => {
      let botReply = "Our tasting menu features 12 multi-sensory courses. Would you like to reserve a table or learn more?";
      const lower = userMsg.toLowerCase();
      if(lower.includes('price') || lower.includes('cost') || lower.includes('menu')) {
        botReply = "Our experience courses range from $32 to $68 per creation, with full tasting menus available upon request.";
      } else if(lower.includes('wine') || lower.includes('drink') || lower.includes('cocktail')) {
        botReply = "Our Quantum Bar features bioluminescent elixirs and cellar wines selected to complement molecular chemistry.";
      } else if(lower.includes('book') || lower.includes('reserve')) {
        botReply = "You can instantly secure your experience using our reservation form below.";
      }
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 800);
  };

  return (
    <div className="bg-[#09090b] text-[#f4f4f5] font-sans selection:bg-amber-500 selection:text-black min-h-screen">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#18181b]/70 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl tracking-widest text-amber-400 font-bold drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]">AETHERIA</a>
          
          <div className="hidden md:flex items-center space-x-8 text-sm tracking-wider font-medium text-zinc-300">
            <a href="#concept" className="hover:text-amber-400 transition-colors">CONCEPT</a>
            <a href="#menu" className="hover:text-amber-400 transition-colors">EXPERIENCE MENU</a>
            <a href="#experience" className="hover:text-amber-400 transition-colors">LABORATORIES</a>
            <a href="#reservations" className="hover:text-amber-400 transition-colors">RESERVATIONS</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#reservations" className="hidden sm:inline-block px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs tracking-widest uppercase transition-all shadow-lg shadow-amber-500/20">
              Book a Table
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-zinc-300 hover:text-white text-xl">
              {mobileMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#18181b] border-b border-white/10 px-6 py-4 flex flex-col space-y-4">
            <a href="#concept" onClick={() => setMobileMenuOpen(false)} className="text-sm text-zinc-300 hover:text-amber-400">CONCEPT</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-sm text-zinc-300 hover:text-amber-400">EXPERIENCE MENU</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-sm text-zinc-300 hover:text-amber-400">LABORATORIES</a>
            <a href="#reservations" onClick={() => setMobileMenuOpen(false)} className="text-sm text-amber-400 font-semibold">RESERVATIONS</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/70 to-transparent z-10"></div>
          <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1920&auto=format&fit=crop" alt="Molecular Gastronomy" className="w-full h-full object-cover opacity-35 scale-105" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs tracking-[0.3em] uppercase mb-6 backdrop-blur-md">
            The Future of Fine Dining
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-none">
            Where Science <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Meets Emotion</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-base md:text-lg font-light mb-12 leading-relaxed">
            An immersive gastronomic journey defying laws of physics and flavor. Deconstructed textures, liquid nitrogen, and sonic pairings crafted for the senses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="#menu" className="w-full sm:w-auto px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs tracking-[0.2em] uppercase transition-all shadow-xl shadow-amber-500/20">
              Explore Menu
            </a>
            <a href="#concept" className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#18181b]/70 backdrop-blur border border-white/10 hover:bg-white/10 text-white font-semibold text-xs tracking-[0.2em] uppercase transition-all">
              Our Philosophy
            </a>
          </div>
        </div>
      </header>

      {/* Concept Section */}
      <section id="concept" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase block mb-3">Vanguard Manifesto</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Redefining the boundaries of culinary perception.
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-6">
              At Aetheria, cooking is not merely about combining ingredients; it is an exact science driven by creativity. We merge state-of-the-art laboratory techniques with ancestral aromas to evoke memories.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <span className="block font-serif text-3xl md:text-4xl font-bold text-amber-400 mb-1">12</span>
                <span className="text-xs text-zinc-500 tracking-wider uppercase">Courses</span>
              </div>
              <div>
                <span className="block font-serif text-3xl md:text-4xl font-bold text-amber-400 mb-1">-196°C</span>
                <span className="text-xs text-zinc-500 tracking-wider uppercase">Cryo-Prep</span>
              </div>
              <div>
                <span className="block font-serif text-3xl md:text-4xl font-bold text-amber-400 mb-1">100%</span>
                <span className="text-xs text-zinc-500 tracking-wider uppercase">Organic</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-[#18181b]/50 border border-white/5 aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop" alt="Culinary art" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-28 px-6 bg-zinc-950/60 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase block mb-3">Gastronomic Portfolio</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">The Experience Menu</h2>
            
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
              {['all', 'molecular', 'signature', 'desserts', 'cocktails'].map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setActiveFilter(cat)} 
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                    activeFilter === cat 
                      ? 'bg-amber-500 text-black' 
                      : 'bg-[#18181b]/70 border border-white/5 text-zinc-300 hover:text-white'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item) => (
              <div key={item.id} className="bg-[#18181b]/50 backdrop-blur border border-white/5 hover:border-amber-400/40 transition-all rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">{item.category}</span>
                    <span className="font-serif text-xl font-bold text-amber-200">{item.price}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500">
                  <span className="flex items-center">{item.icon} {item.tag}</span>
                  <span>Master Lab</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Labs Section */}
      <section id="experience" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase block mb-3">Immersive Spaces</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Sensory Laboratories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#18181b]/50 border border-white/5 rounded-2xl p-8">
            <Headphones className="text-amber-400 w-8 h-8 mb-6" />
            <h3 className="font-serif text-xl font-bold mb-3">Sonic Pairing Room</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Specific sound frequencies that alter taste perception, enhancing sweetness or reducing bitterness in real time.</p>
          </div>
          <div className="bg-[#18181b]/50 border border-white/5 rounded-2xl p-8">
            <Atom className="text-amber-400 w-8 h-8 mb-6" />
            <h3 className="font-serif text-xl font-bold mb-3">Cryogenic Bar Lab</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Watch master mixologists freeze botanical ingredients live using liquid nitrogen at sub-zero temperatures.</p>
          </div>
          <div className="bg-[#18181b]/50 border border-white/5 rounded-2xl p-8">
            <Moon className="text-amber-400 w-8 h-8 mb-6" />
            <h3 className="font-serif text-xl font-bold mb-3">Umbra Private Suite</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">An intimate dining room under dynamic ambient projections synchronized with each course of your tasting menu.</p>
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-28 px-6 bg-zinc-950/60 border-t border-white/5">
        <div className="max-w-4xl mx-auto bg-[#18181b]/70 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-14 relative">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase block mb-3">Secure Your Table</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Make a Reservation</h2>
          </div>

          {!reservationSubmitted ? (
            <form onSubmit={handleReservation} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-medium">Full Name</label>
                  <input type="text" required placeholder="Alexander Vance" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-medium">Email Address</label>
                  <input type="email" required placeholder="alexander@example.com" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-medium">Date</label>
                  <input type="date" required className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-medium">Time Slot</label>
                  <select className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400">
                    <option>20:00 (First Seating)</option>
                    <option>21:30 (Second Seating)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-medium">Guests</label>
                  <select className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400">
                    <option>1 Person</option>
                    <option defaultValue>2 Guests</option>
                    <option>4 Guests</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs tracking-[0.2em] uppercase transition-all shadow-lg shadow-amber-500/20">
                Confirm Reservation
              </button>
            </form>
          ) : (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-amber-500/20 border border-amber-500 rounded-full flex items-center justify-center mx-auto text-amber-400 text-2xl">
                <Check />
              </div>
              <h3 className="font-serif text-2xl font-bold">Reservation Confirmed</h3>
              <p className="text-zinc-400 text-sm max-w-md mx-auto">Thank you. Your seating at Aetheria has been successfully registered.</p>
              <button onClick={() => setReservationSubmitted(false)} className="px-6 py-2.5 rounded-full bg-[#18181b] border border-white/10 text-xs tracking-wider uppercase hover:bg-white/10 transition-all">Make Another Booking</button>
            </div>
          )}
        </div>
      </section>

      {/* AI Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={() => setChatOpen(!chatOpen)} className="w-14 h-14 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center shadow-xl transition-all text-xl cursor-pointer">
          <Sparkles />
        </button>
        
        {chatOpen && (
          <div className="absolute bottom-20 right-0 w-[350px] md:w-[380px] bg-[#18181b] backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-amber-500/30 flex flex-col h-[480px]">
            <div className="bg-zinc-900 px-5 py-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <h4 className="font-serif font-bold text-sm text-amber-300">Aetheria AI Sommelier</h4>
                <span className="text-[10px] text-zinc-400 tracking-wider">Powered by Gemini</span>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-zinc-400 hover:text-white"><X className="w-4 h-4" /></button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
              {messages.map((m, idx) => (
                <div key={idx} className={`p-3 rounded-xl max-w-[85%] ${m.sender === 'user' ? 'bg-amber-500/20 text-amber-200 ml-auto border border-amber-500/20' : 'bg-zinc-900 text-zinc-300 border border-white/5'}`}>
                  {m.text}
                </div>
              ))}
            </div>

            <div className="p-3 bg-zinc-900 border-t border-white/10 flex gap-2">
              <input 
                type="text" 
                value={inputMessage} 
                onChange={(e) => setInputMessage(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about menu, wine or pairings..." 
                className="flex-1 bg-zinc-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400" 
              />
              <button onClick={handleSendMessage} className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black rounded-xl font-semibold text-xs"><Send className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-serif text-lg tracking-widest text-amber-400 font-bold">AETHERIA</span>
          <p>© 2026 Aetheria Avant-Garde Gastronomy. All rights reserved.</p>
          <div className="flex space-x-6 text-zinc-400">
            <a href="#" className="hover:text-amber-400"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-amber-400"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}