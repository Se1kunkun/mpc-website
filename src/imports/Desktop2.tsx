// TODO: Replace these paths with actual image file locations
const imgRectangle1 = "";
const imgOgImage11 = "";
const imgPerson46477600X6001Photoroom1 = "";
const imgMpcAikon1 = "";
const imgMitLogoSvg1 = "";
const imgUnnamed11 = "";
const imgNetflix2015LogoSvg1 = "";
const img4001X33371 = "";

function NavBar() {
  return (
    <div className="absolute contents left-[112px] top-[30px]" data-name="NavBar">
      <div className="absolute h-[54px] left-[112px] top-[30px] w-[56px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <p className="absolute css-4hzbpn font-['Outfit:Bold',sans-serif] font-bold leading-[normal] left-[188px] text-[20px] text-white top-[45px] w-[55px]">{`MPC                                                                                                                                                                                                `}</p>
      <p className="absolute css-ew64yg font-['Outfit:Regular',sans-serif] font-normal leading-[normal] left-[879px] text-[20px] text-white top-[45px]">Join US</p>
      <p className="absolute css-ew64yg font-['Outfit:Regular',sans-serif] font-normal leading-[normal] left-[993px] text-[20px] text-white top-[45px]">Events</p>
      <p className="absolute css-ew64yg font-['Outfit:Regular',sans-serif] font-normal leading-[normal] left-[1214px] text-[20px] text-white top-[45px]">{`F&Q`}</p>
      <p className="absolute css-ew64yg font-['Outfit:Regular',sans-serif] font-normal leading-[normal] left-[1100px] text-[20px] text-white top-[45px]">Mission</p>
    </div>
  );
}

function Mask() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[34px]" data-name="Shape" />
    </div>
  );
}

function Blur() {
  return <div className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] blur-[20px] inset-[31px_26px_21px_26px] mix-blend-hard-light rounded-[34px]" data-name="Blur" />;
}

function Shadow() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Mask />
      <Blur />
    </div>
  );
}

function Fill() {
  return (
    <div className="absolute inset-0 rounded-[34px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[34px]">
        <div className="absolute bg-[#262626] inset-0 mix-blend-color-dodge rounded-[34px]" />
        <div className="absolute bg-[rgba(91,93,97,0.7)] inset-0 rounded-[34px]" />
      </div>
    </div>
  );
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[34px]" data-name="Glass Effect" />;
}

function LiquidGlassRegularLarge() {
  return (
    <div className="absolute h-[91px] left-[187px] top-[741px] w-[1065px]" data-name="Liquid Glass - Regular - Large">
      <Shadow />
      <Fill />
      <GlassEffect />
    </div>
  );
}

function OgImage() {
  return (
    <div className="absolute h-[71px] left-[256px] top-[751px] w-[136px]" data-name="og_image (1) 1">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOgImage11} />
    </div>
  );
}

function Mask1() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[34px]" data-name="Shape" />
    </div>
  );
}

function Blur1() {
  return <div className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] blur-[20px] inset-[31px_26px_21px_26px] mix-blend-hard-light rounded-[34px]" data-name="Blur" />;
}

function Shadow1() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Mask1 />
      <Blur1 />
    </div>
  );
}

function Fill1() {
  return (
    <div className="absolute inset-0 rounded-[34px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[34px]">
        <div className="absolute bg-[#262626] inset-0 mix-blend-color-dodge rounded-[34px]" />
        <div className="absolute bg-[rgba(250,250,250,0.7)] inset-0 rounded-[34px]" />
      </div>
    </div>
  );
}

function GlassEffect1() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[34px]" data-name="Glass Effect" />;
}

function LiquidGlassRegularLarge1() {
  return (
    <div className="absolute h-[457px] left-[187px] top-[2154px] w-[505px]" data-name="Liquid Glass - Regular - Large">
      <Shadow1 />
      <Fill1 />
      <GlassEffect1 />
    </div>
  );
}

