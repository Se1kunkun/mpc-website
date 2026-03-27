"use client";

import { motion } from "motion/react";
import { useRef, useState, useCallback, useEffect } from "react";

export default function TaidanPodcast() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay },
    viewport: { once: true },
  });

  const audioRef = useRef<HTMLAudioElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const formatTime = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith("audio/")) return;
    const url = URL.createObjectURL(file);
    setAudioSrc(url);
    setFileName(file.name.replace(/\.[^/.]+$/, ""));
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || !audioSrc) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(audio.currentTime);
    setProgress((audio.currentTime / audio.duration) * 100 || 0);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) setDuration(audio.duration);
  };

  const handleEnded = () => setIsPlaying(false);

  const seekTo = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const bar = progressRef.current;
    if (!audio || !bar) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
  }, []);

  const skipBy = (secs: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + secs));
  };

  // Cleanup object URL on unmount
  useEffect(() => {
    return () => {
      if (audioSrc) URL.revokeObjectURL(audioSrc);
    };
  }, [audioSrc]);

  return (
    <section className="relative min-h-screen bg-black text-white py-32 px-6 overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-20%] w-[900px] h-[900px] rounded-full
          bg-gradient-to-br from-[#ff2a6d] via-[#7a3cff] to-[#1e90ff]
          blur-[200px] opacity-40" />
        <div className="absolute bottom-[-25%] right-[-25%] w-[900px] h-[900px] rounded-full
          bg-gradient-to-tl from-[#1e90ff] via-[#7a3cff] to-[#ff2a6d]
          blur-[200px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Title */}
        <motion.div {...fadeUp(0)}>
          <h1 className="text-[72px] font-bold tracking-tight mb-6">
            Podcasts
          </h1>
          <p className="text-white/70 text-xl mb-24 max-w-2xl leading-relaxed">
            挑戦する人と語る。
            <br />
            その背景にある思考と、未来へのビジョン。
          </p>
        </motion.div>

        {/* Audio Player */}
        <motion.div {...fadeUp(0.2)} className="mb-24">

          {!audioSrc ? (
            /* Upload Zone */
            <div
              onDrop={handleDrop}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onClick={() => fileInputRef.current?.click()}
              className={`
                relative w-full aspect-[16/5] rounded-3xl border flex flex-col items-center justify-center gap-4
                cursor-pointer transition-all duration-300
                ${isDragging
                  ? "border-white/60 bg-white/10"
                  : "border-white/20 bg-white/5 hover:bg-white/8 hover:border-white/30"
                }
              `}
            >
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff2a6d]/5 via-[#7a3cff]/5 to-[#1e90ff]/5 pointer-events-none" />

              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
                <path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="6" cy="18" r="3"/>
                <circle cx="18" cy="16" r="3"/>
              </svg>

              <div className="text-center">
                <p className="text-white/70 text-base font-medium">
                  音声ファイルをドロップ、またはクリックして選択
                </p>
                <p className="text-white/30 text-sm mt-1">MP3, WAV, M4A など</p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

          ) : (
            /* Player */
            <div className="relative w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-10 overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a6d]/8 via-transparent to-[#1e90ff]/8 pointer-events-none rounded-3xl" />

              <div className="relative z-10">
                {/* Track name */}
                <div className="mb-10">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Now Playing</p>
                  <p className="text-white text-2xl font-semibold truncate">{fileName}</p>
                </div>

                {/* Progress bar */}
                <div
                  ref={progressRef}
                  className="w-full h-1 bg-white/15 rounded-full cursor-pointer mb-3 group"
                  onClick={seekTo}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#ff2a6d] via-[#7a3cff] to-[#1e90ff] relative transition-all"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Time */}
                <div className="flex justify-between text-white/40 text-xs mb-10 font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-10">
                  {/* Rewind 15s */}
                  <button
                    onClick={() => skipBy(-15)}
                    className="text-white/50 hover:text-white transition-colors flex flex-col items-center gap-1"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.5 3C8.36 3 4.86 5.68 3.58 9.4L2 8v5h5l-1.95-1.95A7.5 7.5 0 1 1 12.5 21c-2.24 0-4.24-.99-5.62-2.55l-1.42 1.42A9.97 9.97 0 0 0 12.5 23c5.52 0 10-4.48 10-10s-4.48-10-10-10z"/>
                      <text x="8.5" y="16.5" fontSize="5.5" fill="currentColor" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">15</text>
                    </svg>
                    <span className="text-[10px] tracking-wider">15s</span>
                  </button>

                  {/* Play / Pause */}
                  <button
                    onClick={togglePlay}
                    className="w-16 h-16 rounded-full flex items-center justify-center
                      bg-gradient-to-br from-[#ff2a6d] via-[#7a3cff] to-[#1e90ff]
                      hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-[#7a3cff]/30"
                  >
                    {isPlaying ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <rect x="6" y="4" width="4" height="16" rx="1"/>
                        <rect x="14" y="4" width="4" height="16" rx="1"/>
                      </svg>
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 2 }}>
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    )}
                  </button>

                  {/* Forward 15s */}
                  <button
                    onClick={() => skipBy(15)}
                    className="text-white/50 hover:text-white transition-colors flex flex-col items-center gap-1"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.5 3C7.36 3 3.86 5.68 2.58 9.4L1 8v5h5L4.05 11.05A7.5 7.5 0 1 0 11.5 4.5V3zm1 0v1.5A7.5 7.5 0 1 1 19.95 11.05L18 13h5V8l-1.58 1.4C20.14 5.68 16.64 3 12.5 3z"/>
                      <text x="15.5" y="16.5" fontSize="5.5" fill="currentColor" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">15</text>
                    </svg>
                    <span className="text-[10px] tracking-wider">15s</span>
                  </button>
                </div>

                {/* Replace file */}
                <div className="mt-10 flex justify-center">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-white/30 hover:text-white/60 text-xs transition-colors underline underline-offset-4"
                  >
                    別のファイルを選択
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="audio/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              {/* Hidden audio element */}
              <audio
                ref={audioRef}
                src={audioSrc}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleEnded}
              />
            </div>
          )}
        </motion.div>

        {/* Description */}
        <motion.div {...fadeUp(0.3)} className="max-w-3xl space-y-8 text-lg leading-[1.9]">
          <p>
            本対談では、「学生が挑戦するとは何か」という問いを軸に、
            プロジェクトの裏側や葛藤、そして未来への展望について語っています。
          </p>
          <p>
            MPCが目指すのは、単なるイベント団体ではなく、
            思考と行動をつなぐ"場"を創り続けること。
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
