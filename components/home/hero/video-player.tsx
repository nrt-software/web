"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface VideoPlayerControlProps {
  progress: number;
  isPaused: boolean;
  onPlayPause: () => void;
  size?: number;
  width?: number;
}

const VideoPlayerControl = ({
  isPaused,
  onPlayPause,
  progress,
  size = 42,
  width = 3,
}: VideoPlayerControlProps) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#aaaaaa"
          strokeWidth={width}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#ffffff"
          strokeWidth={width}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute">
        <button
          className="group cursor-pointer flex justify-center items-center"
          onClick={onPlayPause}
        >
          <div className="fill-white group-hover:fill-[#aaaaaa] transition-colors duration-200 ease-in-out">
            {isPaused ? (
              <Play className="ml-[2px] text-neutral-500" />
            ) : (
              <Pause className="text-neutral-500" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export function VideoHero() {
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoDuration(video.duration);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const currentTime = videoRef.current?.currentTime;

    if (videoDuration != null && currentTime != null) {
      let timeout = setTimeout(() => {
        if (progress == currentTime / videoDuration) {
          setProgress((prev) => prev + 0.000001);
        } else {
          setProgress(currentTime / videoDuration);
        }
      }, 10);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isPaused, videoDuration, progress]);

  const onPlayPause = () => {
    const video = videoRef.current;

    if (video) {
      setIsPaused(!video.paused);
      video.paused ? video.play() : video.pause();
    }
  };

  return (
    <div className="relative w-[90%] max-w-6xl mx-auto my-14 rounded-xl overflow-hidden">
      <div className="absolute top-4 right-4 z-10">
        <VideoPlayerControl
          progress={progress}
          isPaused={isPaused}
          onPlayPause={onPlayPause}
        />
      </div>
      <video ref={videoRef} className="w-full" loop muted autoPlay>
        <source src="./video.mp4" />
      </video>
    </div>
  );
}