function Mask2() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[34px]" data-name="Shape" />
    </div>
  );
}

function Blur2() {
  return <div className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] blur-[20px] inset-[31px_26px_21px_26px] mix-blend-hard-light rounded-[34px]" data-name="Blur" />;
}

function Shadow2() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Mask2 />
      <Blur2 />
    </div>
  );
}

function Fill2() {
  return (
    <div className="absolute inset-0 rounded-[34px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[34px]">
        <div className="absolute bg-[#262626] inset-0 mix-blend-color-dodge rounded-[34px]" />
        <div className="absolute bg-[rgba(250,250,250,0.7)] inset-0 rounded-[34px]" />
      </div>
    </div>
  );
}

function GlassEffect2() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[34px]" data-name="Glass Effect" />;
}

function LiquidGlassRegularLarge2() {
  return (
    <div className="absolute h-[457px] left-[118px] top-[3018px] w-[410px]" data-name="Liquid Glass - Regular - Large">
      <Shadow2 />
      <Fill2 />
      <GlassEffect2 />
    </div>
  );
}

function Mask3() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[34px]" data-name="Shape" />
    </div>
  );
}

function Blur3() {
  return <div className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] blur-[20px] inset-[31px_26px_21px_26px] mix-blend-hard-light rounded-[34px]" data-name="Blur" />;
}

function Shadow3() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Mask3 />
      <Blur3 />
    </div>
  );
}

function Fill3() {
  return (
    <div className="absolute inset-0 rounded-[34px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[34px]">
        <div className="absolute bg-[#262626] inset-0 mix-blend-color-dodge rounded-[34px]" />
        <div className="absolute bg-[rgba(250,250,250,0.7)] inset-0 rounded-[34px]" />
      </div>
    </div>
  );
}

function GlassEffect3() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[34px]" data-name="Glass Effect" />;
}

function LiquidGlassRegularLarge3() {
  return (
    <div className="absolute h-[457px] left-[593px] top-[3018px] w-[410px]" data-name="Liquid Glass - Regular - Large">
      <Shadow3 />
      <Fill3 />
      <GlassEffect3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[498px] top-[2982px]">
      <div className="absolute left-[498px] size-[600px] top-[2982px]" data-name="person_46477-600x600 (1)-Photoroom 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPerson46477600X6001Photoroom1} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[23px] top-[2974px]">
      <div className="absolute left-[23px] size-[600px] top-[2974px]" data-name="person_46477-600x600 (1)-Photoroom 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPerson46477600X6001Photoroom1} />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[159px] top-[4138px]">
      <div className="absolute bg-[#dedede] h-[479px] left-[159px] rounded-[30px] top-[4138px] w-[357px]" />
      <div className="absolute bg-[#dedede] h-[479px] left-[539px] rounded-[30px] top-[4138px] w-[357px]" />
      <div className="absolute bg-[#dedede] h-[479px] left-[919px] rounded-[30px] top-[4138px] w-[357px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[161px] top-[4645px]">
      <div className="absolute bg-[#dedede] h-[479px] left-[161px] rounded-[30px] top-[4645px] w-[357px]" />
      <div className="absolute bg-[#dedede] h-[479px] left-[541px] rounded-[30px] top-[4645px] w-[357px]" />
      <div className="absolute bg-[#dedede] h-[479px] left-[921px] rounded-[30px] top-[4645px] w-[357px]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[159px] top-[4138px]">
      <Group3 />
      <Group4 />
    </div>
  );
}

function Mask4() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[34px]" data-name="Shape" />
    </div>
  );
}

function Blur4() {
  return <div className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] blur-[20px] inset-[31px_26px_21px_26px] mix-blend-hard-light rounded-[34px]" data-name="Blur" />;
}

function Shadow4() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Mask4 />
      <Blur4 />
    </div>
  );
}

