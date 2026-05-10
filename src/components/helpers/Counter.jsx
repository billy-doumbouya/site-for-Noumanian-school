import { useEffect, useState } from "react";
import { useInView } from "./useInview";

export const Counter = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!isInView) return;

    const end = Number(target);
    let startTimestamp = null;
    let frameId;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const updateCounter = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = easeOutCubic(progress);

      setCount(Math.floor(eased * end)); // floor ici directement

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(end); // valeur finale exacte
      }
    };

    frameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="inline-block min-w-[1ch]">
      {count}
      {suffix}
    </span>
  );
};
