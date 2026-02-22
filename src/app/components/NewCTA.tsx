import { scrollToSection } from "@/app/utils/scroll";

export function NewCTA() {
  return (
    <section id="join" className="relative min-h-screen flex items-center justify-center py-20 bg-black overflow-hidden">
      {/* Multiple Gradient Orbs for spreading effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[600px] opacity-40 animate-pulse">
        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#0080FF] to-[#801D8D] blur-[150px]" />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[500px] opacity-30">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#dd307b] via-[#801D8D] to-[#293fe3] blur-[120px]" />
      </div>
      
      <div className="absolute top-1/4 left-1/4 w-[900px] h-[400px] opacity-25 animate-pulse" style={{ animationDelay: '1s' }}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#11FFC7] to-[#17CBF4] blur-[100px]" />
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 w-[900px] h-[400px] opacity-25 animate-pulse" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full rounded-full bg-gradient-to-tl from-[#B123CA] to-[#2F68DB] blur-[100px]" />
      </div>

      <div className="container mx-auto px-8 relative z-10 max-w-7xl text-center">
        <h2 className="font-bold text-white text-[70px] mb-12">
          さあ、始めよう
        </h2>
        
        <p className="text-white text-2xl mb-12 max-w-3xl mx-auto">
          あなたのアイデアを実現する旅を、今すぐ始めましょう。
        </p>
        
        <a 
          href="https://www.apple.com/jp/store?afid=p238%7CsKSMckWTz-dc_mtid_18707vxu38484_pcrid_687949372551_pgrid_13140806301_pntwk_g_pchan__pexid__&cid=aos-jp-kwgo-brand--slid---product-"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-[#dd307b] to-[#293fe3] text-white font-bold px-12 py-4 rounded-[53px] text-lg uppercase hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95 transition-all duration-300"
        >
          MPCに参加する
        </a>
      </div>
    </section>
  );
}