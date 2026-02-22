export function NewActivities() {
  const activities = [
    {
      title: "MITA Vision Talk",
      description: "様々な分野の有識者をゲストとして招くトークイベントです。あなたの興味をさらに深掘りします。",
      link: "https://x.gd/XMDZT",
    },
    {
      title: "Vision Podcast",
      description: "MPCのメンバーが自分の興味について対談をします。誰がどんなことを考えているのかを知ることで新たな視点を得られます。",
      link: null,
    },
  ];

  return (
    <section id="activities" className="relative min-h-screen flex items-center justify-center py-20 bg-black overflow-hidden">
      {/* Gradient Orbs - 左側と右側に配置 */}
      {/* MITA Vision Talkの左側 - 濃い青 */}
      <div className="absolute top-[-100px] left-[-200px] w-[700px] h-[700px] opacity-50">
        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#003580] to-[#0050B8] blur-[150px]" />
      </div>
      
      {/* MITA Vision Talkの右側 - 濃い紫 */}
      <div className="absolute top-[-50px] right-[60%] w-[600px] h-[600px] opacity-50">
        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#4B0082] to-[#6A0DAD] blur-[150px]" />
      </div>
      
      {/* Vision Podcastの右側 - ターコイズ */}
      <div className="absolute top-[30%] right-[-150px] w-[650px] h-[650px] opacity-50">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#40E0D0] via-[#48D1CC] to-[#00CED1] blur-[150px]" />
      </div>
      
      <div className="absolute bottom-[-50px] left-[10%] w-[600px] h-[600px] opacity-35">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#2AFADF] to-[#4C9AFF] blur-[130px]" />
      </div>

      <div className="container mx-auto px-8 relative z-10 max-w-7xl">
        <h2 className="font-bold text-white text-[70px] mb-16">
          活動内容
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            activity.link ? (
              <a 
                key={index}
                href={activity.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group text-left active:scale-95 transition-transform duration-300 block"
              >
                {/* Glass Effect Card */}
                <div className="relative h-[457px] rounded-[34px] overflow-hidden">
                  {/* Shadow layer */}
                  <div className="absolute inset-[-26px]">
                    <div className="absolute bg-white inset-[-50px]">
                      <div className="absolute bg-black inset-[76px] rounded-[34px]" />
                    </div>
                    <div className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] blur-[20px] inset-[31px_26px_21px_26px] mix-blend-hard-light rounded-[34px]" />
                  </div>
                  
                  {/* Fill layer */}
                  <div className="absolute inset-0 rounded-[34px]">
                    <div className="absolute inset-0 pointer-events-none rounded-[34px]">
                      <div className="absolute bg-[#262626] inset-0 mix-blend-color-dodge rounded-[34px]" />
                      <div className="absolute bg-[rgba(250,250,250,0.7)] inset-0 rounded-[34px] group-hover:bg-[rgba(250,250,250,0.8)] transition-colors duration-300" />
                    </div>
                  </div>
                  
                  {/* Glass Effect */}
                  <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[34px]" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-12 h-full flex flex-col justify-center">
                    <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#003580] via-[#FF1493] to-[#6A0DAD] bg-clip-text text-transparent">
                      {activity.title}
                    </h3>
                    <p className="text-white/80 text-xl">{activity.description}</p>
                  </div>
                </div>
              </a>
            ) : (
              <div 
                key={index}
                className="relative group text-left"
              >
                {/* Glass Effect Card */}
                <div className="relative h-[457px] rounded-[34px] overflow-hidden">
                  {/* Shadow layer */}
                  <div className="absolute inset-[-26px]">
                    <div className="absolute bg-white inset-[-50px]">
                      <div className="absolute bg-black inset-[76px] rounded-[34px]" />
                    </div>
                    <div className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] blur-[20px] inset-[31px_26px_21px_26px] mix-blend-hard-light rounded-[34px]" />
                  </div>
                  
                  {/* Fill layer */}
                  <div className="absolute inset-0 rounded-[34px]">
                    <div className="absolute inset-0 pointer-events-none rounded-[34px]">
                      <div className="absolute bg-[#262626] inset-0 mix-blend-color-dodge rounded-[34px]" />
                      <div className="absolute bg-[rgba(250,250,250,0.7)] inset-0 rounded-[34px]" />
                    </div>
                  </div>
                  
                  {/* Glass Effect */}
                  <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[34px]" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-12 h-full flex flex-col justify-center">
                    <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#11FFC7] via-[#FFD700] to-[#40E0D0] bg-clip-text text-transparent">
                      {activity.title}
                    </h3>
                    <p className="text-white/80 text-xl">{activity.description}</p>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}