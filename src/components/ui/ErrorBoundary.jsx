// components/ui/ErrorBoundary.jsx
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error loading component:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center p-8 backdrop-blur-md bg-red-50/50 dark:bg-red-900/20 rounded-2xl border border-red-200 dark:border-red-800">
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
              Erreur de chargement
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Une erreur est survenue lors du chargement de cette page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Recharger la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
