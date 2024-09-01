import React, { useEffect, useRef, useState } from "react";

function useResize(element: React.RefObject<HTMLDivElement>, callback: () => void): void {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const onResize = () => {
      if (typeof callbackRef.current === "function") {
        callbackRef.current();
      }
    };

    requestAnimationFrame(onResize);
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

}

export function useElementSize(element: React.RefObject<HTMLDivElement>): {
  width: number | undefined;
  height: number | undefined;
} {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  const updateSizes = (element: React.RefObject<HTMLDivElement>) => {
    setWidth((previousWidth) => {
      const nextWidth = element.current?.getBoundingClientRect().width;
      return previousWidth !== nextWidth ? nextWidth : previousWidth;
    });
    setHeight((previousHeight) => {
      const nextHeight = element.current?.getBoundingClientRect().height;
      return previousHeight !== nextHeight ? nextHeight : previousHeight;
    });
  }

  useResize(element, () => updateSizes(element));

  const myObserver = new ResizeObserver(
    (entries: ResizeObserverEntry[], observer: ResizeObserver) => {
      updateSizes(element)
    });

  useEffect(() => {
    if (!(element.current)) return

    const el = element.current

    myObserver.observe(el)
    
    return () => {      
      myObserver.unobserve(el)
    }
  }, [element])

  return { width, height };
}
