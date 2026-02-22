import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  fullContent: string;
}

export function News() {
  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "MPC発足記念限定 10名以上が参加",
      date: "2026/01/15",
      description: "Mita Pioneer Clubの発足を記念したキックオフイベントに10名以上の学生が参加しました。",
      fullContent: "Mita Pioneer Clubの発足を記念したキックオフイベントに10名以上の学生が参加しました。\n\nイベントでは、MPCの目的や今後の活動計画について説明を行い、参加者同士で自己紹介や興味関心の共有を行いました。多様なバックグラウンドを持つ学生が集まり、活発な議論が交わされました。\n\n今後は定期的にイベントを開催し、学生同士のつながりを深めていく予定です。",
    },
    {
      id: 2,
      title: "MPC発足記念限定 10名以上が参加",
      date: "2026/01/12",
      description: "新しいプロジェクトの企画会議を開催しました。",
      fullContent: "新しいプロジェクトの企画会議を開催しました。\n\nメンバーからは様々なアイデアが提案され、実現可能性やインパクトについて議論を重ねました。特に、地域との連携を強化するプロジェクトや、他校との交流イベントの企画が注目を集めました。\n\n次回の会議では、具体的な実行計画を策定する予定です。",
    },
    {
      id: 3,
      title: "Vision Podcast 第1回配信開始",
      date: "2026/01/08",
      description: "MPCの新企画「Vision Podcast」の第1回が配信されました。",
      fullContent: "MPCの新企画「Vision Podcast」の第1回が配信されました。\n\n第1回のゲストには、起業家の○○さんをお迎えし、学生時代の挑戦や現在の活動について語っていただきました。リスナーからも多くの反響をいただき、今後も定期的に配信していく予定です。\n\nPodcastは各種プラットフォームで配信中です。",
    },
    {
      id: 4,
      title: "MITA Vision Talk イベントレポート",
      date: "2026/01/05",
      description: "第1回MITA Vision Talkが盛況のうちに終了しました。",
      fullContent: "第1回MITA Vision Talkが盛況のうちに終了しました。\n\n今回のテーマは「学生が描く未来のビジョン」。参加者それぞれが自身のビジョンを共有し、互いにフィードバックを行いました。イベント後のアンケートでは、参加者の満足度が非常に高く、次回の開催を望む声が多数寄せられました。\n\n次回は2月中旬に開催予定です。",
    },
  ];

  const selectedNewsData = newsItems.find(n => n.id === selectedNews);

  return (
    <section id="news" className="relative min-h-screen flex items-center justify-center py-20 bg-black overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-[25%] left-[8%] w-[750px] h-[750px] opacity-35">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#B123CA] via-[#7B42F6] to-[#5B86E5] blur-[140px]" />
      </div>
      
      <div className="absolute bottom-[20%] right-[10%] w-[650px] h-[650px] opacity-30">
        <div className="w-full h-full rounded-full bg-gradient-to-tl from-[#36D1DC] to-[#5B86E5] blur-[130px]" />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <h2 className="font-bold text-white text-[70px] mb-16 px-8">
          News
        </h2>
        
        {/* Horizontal scroll container */}
        <div className="overflow-x-auto scrollbar-hide px-8">
          <motion.div 
            className="flex gap-8 min-w-max pb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {newsItems.map((news, index) => (
              <motion.button
                key={news.id}
                onClick={() => setSelectedNews(news.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[30px] p-6 w-[380px] flex-shrink-0 text-left cursor-pointer hover:bg-white/10 transition-colors"
              >
                {/* Placeholder Image Area */}
                <div className="rounded-[20px] bg-gradient-to-br from-white/10 to-white/5 mb-6 h-[280px] flex items-center justify-center">
                  <div className="text-white/30 text-[60px]">📰</div>
                </div>
                
                {/* News Info */}
                <div className="space-y-3">
                  <h3 className="text-white text-[20px] font-semibold leading-tight">
                    {news.title}
                  </h3>
                  <p className="text-white/50 text-[14px]">
                    {news.date}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* News Popup Modal */}
      <AnimatePresence>
        {selectedNews && selectedNewsData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNews(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-[30px] p-8 max-h-[80vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X size={32} />
              </button>

              {/* News Content */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-white/60 text-[14px]">{selectedNewsData.date}</p>
                  <h2 className="text-white text-[32px] font-bold leading-tight pr-12">
                    {selectedNewsData.title}
                  </h2>
                </div>
                
                <div className="h-px bg-gradient-to-r from-white/20 via-white/40 to-white/20" />
                
                <div className="text-white/90 text-[18px] leading-relaxed whitespace-pre-line">
                  {selectedNewsData.fullContent}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
