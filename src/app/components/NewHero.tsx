const imgMpcAikon1 = "https://firebasestorage.googleapis.com/v0/b/liberalartshub-20b63.firebasestorage.app/o/MPC%E3%80%80%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=0617606a-0a9c-46ca-8568-9d06f9b5487d";
const imgOgImage11 = "https://firebasestorage.googleapis.com/v0/b/liberalartshub-20b63.firebasestorage.app/o/OG%20Image%20(1).jpg?alt=media&token=8c7c8f4d-7c5e-4f1a-8f3d-7b5e9c8a4b2d";
const imgMitLogoSvg1 = "https://firebasestorage.googleapis.com/v0/b/liberalartshub-20b63.firebasestorage.app/o/MIT%20Logo%20SVG.png?alt=media&token=5e8f9a4c-7d6e-4f1a-8f3d-7b5e9c8a4b2d";
const imgUnnamed11 = "https://firebasestorage.googleapis.com/v0/b/liberalartshub-20b63.firebasestorage.app/o/Unnamed%20(1).jpg?alt=media&token=5e8f9a4c-7d6e-4f1a-8f3d-7b5e9c8a4b2d";
const imgNetflix2015LogoSvg1 = "https://firebasestorage.googleapis.com/v0/b/liberalartshub-20b63.firebasestorage.app/o/Netflix%202015%20Logo%20SVG.png?alt=media&token=5e8f9a4c-7d6e-4f1a-8f3d-7b5e9c8a4b2d";
const img4001X33371 = "https://firebasestorage.googleapis.com/v0/b/liberalartshub-20b63.firebasestorage.app/o/400x333.jpg?alt=media&token=5e8f9a4c-7d6e-4f1a-8f3d-7b5e9c8a4b2d";

export function NewHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Gradient Orbs */}
      <div className="absolute top-[247px] left-[1032px] w-[679px] h-[679px] opacity-60">
        <div className="absolute inset-[-44.18%]">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-[#0080FF] to-[#801D8D] blur-[150px]" />
        </div>
      </div>
      <div className="absolute top-[-339px] left-[-340px] w-[679px] h-[679px] opacity-60">
        <div className="absolute inset-[-44.18%]">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-[#19DBE9] to-[#801D8D] blur-[150px]" />
        </div>
      </div>

      <div className="container mx-auto px-8 py-20 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <h1 className="font-bold text-white text-[87px] leading-tight">
              誰もが選んだ場所で咲ける世界へ。
            </h1>
            
            <p className="text-white text-xl">
              好奇心が集まる場所
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.apple.com/jp/store?afid=p238%7CsKSMckWTz-dc_mtid_18707vxu38484_pcrid_687949372551_pgrid_13140806301_pntwk_g_pchan__pexid__&cid=aos-jp-kwgo-brand--slid---product-"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#dd307b] to-[#293fe3] text-white font-bold px-12 py-4 rounded-[53px] text-lg uppercase hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95 transition-all duration-300 text-center"
              >
                MPCに参加する
              </a>
              <a 
                href="https://drive.google.com/file/d/1bEZUvFEhI47pYibW2WF5P-zo9iKQsLQC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#dd307b] text-white font-bold px-12 py-4 rounded-[53px] text-lg uppercase hover:bg-white/10 active:scale-95 transition-all duration-300 text-center"
              >
                詳しく見る
              </a>
            </div>
          </div>

          {/* Right side - Robot Image */}
          <div className="relative flex justify-center">
            <img 
              src={imgMpcAikon1} 
              alt="MPC Robot" 
              className="w-full max-w-[551px] h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Powered by section */}
        <div className="mt-20">
          <p className="text-[rgba(255,255,255,0.56)] text-sm mb-6">Powered by</p>
          <div className="flex items-center gap-8 flex-wrap">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[34px] p-6 h-[91px] flex items-center justify-center">
              <img src={imgOgImage11} alt="Partner" className="h-[71px] w-auto" />
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[34px] p-6 h-[91px] flex items-center justify-center">
              <img src={imgMitLogoSvg1} alt="MIT" className="h-[71px] w-auto" />
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[34px] p-6 h-[91px] flex items-center justify-center">
              <img src={imgUnnamed11} alt="Partner" className="h-auto w-[166px]" />
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[34px] p-6 h-[91px] flex items-center justify-center">
              <img src={imgNetflix2015LogoSvg1} alt="Netflix" className="h-[71px] w-auto" />
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[34px] p-6 h-[91px] flex items-center justify-center">
              <img src={img4001X33371} alt="Partner" className="h-[92px] w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}