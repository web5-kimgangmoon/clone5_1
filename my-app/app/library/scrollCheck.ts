import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

export const useScrollCheck = () => {
  const { scrollY } = useScroll();
  const targetRef = useRef<HTMLElement>(null);
  const [isAnimateTarget, setIsAnimateTarget] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => {
    setIsAnimateTarget(
      v + window.innerHeight >= (targetRef.current?.offsetTop ?? 0),
    );
  });
  return { targetRef, isAnimateTarget };
};
