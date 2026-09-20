"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  Pause,
  Scissors,
  Layers,
  Volume2,
  Film,
  Sparkles,
  Sliders,
  RotateCcw,
  Video,
  Music,
  Maximize2,
  FastForward,
} from "lucide-react";

export function VideoEditorHeroWidget() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [playheadPos, setPlayheadPos] = useState(35);
  const [activeTrack, setActiveTrack] = useState<number | null>(1);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setPlayheadPos((prev) => (prev >= 92 ? 5 : prev + 0.6 * playbackSpeed));
    }, 50);
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="w-full max-w-lg rounded-2xl border border-dark-border dark:bg-dark-card/90 bg-white/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-accent/40 group">
      {/* Top Editor Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-dark-border/60 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-2 text-secondaryText font-medium text-[11px] flex items-center gap-1">
            <Film className="w-3.5 h-3.5 text-accent" /> SEQUENCE_01.MP4
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-accent/10 border border-accent/30 text-accent text-[10px] font-semibold">
            4K // 60FPS
          </span>
          <span className="text-secondaryText text-[10px]">00:01:24:12</span>
        </div>
      </div>

      {/* Video Preview Frame */}
      <div className="relative aspect-video w-full mt-3 rounded-xl overflow-hidden bg-slate-950 border border-dark-border/80 flex items-center justify-center group/preview">
        {/* Animated Visual Canvas background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-purple-900/30 to-indigo-950/80 flex items-center justify-center">
          {/* Simulated Video Frame Graphics */}
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
            {/* Subject Box Overlay */}
            <div
              className={`w-32 h-20 rounded-lg border-2 border-dashed ${
                isPlaying ? "border-accent animate-pulse" : "border-slate-500"
              } flex flex-col items-center justify-center bg-accent/10 transition-all duration-300`}
            >
              <Video className="w-6 h-6 text-accent mb-1" />
              <span className="text-[10px] font-mono text-primaryText font-semibold">
                FRONTEND_UI.COMP
              </span>
            </div>

            {/* Playhead Overlay Text */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur px-2.5 py-1 rounded-md text-[10px] font-mono text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>FRAME: {Math.floor(playheadPos * 2.4)}</span>
            </div>
          </div>
        </div>

        {/* Center Play/Pause Overlay */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause Preview" : "Play Preview"}
          className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-accent/90 text-white flex items-center justify-center shadow-glow opacity-90 group-hover/preview:scale-110 transition-all duration-300 z-10 cursor-pointer"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-current" />
          ) : (
            <Play className="w-5 h-5 ml-0.5 fill-current" />
          )}
        </button>
      </div>

      {/* Control Bar */}
      <div className="flex items-center justify-between mt-3 px-1 py-2 text-secondaryText text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="p-1.5 rounded-lg border border-dark-border hover:border-accent hover:text-accent transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setPlayheadPos(5)}
            className="p-1.5 rounded-lg border border-dark-border hover:border-accent hover:text-accent transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setPlaybackSpeed((s) => (s === 1 ? 1.5 : s === 1.5 ? 2 : 1))}
            className="px-2 py-1 rounded-lg border border-dark-border text-[10px] font-mono hover:border-accent hover:text-accent transition-colors flex items-center gap-1"
          >
            <FastForward className="w-3 h-3" /> {playbackSpeed}x
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-secondaryText flex items-center gap-1">
            <Sliders className="w-3 h-3 text-accent" /> CUT &amp; EDIT
          </span>
          <Scissors className="w-3.5 h-3.5 hover:text-accent cursor-pointer transition-colors" />
          <Layers className="w-3.5 h-3.5 hover:text-accent cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Multi-Track Timeline Clips Area */}
      <div className="relative mt-2 p-2 rounded-xl bg-dark-bg/80 border border-dark-border/80 space-y-1.5 font-mono text-[10px] overflow-hidden">
        {/* Playhead Vertical Scrub Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-accent shadow-glow z-20 transition-all duration-75 pointer-events-none"
          style={{ left: `${playheadPos}%` }}
        >
          <div className="w-2 h-2 -ml-[3px] bg-accent rounded-full border border-white" />
        </div>

        {/* Track 1: Video Clip Track */}
        <div
          onClick={() => setActiveTrack(1)}
          className={`relative h-6 rounded-md border flex items-center px-2 cursor-pointer transition-all ${
            activeTrack === 1
              ? "bg-accent/20 border-accent text-accent-light"
              : "bg-purple-950/40 border-purple-800/40 text-purple-300"
          }`}
        >
          <Film className="w-3 h-3 mr-1.5 shrink-0" />
          <span className="truncate font-medium">V1 // REACT_HERO_ANIMATION.MOV</span>
          <span className="ml-auto text-[9px] opacity-70">00:04s</span>
        </div>

        {/* Track 2: FX / Motion Graphic Clip Track */}
        <div
          onClick={() => setActiveTrack(2)}
          className={`relative h-6 rounded-md border flex items-center px-2 cursor-pointer transition-all ${
            activeTrack === 2
              ? "bg-accent/20 border-accent text-accent-light"
              : "bg-indigo-950/40 border-indigo-800/40 text-indigo-300"
          }`}
        >
          <Sparkles className="w-3 h-3 mr-1.5 shrink-0 text-amber-400" />
          <span className="truncate font-medium">V2 // KINETIC_TEXT_TITLE.AEP</span>
          <span className="ml-auto text-[9px] opacity-70">00:02s</span>
        </div>

        {/* Track 3: Audio Track */}
        <div
          onClick={() => setActiveTrack(3)}
          className={`relative h-6 rounded-md border flex items-center px-2 cursor-pointer transition-all ${
            activeTrack === 3
              ? "bg-accent/20 border-accent text-accent-light"
              : "bg-emerald-950/40 border-emerald-800/40 text-emerald-300"
          }`}
        >
          <Music className="w-3 h-3 mr-1.5 shrink-0 text-emerald-400" />
          <span className="truncate font-medium">A1 // AMBIENT_BEAT_MIX.WAV</span>
          <span className="ml-auto text-[9px] opacity-70">00:08s</span>
        </div>
      </div>
    </div>
  );
}
