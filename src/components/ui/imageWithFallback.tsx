import { useEffect, useState } from "react";

export interface ImageComponent {
  src?: string;
  alt?: string;
  className?: string;
}
export default function ImageWithFallback({
  src,
  alt,
  className,
}: ImageComponent) {
  const FALLBACK_IMAGE = `https://placehold.co/600x400?text=${alt}`;
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (currentSrc !== FALLBACK_IMAGE) {
          setCurrentSrc(FALLBACK_IMAGE);
        }
      }}
    />
  );
}