function Fill4() {
  return (
    <div className="absolute inset-0 rounded-[34px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[34px]">
        <div className="absolute bg-[#262626] inset-0 mix-blend-color-dodge rounded-[34px]" />
        <div className="absolute bg-[rgba(250,250,250,0.7)] inset-0 rounded-[34px]" />
      </div>
    </div>
  );
}

function GlassEffect4() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[34px]" data-name="Glass Effect" />;
}

function LiquidGlassRegularLarge4() {
  return (
    <div className="absolute h-[457px] left-[1068px] top-[3018px] w-[410px]" data-name="Liquid Glass - Regular - Large">
      <Shadow4 />
      <Fill4 />
      <GlassEffect4 />
    </div>
  );
}

function Mask5() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[34px]" data-name="Shape" />
    </div>
  );
}

function Blur5() {
  return <div className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] blur-[20px] inset-[31px_26px_21px_26px] mix-blend-hard-light rounded-[34px]" data-name="Blur" />;
}

function Shadow5() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Mask5 />
      <Blur5 />
    </div>
  );
}

function Fill5() {
  return (
    <div className="absolute inset-0 rounded-[34px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[34px]">
        <div className="absolute bg-[#262626] inset-0 mix-blend-color-dodge rounded-[34px]" />
        <div className="absolute bg-[rgba(250,250,250,0.7)] inset-0 rounded-[34px]" />
      </div>
    </div>
  );
}

function GlassEffect5() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[34px]" data-name="Glass Effect" />;
}

function LiquidGlassRegularLarge5() {
  return (
    <div className="absolute h-[457px] left-[750px] top-[2154px] w-[505px]" data-name="Liquid Glass - Regular - Large">
      <Shadow5 />
      <Fill5 />
      <GlassEffect5 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[973px] top-[2982px]">
      <div className="absolute left-[973px] size-[600px] top-[2982px]" data-name="person_46477-600x600 (1)-Photoroom 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPerson46477600X6001Photoroom1} />
      </div>
    </div>
  );
}

function Mask6() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[34px]" data-name="Shape" />
    </div>
  );
}

function Blur6() {
  return <div className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] blur-[20px] inset-[31px_26px_21px_26px] mix-blend-hard-light rounded-[34px]" data-name="Blur" />;
}

function Shadow6() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Mask6 />
      <Blur6 />
    </div>
  );
}

function Fill6() {
  return (
    <div className="absolute inset-0 rounded-[34px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[34px]">
        <div className="absolute bg-[#262626] inset-0 mix-blend-color-dodge rounded-[34px]" />
        <div className="absolute bg-[rgba(250,250,250,0.7)] inset-0 rounded-[34px]" />
      </div>
    </div>
  );
}

function GlassEffect6() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[34px]" data-name="Glass Effect" />;
}

