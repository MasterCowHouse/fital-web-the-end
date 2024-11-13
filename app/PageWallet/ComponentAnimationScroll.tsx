import { useState, useRef, useEffect, RefObject } from "react";

interface ComponentAnimationScrollResult {
  elemtoRef: RefObject<HTMLElement>;
  isIntersecting: boolean;
}

export const ComponentAnimationScroll = (opciones = {}): ComponentAnimationScrollResult => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const elemtoRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elemto = elemtoRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    }, opciones);

    if (elemto) {
      observer.observe(elemto);
    }

    return () => {
      if (elemto) {
        observer.unobserve(elemto);
      }
    };
  }, [opciones]);

  return { elemtoRef, isIntersecting };
};
