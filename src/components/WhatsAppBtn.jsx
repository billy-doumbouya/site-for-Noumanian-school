import { useState, useEffect } from "react";

function WhatsAppBtn() {
  const phone = "221771234567";
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show button only after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-show tooltip on first visit
  useEffect(() => {
    const hasSeenTooltip = localStorage.getItem("whatsapp_tooltip_seen");
    if (!hasSeenTooltip) {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
        localStorage.setItem("whatsapp_tooltip_seen", "true");
      }, 5000);
    }
  }, []);

  const message =
    "Bonjour ! Je viens de visiter votre site et j'aimerais avoir plus d'informations.";

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip with glassmorphism */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 mb-2 w-64 p-3 rounded-xl backdrop-blur-md bg-surface-container-low/95 border border-primary/20 shadow-xl animate-fade-in-up">
          {/* Tooltip arrow */}
          <div className="absolute -bottom-2 right-4 w-4 h-4 rotate-45 bg-surface-container-low/95 border-r border-b border-primary/20" />

          <p className="text-sm text-on-surface font-body-md font-semibold">
            💬 Besoin d'aide ?
          </p>
          <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
            Cliquez ici pour nous contacter directement sur WhatsApp
          </p>
        </div>
      )}

      {/* Main WhatsApp Button with glass morphism */}
      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noreferrer"
        className="relative block transition-all duration-300 hover:scale-110 active:scale-95"
        onMouseEnter={() => {
          // Optional: hide tooltip on hover
          if (showTooltip) {
            setTimeout(() => setShowTooltip(false), 1000);
          }
        }}
      >
        {/* Outer glow effect - pulsing */}
        <div
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-pulse-glow"
          style={{ filter: "blur(12px)" }}
        />

        {/* Pulsing ring effect */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping-ring" />

        {/* Main button */}
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-2xl transition-all duration-300 hover:shadow-[#25D366]/50 group-hover:shadow-xl">
          {/* Glass reflection overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />

          {/* Inner glass effect */}
          <div className="absolute inset-1 rounded-full bg-white/10 backdrop-blur-[2px]" />

          {/* WhatsApp Icon */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.928 11.928 0 0012 0C5.373 0 0 5.373 0 12a11.75 11.75 0 001.72 6.33L0 24l5.88-1.54A11.914 11.914 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52zm-8.52 18.16a9.7 9.7 0 01-4.95-1.32l-.35-.21-3.5.92.94-3.41-.23-.36A9.703 9.703 0 012.8 12c0-5.34 4.34-9.68 9.68-9.68 2.59 0 5.02 1.01 6.84 2.83A9.688 9.688 0 0120.2 12c0 5.34-4.34 9.68-9.68 9.68zm5.4-7.28c-.29-.15-1.72-.85-1.98-.95-.26-.1-.45-.15-.64.15-.19.29-.74.95-.91 1.14-.16.19-.33.21-.62.07-.29-.15-1.22-.45-2.33-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.1-.23-.55-.47-.48-.64-.49-.16-.01-.36-.01-.55-.01a1.2 1.2 0 00-.86.4c-.3.33-1.14 1.12-1.14 2.73 0 1.61 1.17 3.16 1.33 3.38.16.22 2.3 3.5 5.57 4.91 3.26 1.41 3.26 0.94 3.85 0.88.59-.06 1.92-.78 2.19-1.52.27-.74.27-1.38.19-1.52-.08-.14-.29-.22-.6-.37z" />
            </svg>
          </div>
        </div>

        {/* Notification badge (optional) */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      </a>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pingRing {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          75%,
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out;
        }

        .animate-ping-ring {
          animation: pingRing 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default WhatsAppBtn;
