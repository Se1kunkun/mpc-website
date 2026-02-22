import { motion } from "motion/react";

const eventImage = "/images/event-placeholder.jpg";

export function Events() {
  const events = [
    {
      id: 1,
      title: "はじめの一歩を踏み出そう!!",
      date: "2026.1.19 16:20~17:40",
      status: "参加者受付中!!",
      image: eventImage,
      isOpen: true,
    },
    {
      id: 2,
      title: "はじめの一歩を踏み出そう!!",
      date: "2026.1.19 16:20~17:40",
      status: "受付終了",
      image: eventImage,
      isOpen: false,
    },
    {
      id: 3,
      title: "はじめの一歩を踏み出そう!!",
      date: "2026.1.19 16:20~17:40",
      status: "参加者受付中!!",
      image: eventImage,
      isOpen: true,
    },
  ];

  return (
    <section id="events" className="relative min-h-screen flex items-center justify-center py-20 bg-black overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-[20%] right-[10%] w-[700px] h-[700px] opacity-40">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#00D4FF] via-[#0080FF] to-[#2326ca] blur-[140px]" />
      </div>
      
      <div className="absolute bottom-[15%] left-[5%] w-[600px] h-[600px] opacity-35">
        <div className="w-full h-full rounded-full bg-gradient-to-tl from-[#17CBF4] to-[#4A90E2] blur-[130px]" />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <h2 className="font-bold text-white text-[70px] mb-16 px-8">
          イベント情報
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
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[30px] p-6 w-[380px] flex-shrink-0 overflow-hidden"
              >
                {/* Event Image */}
                <div className="rounded-[20px] overflow-hidden mb-6 h-[460px]">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Event Info */}
                <div className="space-y-3">
                  <h3 className="text-white text-[22px] font-semibold">
                    {event.title}
                  </h3>
                  <p className="text-white/70 text-[16px]">
                    {event.date}
                  </p>
                  <p className={`text-[18px] font-bold ${event.isOpen ? 'text-[#ff3366]' : 'text-white/50'}`}>
                    {event.status}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
