import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const videos = [
  {
    src: "/videos/hero_1.mp4",
    alt: "Sustainable mushroom farming operations"
  },
  {
    src: "/videos/hero_2.mp4", 
    alt: "Mushroom cultivation process"
  },
  {
    src: "/videos/mushroom-closeup.mp4",
    alt: "Close-up of various mushroom types"
  }
];

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const standardDuration = useRef<number>(10000); // 10 seconds default

  const goToVideo = useCallback((index: number) => {
    setCurrentVideoIndex(index);
    const selectedVideo = videoRefs.current[index];
    if (selectedVideo) {
      selectedVideo.currentTime = 0;
      selectedVideo.play().catch(console.error);
    }
  }, []);

  // Preload all videos
  useEffect(() => {
    videos.forEach((video, index) => {
      const videoElement = videoRefs.current[index];
      if (videoElement && !loadedVideos.has(index)) {
        const handleCanPlay = () => {
          setLoadedVideos(prev => new Set(prev).add(index));
          if (index === 0) {
            setIsLoading(false);
            videoElement.play().catch(console.error);
          }
        };
        
        videoElement.addEventListener('canplaythrough', handleCanPlay);
        videoElement.load();
        
        return () => {
          videoElement.removeEventListener('canplaythrough', handleCanPlay);
        };
      }
    });
  }, []);

  // Get duration of the last video to use as standard
  useEffect(() => {
    const lastVideoRef = videoRefs.current[videos.length - 1];
    if (lastVideoRef) {
      const handleLoadedMetadata = () => {
        standardDuration.current = lastVideoRef.duration * 1000;
      };
      
      lastVideoRef.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => {
        lastVideoRef.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

  // Auto-advance videos
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentVideoIndex((prev) => {
        const nextIndex = (prev + 1) % videos.length;
        const nextVideo = videoRefs.current[nextIndex];
        if (nextVideo) {
          nextVideo.currentTime = 0;
          nextVideo.play().catch(console.error);
        }
        return nextIndex;
      });
    }, standardDuration.current);

    return () => clearTimeout(timer);
  }, [currentVideoIndex]);

  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {isLoading && (
          <Skeleton className="w-full h-full" />
        )}
        {videos.map((video, index) => (
          <video
            key={video.src}
            ref={(el) => (videoRefs.current[index] = el)}
            src={video.src}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
            muted
            playsInline
            preload="auto"
            loop={false}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          {/* Enhanced headline with better typography */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-[0.85] mb-4 tracking-tight drop-shadow-2xl">
            TURNING
            <br />
            <span className="bg-gradient-to-r from-growth-glow to-earth-light bg-clip-text text-transparent drop-shadow-2xl" style={{WebkitTextStroke: '1px rgba(255,255,255,0.3)'}}>
              WASTE
            </span>
            <br />
            INTO WEALTH
          </h1>
        </div>
      </div>

      {/* Subtitle positioned at bottom left */}
      <div className="absolute bottom-16 left-4 lg:left-8 z-20 max-w-lg">
        <p className="text-sm md:text-base lg:text-lg text-white font-medium leading-relaxed drop-shadow-xl bg-black/20 backdrop-blur-sm rounded-lg p-3">
          Transforming agricultural waste into premium sustainable mushrooms through innovative farming, fueling jobs, food security and climate action.
        </p>
      </div>

      {/* Video Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToVideo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentVideoIndex 
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;