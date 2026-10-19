"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Music,
  Disc,
  Play,
  Pause,
  Volume2,
  VolumeX,
  SlidersHorizontal,
  X,
  Sparkles,
} from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { playButtonClickSound } from "./MinecraftSoundEffects";

export function MinecraftNavbarMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize background audio
  useEffect(() => {
    const audio = new Audio("/sounds/Sweden.mp3");
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    const handlePlayEvent = () => setIsPlaying(true);
    const handlePauseEvent = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlayEvent);
    audio.addEventListener("pause", handlePauseEvent);

    // Check user preference
    const savedMuted = localStorage.getItem("hackverse_bgm_muted");
    if (savedMuted !== "true") {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Handle autoplay block by playing on first user gesture
        const unlockAudio = () => {
          const currentlyMuted = localStorage.getItem("hackverse_bgm_muted");
          if (currentlyMuted !== "true" && audioRef.current) {
            audioRef.current.play().then(() => {
              setIsPlaying(true);
            }).catch(() => {});
          }
          window.removeEventListener("click", unlockAudio);
          window.removeEventListener("keydown", unlockAudio);
          window.removeEventListener("touchstart", unlockAudio);
        };

        window.addEventListener("click", unlockAudio, { once: true });
        window.addEventListener("keydown", unlockAudio, { once: true });
        window.addEventListener("touchstart", unlockAudio, { once: true });
      });
    }

    return () => {
      audio.removeEventListener("play", handlePlayEvent);
      audio.removeEventListener("pause", handlePauseEvent);
      audio.pause();
      audio.src = "";
    };
  }, []);

  const triggerToast = useCallback(() => {
    setShowToast(true);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setShowToast(false);
    }, 3500);
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    playButtonClickSound(0.4);
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      localStorage.setItem("hackverse_bgm_muted", "true");
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        localStorage.removeItem("hackverse_bgm_muted");
        triggerToast();
      }).catch((err) => {
        console.error("Audio playback error:", err);
      });
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    playButtonClickSound(0.4);
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
      localStorage.removeItem("hackverse_bgm_muted");
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
      localStorage.setItem("hackverse_bgm_muted", "true");
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      if (newVol > 0 && isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="relative font-mono select-none" ref={containerRef}>
      {/* ── Sleek Cyber Music Trigger Button (Matches Reference Image) ── */}
      <button
        type="button"
        onClick={() => {
          playButtonClickSound(0.4);
          setIsOpen(!isOpen);
        }}
        className={clsx(
          "relative w-9 h-9 sm:w-10 sm:h-10 rounded-md sm:rounded-lg flex items-center justify-center transition-all cursor-pointer select-none",
          "bg-[#13151D] hover:bg-[#1C1F2B] border border-zinc-700/80 hover:border-zinc-500",
          isPlaying && "border-[#FF6600]/70 shadow-[0_0_12px_rgba(255,102,0,0.35)]",
          isOpen && "border-[#FF7700] ring-1 ring-[#FF7700]/50"
        )}
        title={isPlaying ? "Music: Playing (Click for Controls)" : "Music: Paused (Click to Play)"}
        aria-label="Music Player"
        aria-expanded={isOpen}
      >
        <Music
          className={clsx(
            "w-4 h-4 sm:w-4.5 sm:h-4.5 transition-colors",
            isPlaying ? "text-[#FF8800]" : "text-zinc-200"
          )}
        />

        {/* Status Indicator Dot at Top Right */}
        {isPlaying && (
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#FF7700] shadow-[0_0_6px_#FF7700] animate-pulse" />
        )}
      </button>

      {/* ── Dropdown Menu (Sleek Dark Cyber HUD) ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-68 sm:w-72 bg-[#0D0F14]/98 backdrop-blur-xl border border-zinc-700/80 rounded-lg shadow-[0_12px_40px_rgba(0,0,0,0.8)] z-50 text-white overflow-hidden"
          >
            {/* Header */}
            <div className="p-3 bg-[#141720] border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Disc
                  className={clsx(
                    "w-4 h-4 text-[#FF7700]",
                    isPlaying && "animate-spin"
                  )}
                  style={{ animationDuration: "3s" }}
                />
                <div className="flex flex-col text-left">
                  <span className="font-bold text-xs uppercase text-white tracking-wider">
                    SOUNDTRACK
                  </span>
                  <span className="font-mono text-[10px] text-zinc-400 leading-none">
                    C418 - SWEDEN (OST)
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  playButtonClickSound(0.4);
                  setIsOpen(false);
                }}
                className="w-6 h-6 flex items-center justify-center rounded bg-zinc-800/80 hover:bg-[#FF4400] text-zinc-400 hover:text-white border border-zinc-700/60 cursor-pointer text-xs transition-colors"
                title="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Body Controls */}
            <div className="p-3.5 space-y-3 bg-[#0D0F14]">
              {/* Playback Status Badge */}
              <div className="p-2 bg-black/60 rounded border border-zinc-800 flex items-center justify-between text-[11px] font-mono">
                <span className="flex items-center gap-1.5">
                  {isPlaying ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-[#FF7700] shadow-[0_0_6px_#FF7700] animate-pulse" />
                      <span className="text-[#FFAA00] font-bold">PLAYING</span>
                    </>
                  ) : (
                    <>
                      <span className="w-2 h-2 rounded-full bg-zinc-600" />
                      <span className="text-zinc-400">PAUSED</span>
                    </>
                  )}
                </span>
                <span className="text-zinc-300">
                  VOL: {isMuted ? "0%" : `${Math.round(volume * 100)}%`}
                </span>
              </div>

              {/* Action Buttons Row */}
              <div className="flex items-center gap-2">
                {/* Play / Pause Button */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className={clsx(
                    "flex-1 h-9 px-3 rounded font-black text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98] transition-all tracking-wider",
                    isPlaying
                      ? "bg-gradient-to-r from-[#FF5500] to-[#FF7700] hover:brightness-110 text-white shadow-[0_0_12px_rgba(255,102,0,0.4)]"
                      : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700"
                  )}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current" />
                      <span>PAUSE</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>PLAY</span>
                    </>
                  )}
                </button>

                {/* Mute Button */}
                <button
                  type="button"
                  onClick={toggleMute}
                  className="w-9 h-9 rounded flex items-center justify-center bg-zinc-800/80 hover:bg-zinc-700 text-white border border-zinc-700/80 cursor-pointer active:scale-[0.98] transition-all"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-[#FF5555]" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-[#FFAA00]" />
                  )}
                </button>
              </div>

              {/* Volume Slider Section */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase text-zinc-400 tracking-wider">
                  <span>VOLUME</span>
                  <span>{isMuted ? "MUTED" : `${Math.round(volume * 100)}%`}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1.5 bg-zinc-800 rounded accent-[#FF7700] cursor-pointer"
                  aria-label="Volume slider"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
