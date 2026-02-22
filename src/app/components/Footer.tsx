export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer id="contact" className="relative py-16 bg-black border-t border-white/10">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              
              <span className="font-bold text-white text-xl">MPC</span>
            </div>
            <p className="text-white/60 text-sm">
              誰もが選んだ場所で咲ける世界へ。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('mission')}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  ミッション
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('NewHero')}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  イベント情報
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('members')}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  メンバー
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">お問い合わせ</h3>
            <p className="text-white/60 text-sm">
              contact@mpc.com
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © 2025 Mita Pioneer Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}