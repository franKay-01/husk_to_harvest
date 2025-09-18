import React, { useState, useEffect } from 'react';
import { processImageFromUrl } from '@/utils/watermarkRemoval';

interface WatermarkCleanerProps {
  originalImagePath: string;
  alt: string;
  className?: string;
  onCleanedImageReady?: (cleanedImageUrl: string) => void;
}

const WatermarkCleaner: React.FC<WatermarkCleanerProps> = ({ 
  originalImagePath, 
  alt, 
  className = "",
  onCleanedImageReady 
}) => {
  const [cleanedImageUrl, setCleanedImageUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const cleanImage = async () => {
      try {
        setIsProcessing(true);
        setError("");
        
        const cleaned = await processImageFromUrl(originalImagePath);
        setCleanedImageUrl(cleaned);
        onCleanedImageReady?.(cleaned);
      } catch (err) {
        console.error('Failed to clean watermark:', err);
        setError('Failed to process image');
        setCleanedImageUrl(originalImagePath); // Fallback to original
      } finally {
        setIsProcessing(false);
      }
    };

    cleanImage();
  }, [originalImagePath, onCleanedImageReady]);

  if (isProcessing) {
    return (
      <div className={`${className} bg-muted/20 animate-pulse flex items-center justify-center`}>
        <div className="text-muted-foreground">Processing image...</div>
      </div>
    );
  }

  if (error) {
    return (
      <img 
        src={originalImagePath} 
        alt={alt}
        className={className}
      />
    );
  }

  return (
    <img 
      src={cleanedImageUrl || originalImagePath} 
      alt={alt}
      className={className}
    />
  );
};

export default WatermarkCleaner;