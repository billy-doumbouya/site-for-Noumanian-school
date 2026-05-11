const LoadingFallback = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/30 dark:bg-black/30" />

      {/* Main loading container */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 rounded-2xl backdrop-blur-md bg-white/20 dark:bg-black/20 shadow-2xl border border-white/30 dark:border-white/20 animate-fadeIn">
        {/* Spinner */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full backdrop-blur-sm bg-white/40 dark:bg-white/10 border border-white/50 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full border-4 border-t-transparent border-b-transparent border-blue-500 dark:border-blue-400 animate-spin" />
          </div>

          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-ping" />
        </div>

        {/* Loading text */}
        <div className="text-center mt-6">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-800 via-blue-600 to-gray-800 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
            Chargement en cours
          </h3>

          {/* Animated dots */}
          <div className="flex justify-center gap-1 mt-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]" />
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]" />
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingFallback;
