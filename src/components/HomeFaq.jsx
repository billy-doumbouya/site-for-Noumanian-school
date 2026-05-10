import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./helpers/animationSection";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqHOme } from "./fixetures";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        transition-all
        duration-500
        backdrop-blur-xl

        ${
          isOpen
            ? `
              bg-white/25
              border-white/30
              shadow-[0_8px_32px_rgba(31,38,135,0.12)]
            `
            : `
              bg-white/10
              border-white/15
              hover:bg-white/15
            `
        }
      `}
    >
      {/* Glass highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

      {/* Header */}
      <button
        onClick={onClick}
        className="
          relative
          z-10
          flex
          items-center
          justify-between
          w-full
          px-6
          py-6
          text-left
        "
      >
        <span
          className={`
            font-h3
            text-[18px]
            transition-colors
            duration-300

            ${
              isOpen
                ? "text-primary"
                : "text-primary/80 group-hover:text-primary"
            }
          `}
        >
          {question}
        </span>

        {/* Icon */}
        <div
          className={`
            flex
            items-center
            justify-center
            min-w-10
            h-10
            rounded-full
            border
            border-white/20
            bg-white/10
            backdrop-blur-md

            transition-all
            duration-500

            ${isOpen ? "rotate-180 bg-secondary/20" : ""}
          `}
        >
          <span className="material-symbols-outlined text-secondary text-[22px]">
            {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </span>
        </div>
      </button>

      {/* Content */}
      <div
        style={{
          height: isOpen ? `${height}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
        className="
          overflow-hidden
          transition-[height,opacity]
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          will-change-[height]
        "
      >
        <div
          ref={contentRef}
          className="
            relative
            z-10
            px-6
            pb-6
            pt-1
            text-on-surface-variant
            leading-relaxed
            font-body-md
          "
        >
          {answer}
        </div>
      </div>
    </div>
  );
};



function HomeFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <AnimatedSection threshold={0.3}>
      <section className="relative py-stack-lg overflow-hidden bg-gradient-to-b from-surface-container-low to-surface">
        {/* Glow background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-margin-mobile">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="uppercase tracking-[0.3em] text-secondary font-bold text-sm">
              Support
            </span>

            <h2 className="font-h2 text-h2 text-primary mt-4">
              Foire Aux Questions
            </h2>

            <p className="text-on-surface-variant mt-4 max-w-xl mx-auto leading-relaxed">
              Tout ce que vous devez savoir concernant notre établissement, les
              admissions et l'encadrement académique.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-5">
            {faqHOme.map((faq, index) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default HomeFAQ;
