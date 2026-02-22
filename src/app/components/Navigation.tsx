import { scrollToSection } from "@/app/utils/scroll";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="container mx-auto flex items-center justify-between max-w-7xl">
        
        {/* Logo with Image */}
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-4 hover:opacity-80 transition-opacity"
        >
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/liberalartshub-20b63.firebasestorage.app/o/MPC%E3%80%80%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%20(1)%20(1).png?alt=media&token=c301758c-777c-4415-bcd0-a40501b316a3"
            alt="MPC Logo"
            className="w-14 h-14 object-contain"
          />
          <span className="font-bold text-white text-xl">MPC</span>
        </button>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('join')}
            className="text-white text-lg hover:text-purple-400 transition-colors"
          >
            Join Us
          </button>
          <button 
            onClick={() => scrollToSection('events')}
            className="text-white text-lg hover:text-purple-400 transition-colors"
          >
            Events
          </button>
          <button 
            onClick={() => scrollToSection('mission')}
            className="text-white text-lg hover:text-purple-400 transition-colors"
          >
            Mission
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white text-lg hover:text-purple-400 transition-colors"
          >
            FAQ
          </button>
        </div>
      </div>
    </nav>
  );
}