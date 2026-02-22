import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
const member1 = "";
const member2 = "";
const member3 = "";
const member4 = "";
const member5 = "";
const member6 = "";

export function MemberGrid() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const members = [
    { id: 1, name: "メンバー 1", image: member1 },
    { id: 2, name: "メンバー 2", image: member2 },
    { id: 3, name: "メンバー 3", image: member3 },
    { id: 4, name: "メンバー 4", image: member4 },
    { id: 5, name: "メンバー 5", image: member5 },
    { id: 6, name: "メンバー 6", image: member6 },
  ];

  const selectedMemberData = members.find(m => m.id === selectedMember);

  return (
    <section id="members" className="relative min-h-screen flex items-center justify-center py-20 bg-black overflow-hidden">
      {/* Gradient Orbs - 少し違う色調で配置 */}
      <div className="absolute top-[15%] right-[5%] w-[850px] h-[380px] opacity-35">
        <div className="w-full h-full rounded-full bg-gradient-to-l from-[#00D4FF] via-[#0080FF] to-[#7B42F6] blur-[150px]" />
      </div>
      
      <div className="absolute top-[50%] left-[8%] w-[750px] h-[340px] opacity-30">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#11FFC7] via-[#17CBF4] to-[#4A90E2] blur-[140px]" />
      </div>
      
      <div className="absolute bottom-[10%] right-[15%] w-[680px] h-[300px] opacity-28">
        <div className="w-full h-full rounded-full bg-gradient-to-tl from-[#B123CA] via-[#5B86E5] to-[#36D1DC] blur-[135px]" />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <h2 className="font-bold text-white text-[70px] mb-16 px-8">
          メンバー紹介
        </h2>
        
        {/* Horizontal scroll container */}
        <div className="overflow-x-auto scrollbar-hide px-8">
          <div className="flex gap-8 min-w-max pb-4">
            {members.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member.id)}
                className="h-[479px] w-[380px] rounded-[30px] flex items-center justify-center hover:scale-105 transition-transform duration-300 flex-shrink-0 overflow-hidden cursor-pointer"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedMember && selectedMemberData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute -top-14 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X size={40} />
              </button>

              {/* Image */}
              <div className="rounded-[30px] overflow-hidden max-h-[80vh] flex items-center justify-center">
                <img
                  src={selectedMemberData.image}
                  alt={selectedMemberData.name}
                  className="w-full max-h-[80vh] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}