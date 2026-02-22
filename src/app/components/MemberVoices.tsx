export function MemberVoices() {
  const voices = [
    { text: "新たな興味が生まれた" },
    { text: "将来の方向性が決まった" },
    { text: "仲間と出会えた" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-black overflow-hidden">
      <div className="container mx-auto relative z-10 max-w-7xl">
        <h2 className="font-bold text-white text-[70px] mb-16 px-8">
          メンバーの声
        </h2>

        <div className="overflow-x-auto px-8">
          <div className="flex gap-8 min-w-max pb-4">
            {voices.map((voice, index) => (
              <div
                key={index}
                className="w-[400px] h-[457px] rounded-[34px] bg-white/10 backdrop-blur-lg flex items-center justify-center"
              >
                <h3 className="text-white text-[28px] font-bold text-center px-6">
                  {voice.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}