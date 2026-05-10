import { useState } from "react";
import { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

function FAQItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className={`
        group
        relative
        overflow-hidden

        rounded-2xl

        border
        border-white/10

        bg-white/10
        backdrop-blur-xl

        shadow-[0_8px_30px_rgba(0,0,0,0.06)]

        transition-all
        duration-500
      `}
    >
      {/* soft glass glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

      {/* Header */}
      <button
        onClick={onToggle}
        className="
          relative z-10
          w-full
          flex
          items-center
          justify-between
          gap-4

          p-6

          text-left
        "
      >
        <span
          className={`
            font-h3 text-[18px] transition-colors duration-300
            ${isOpen ? "text-primary" : "text-primary/80"}
          `}
        >
          {item.q}
        </span>

        <ChevronDown
          size={20}
          className={`
            text-secondary
            transition-transform duration-500
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Animated content */}
      <div
        style={{ height }}
        className="
          overflow-hidden
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        "
      >
        <div ref={contentRef} className="px-6 pb-6">
          <div className="pt-2 border-t border-white/10 text-on-surface-variant font-body-md leading-relaxed">
            {item.a}
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQ({ title, subtitle, text, items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-stack-lg">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-surface" />

      <div className="relative max-w-[800px] mx-auto px-margin-mobile">
        {/* Header */}
        <div className="text-center mb-12">
          <div className=" flex items-center gap-2 flex-wrap justify-center  mb-2">
            <h2 className="font-h2 text-h2 text-primary ">{title}</h2>

            {subtitle && <p className="text-on-surface-variant ">{subtitle}</p>}
          </div>
          {text && (
            <p className="text-on-surface-variant mt-4 max-w-xl mx-auto leading-relaxed">
              {text}
            </p>
          )}
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
