import { motion } from "motion/react";

export function Purpose() {
  const breathe = {
    animate: {
      scale: [1, 1.08, 1],
      opacity: [0.35, 0.55, 0.35],
    },
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay },
    viewport: { once: true },
  });

  return (
    <section
      id="mission"
      className="relative min-h-screen flex items-center justify-center py-28 bg-black overflow-hidden"
    >
      {/* 背景 全体グラデーション */}
      <div className="absolute inset-0">
        <div className="absolute top-[15%] left-[-30%] w-[900px] h-[900px] rounded-full 
          bg-gradient-to-br from-[#ff2a6d] via-[#7a3cff] to-[#1e90ff] blur-[200px] opacity-50" />
        <div className="absolute bottom-[-30%] right-[-30%] w-[900px] h-[900px] rounded-full 
          bg-gradient-to-tl from-[#1e90ff] via-[#7a3cff] to-[#ff2a6d] blur-[200px] opacity-40" />
      </div>

      <div className="container mx-auto px-10 relative z-10 max-w-7xl">
        {/* Title */}
        <motion.h2
          {...fadeUp(0)}
          className="font-bold text-white text-[72px] mb-24 tracking-tight"
        >
          MPCの目的
        </motion.h2>

        <div className="max-w-5xl space-y-24">

          {/* ===== Catch Copy ===== */}
          <motion.div {...fadeUp(0.1)} className="relative">
            <motion.div
              {...breathe}
              className="absolute -top-16 -left-20 w-[520px] h-[260px] rounded-full
              bg-gradient-to-r from-[#ff2a6d] via-[#7a3cff] to-[#1e90ff]
              blur-[120px]"
            />
            <p className="relative z-10 text-[48px] font-extrabold leading-tight
              bg-clip-text text-transparent
              bg-gradient-to-r from-[#ff2a6d] via-[#7a3cff] to-[#1e90ff]">
              選んだ場所で、<br />
              咲くことができる未来へ。
            </p>
          </motion.div>

          {/* ===== Problem ===== */}
          <motion.div {...fadeUp(0.2)} className="relative">
            <motion.div
              {...breathe}
              transition={{ ...breathe.transition, duration: 10 }}
              className="absolute -top-10 -left-24 w-[460px] h-[220px] rounded-full
              bg-gradient-to-r from-[#3a3a7a] to-[#1e90ff]
              blur-[110px]"
            />
            <div className="relative z-10 text-white/85 text-[22px] leading-[2.1]">
              <p>「課外活動の進め方がわからない」</p>
              <p>「活動が学校内にとどまり、他校とのつながりが生まれにくい」</p>
            </div>
          </motion.div>

          {/* ===== Purpose ===== */}
          <motion.div {...fadeUp(0.3)} className="relative">
            <motion.div
              {...breathe}
              transition={{ ...breathe.transition, duration: 9 }}
              className="absolute -top-10 -left-20 w-[480px] h-[240px] rounded-full
              bg-gradient-to-r from-[#7a3cff] to-[#1e90ff]
              blur-[120px]"
            />
            <p className="relative z-10 text-white text-[23px] leading-[2.1] max-w-4xl">
              そのような課題に対し、私たちMPCは、学生主導で、
              <span className="font-semibold"> 学びと挑戦の場 </span>
              を提供することを目的にしています。
            </p>
          </motion.div>

          {/* ===== Cycle ===== */}
          <motion.div {...fadeUp(0.4)} className="relative">
            <motion.divdiv
              {...breathe}
              transition={{ ...breathe.transition, duration: 11 }}
              className="absolute -top-12 -left-28 w-[540px] h-[260px] rounded-full
              bg-gradient-to-r from-[#ff2a6d] via-[#7a3cff] to-[#1e90ff]
              blur-[140px]"
            />
            <p className="relative z-10 text-white text-[23px] leading-[2.1] max-w-4xl">
              学生を他校・地域・企業とつなげるイベントを企画開催し、
              メンバー同士が話し合い、議論しあうことで、興味関心を
              <span className="font-extrabold bg-clip-text text-transparent
                bg-gradient-to-r from-[#ff2a6d] via-[#7a3cff] to-[#1e90ff]">
                「探し・広げ・繋げ・深める」
              </span>
              サイクルで回し続けています。
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
