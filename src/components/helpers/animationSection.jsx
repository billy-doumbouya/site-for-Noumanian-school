// src/components/AnimatedSection.jsx

import { useInView } from "./useInview";

function AnimatedSection({
  children,
  className = "",
  threshold = 0.2,
  delay = 0,
}) {
  const { ref, isInView } = useInView({ threshold });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
