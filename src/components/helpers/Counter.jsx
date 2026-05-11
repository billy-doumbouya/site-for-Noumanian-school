// Counter.jsx
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const Counter = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const animationFrame = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px",
  });

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    const end = Number(target);
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(end * progress));
      if (progress < 1) {
        animationFrame.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame.current = requestAnimationFrame(animate);
    // pas de cleanup ici
  }, [inView]);

  return (
    <div ref={ref} className="inline-block">
      <span>
        {count}
        {suffix}
      </span>
    </div>
  );
};