function LiquidGlassRegularLarge6() {
  return (
    <div className="absolute h-[457px] right-[1387px] top-[3018px] w-[399px]" data-name="Liquid Glass - Regular - Large">
      <Shadow6 />
      <Fill6 />
      <GlassEffect6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[64px] left-[600px] overflow-clip top-[6147px] w-[240px]">
      <div className="absolute bg-gradient-to-r from-[#dd307b] h-[64px] left-0 rounded-[53px] to-[#293fe3] top-0 w-[240px]" />
      <p className="absolute css-ew64yg font-['Outfit:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[55px] text-[18px] text-white top-[21px] uppercase">MPCに参加する</p>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-black relative size-full" data-name="Desktop - 2">
      <div className="absolute left-[1032px] size-[679px] top-[247px]">
        <div className="absolute inset-[-44.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1279 1279">
            <g filter="url(#filter0_f_17_230)" id="Ellipse 1">
              <circle cx="639.5" cy="639.5" fill="url(#paint0_linear_17_230)" r="339.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1279" id="filter0_f_17_230" width="1279" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_17_230" stdDeviation="150" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_230" x1="639.5" x2="639.5" y1="300" y2="979">
                <stop stopColor="#0080FF" />
                <stop offset="0.9998" stopColor="#801D8D" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[-340px] size-[679px] top-[-339px]">
        <div className="absolute inset-[-44.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1279 1279">
            <g filter="url(#filter0_f_17_226)" id="Ellipse 2">
              <circle cx="639.5" cy="639.5" fill="url(#paint0_linear_17_226)" r="339.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1279" id="filter0_f_17_226" width="1279" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_17_226" stdDeviation="150" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_226" x1="639.5" x2="639.5" y1="300" y2="979">
                <stop stopColor="#0080FF" />
                <stop offset="0.0001" stopColor="#19DBE9" />
                <stop offset="0.9998" stopColor="#801D8D" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <NavBar />
      <p className="absolute css-ew64yg font-['Outfit:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] left-[188px] text-[20px] text-white top-[510px]">あなたのビジョンを形にしましょう。</p>
      <div className="absolute h-[451px] left-[709px] top-[192px] w-[551px]" data-name="MPC aikon 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMpcAikon1} />
      </div>
      <p className="absolute capitalize css-4hzbpn font-['Outfit:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[188px] text-[87px] text-white top-[159px] w-[540px]">誰もが選んだ場所で咲ける世界へ。</p>
      <div className="absolute bg-gradient-to-r from-[#dd307b] h-[64px] left-[188px] rounded-[53px] to-[#293fe3] top-[586px] w-[240px]" />
      <p className="absolute css-ew64yg font-['Outfit:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[243px] text-[18px] text-white top-[607px] uppercase">MPCに参加する</p>
      <div className="absolute border border-[#dd307b] border-solid h-[64px] left-[458px] rounded-[53px] top-[586px] w-[240px]" />
      <p className="absolute css-ew64yg font-['Outfit:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[533px] text-[18px] text-white top-[607px] uppercase">詳しく見る</p>
      <div className="absolute h-[79px] left-[188px] top-[2757px] w-[1065px]" />
      <LiquidGlassRegularLarge />
      <div className="absolute left-[-340px] size-[679px] top-[904px]">
        <div className="absolute inset-[-44.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1279 1279">
            <g filter="url(#filter0_f_17_222)" id="Ellipse 3">
              <circle cx="639.5" cy="639.5" fill="url(#paint0_linear_17_222)" r="339.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1279" id="filter0_f_17_222" width="1279" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_17_222" stdDeviation="150" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_222" x1="639.5" x2="639.5" y1="300" y2="979">
                <stop offset="0.000200033" stopColor="#801D8D" />
                <stop offset="1" stopColor="#2487E9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[-340px] size-[679px] top-[1922px]">
        <div className="absolute inset-[-44.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1279 1279">
            <g filter="url(#filter0_f_17_230)" id="Ellipse 1">
              <circle cx="639.5" cy="639.5" fill="url(#paint0_linear_17_230)" r="339.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1279" id="filter0_f_17_230" width="1279" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_17_230" stdDeviation="150" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_230" x1="639.5" x2="639.5" y1="300" y2="979">
                <stop stopColor="#0080FF" />
                <stop offset="0.9998" stopColor="#801D8D" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[-221px] size-[679px] top-[4583px]">
        <div className="absolute inset-[-44.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1279 1279">
            <g filter="url(#filter0_f_17_230)" id="Ellipse 1">
              <circle cx="639.5" cy="639.5" fill="url(#paint0_linear_17_230)" r="339.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1279" id="filter0_f_17_230" width="1279" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_17_230" stdDeviation="150" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_230" x1="639.5" x2="639.5" y1="300" y2="979">
                <stop stopColor="#0080FF" />
                <stop offset="0.9998" stopColor="#801D8D" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[679px] left-[-91px] top-[5645px] w-[1602px]">
        <div className="absolute inset-[-44.18%_-18.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2202 1279">
            <g filter="url(#filter0_f_17_220)" id="Ellipse 10">
              <ellipse cx="1101" cy="639.5" fill="url(#paint0_linear_17_220)" rx="801" ry="339.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1279" id="filter0_f_17_220" width="2202" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_17_220" stdDeviation="150" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_220" x1="1101" x2="1101" y1="300" y2="979">
                <stop stopColor="#0080FF" />
                <stop offset="0.9998" stopColor="#801D8D" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[1044px] size-[679px] top-[4165px]">
        <div className="absolute inset-[-44.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1279 1279">
            <g filter="url(#filter0_f_17_230)" id="Ellipse 1">
              <circle cx="639.5" cy="639.5" fill="url(#paint0_linear_17_230)" r="339.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1279" id="filter0_f_17_230" width="1279" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_17_230" stdDeviation="150" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_230" x1="639.5" x2="639.5" y1="300" y2="979">
                <stop stopColor="#0080FF" />
                <stop offset="0.9998" stopColor="#801D8D" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute css-ew64yg font-['Outfit:Thin',sans-serif] font-thin leading-[normal] left-[211px] text-[17px] text-[rgba(255,255,255,0.56)] top-[720px]">Powered by</p>
      <div className="absolute left-[1098px] size-[679px] top-[2179px]">
        <div className="absolute inset-[-44.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1279 1279">
            <g filter="url(#filter0_f_17_228)" id="Ellipse 6">
              <circle cx="639.5" cy="639.5" fill="url(#paint0_linear_17_228)" r="339.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1279" id="filter0_f_17_228" width="1279" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_17_228" stdDeviation="150" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_228" x1="639.5" x2="639.5" y1="300" y2="979">
                <stop stopColor="#11FFC7" />
                <stop offset="1" stopColor="#17CBF4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[312px] left-[33px] top-[3386px] w-[1370px]">
        <div className="absolute inset-[-96.15%_-21.9%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1970 912">
            <g filter="url(#filter0_f_17_224)" id="Ellipse 7">
              <ellipse cx="985" cy="456" fill="url(#paint0_linear_17_224)" rx="685" ry="156" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="912" id="filter0_f_17_224" width="1970" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_17_224" stdDeviation="150" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_224" x1="1029" x2="1032.5" y1="356.5" y2="587">
                <stop stopColor="#B123CA" />
                <stop offset="1" stopColor="#2F68DB" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute css-4hzbpn font-['Outfit:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold h-[598px] leading-[normal] left-[188px] text-[70px] text-white top-[1067px] w-[1065px]">MPCの目的</p>
      <p className="absolute css-ew64yg font-['Outfit:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[187px] text-[70px] text-white top-[1927px]">活動内容</p>
      <p className="absolute css-ew64yg font-['Outfit:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[188px] text-[70px] text-white top-[2858px]">メンバーの声</p>
      <p className="absolute css-ew64yg font-['Outfit:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[188px] text-[70px] text-white top-[3966px]">メンバー紹介</p>
      <div className="absolute font-['Outfit:Bold','Noto_Sans_JP:Medium',sans-serif] font-bold h-[598px] leading-[normal] left-[185px] text-[0px] text-[42px] text-white top-[1304px] w-[1065px]">
        <p className="css-4hzbpn font-['Outfit:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium mb-0">
          私たちは、「何かしたいことはあるけど何から始めたらわからない」といった
          <span className="bg-clip-text bg-gradient-to-r from-[#2326ca] from-[48.779%] to-[#a72fdb] to-[56.995%]" style={{ WebkitTextFillColor: "transparent" }}>
            ビジョン
          </span>
          や
          <span className="bg-clip-text bg-gradient-to-r from-[#2326ca] from-[48.779%] to-[#a72fdb] to-[56.995%]" style={{ WebkitTextFillColor: "transparent" }}>
            興味
          </span>
          はあるけど始める機会がない方々の手助けをし、互いに興味をぶつけ合い、高め合っていき誰もが選んだ場所で咲くことができるようになることを目的としています。
        </p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
      <div className="absolute css-g0mm18 font-['Outfit:Bold',sans-serif] font-bold leading-[normal] left-[188px] text-[65px] text-white top-[863px]">
        <p className="css-ew64yg mb-0">&nbsp;</p>
        <p className="css-ew64yg">&nbsp;</p>
      </div>
      <OgImage />
      <div className="absolute h-[71px] left-[456px] top-[751px] w-[137px]" data-name="MIT_logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMitLogoSvg1} />
      </div>
      <div className="absolute left-[593px] size-[166px] top-[708px]" data-name="unnamed (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUnnamed11} />
      </div>
      <div className="absolute h-[71px] left-[774px] top-[751px] w-[263px]" data-name="Netflix_2015_logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNetflix2015LogoSvg1} />
      </div>
      <div className="absolute h-[92px] left-[1082px] top-[741px] w-[110px]" data-name="4001x3337 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4001X33371} />
      </div>
      <LiquidGlassRegularLarge1 />
      <LiquidGlassRegularLarge2 />
      <LiquidGlassRegularLarge3 />
      <Group1 />
      <Group />
      <p className="absolute css-ew64yg font-['Outfit:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[138px] text-[37px] text-white top-[3386px]">新たな興味が生まれた</p>
      <p className="absolute css-ew64yg font-['Outfit:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[594px] text-[37px] text-white top-[3386px]">将来の方向性が決まった</p>
      <Group5 />
      <div className="absolute font-['Outfit:Bold',sans-serif] font-bold h-[598px] leading-[normal] left-[1692px] text-[50px] text-white top-[2546px] w-[1065px]">
        <p className="css-4hzbpn mb-0">
          <span>{`If this sounds like you, `}</span>
          <span className="bg-clip-text bg-gradient-to-r from-[#2326ca] from-[48.779%] to-[#a72fdb] to-[56.995%]" style={{ WebkitTextFillColor: "transparent" }}>
            MPC
          </span>
          <span>{` is for you.`}</span>
        </p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn mb-0">You have something you care about.</p>
        <p className="css-4hzbpn mb-0">
          <span>{`But you’ve never had the chance `}</span>
          <span className="bg-clip-text bg-white" style={{ WebkitTextFillColor: "transparent" }}>
            to try.
          </span>
        </p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn mb-0">You want to think about your future.</p>
        <p className="css-4hzbpn mb-0">But you don’t know where to start.</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn mb-0">You don’t want to stay where you are.</p>
        <p className="css-4hzbpn">You want to move — even just one step.</p>
      </div>
      <LiquidGlassRegularLarge4 />
      <LiquidGlassRegularLarge5 />
      <p className="absolute bg-clip-text bg-gradient-to-r css-ew64yg font-['Outfit:Bold',sans-serif] font-bold from-[#2326ca] from-[48.779%] leading-[normal] left-[281px] text-[42px] to-[#a72fdb] to-[56.995%] top-[2171px]" style={{ WebkitTextFillColor: "transparent" }}>
        MITA Vision Talk
      </p>
      <p className="absolute bg-clip-text bg-gradient-to-r css-ew64yg font-['Outfit:Bold',sans-serif] font-bold from-[#2fdb38] from-[48.779%] leading-[normal] left-[861px] text-[42px] to-[#00ffa6] to-[56.995%] top-[2171px]" style={{ WebkitTextFillColor: "transparent" }}>
        Vision Podcast
      </p>
      <Group2 />
      <LiquidGlassRegularLarge6 />
      <p className="absolute css-ew64yg font-['Outfit:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[370px] text-[100px] text-white top-[5922px]">さぁ、始めよう</p>
      <Frame />
      <p className="absolute css-ew64yg font-['Outfit:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[520px] text-[100px] text-white top-[6816px] uppercase">フッター</p>
    </div>
  );
}