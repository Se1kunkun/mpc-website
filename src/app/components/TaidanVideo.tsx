import { motion } from "motion/react";

export default function TaidanVideo() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay },
    viewport: { once: true },
  });

  return (
    <section className="relative min-h-screen bg-black text-white py-32 px-6 overflow-hidden">

      {/* ===== Background Gradient ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-20%] w-[900px] h-[900px] rounded-full 
          bg-gradient-to-br from-[#ff2a6d] via-[#7a3cff] to-[#1e90ff]
          blur-[200px] opacity-40" />
        <div className="absolute bottom-[-25%] right-[-25%] w-[900px] h-[900px] rounded-full 
          bg-gradient-to-tl from-[#1e90ff] via-[#7a3cff] to-[#ff2a6d]
          blur-[200px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ===== Title ===== */}
        <motion.div {...fadeUp(0)}>
          <h1 className="text-[72px] font-bold tracking-tight mb-6">
            MPC対談シリーズ
          </h1>

          <p className="text-white/70 text-xl mb-24 max-w-2xl leading-relaxed">
            挑戦する人と語る。
            <br />
            その背景にある思考と、未来へのビジョン。
          </p>
        </motion.div>

        {/* ===== Main Video ===== */}
        <motion.div {...fadeUp(0.2)} className="mb-24">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
           <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/a79N2smiAU4?si=Zskx1zg6wgbTyqUf"
  title="MPC対談動画"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
          </div>
        </motion.div>

        {/* ===== Description ===== */}
        <motion.div {...fadeUp(0.3)} className="max-w-3xl space-y-8 text-lg leading-[1.9]">

          <p>
            本対談では、「学生が挑戦するとは何か」という問いを軸に、
            プロジェクトの裏側や葛藤、そして未来への展望について語っています。
          </p>

          <p>
            MPCが目指すのは、単なるイベント団体ではなく、
            思考と行動をつなぐ“場”を創り続けること。
          </p>

          <p className="text-2xl font-semibold bg-clip-text text-transparent
            bg-gradient-to-r from-[#ff2a6d] via-[#7a3cff] to-[#1e90ff]">
            挑戦は、思想から始まる。
          </p>

        </motion.div>

      </div>
    </section>
  );
}