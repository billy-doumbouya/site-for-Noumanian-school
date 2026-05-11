import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppBtn from "./components/WhatsAppBtn";
import { ScrollToTop } from "./components/ui/ScroolToTop";
import LoadingFallback from "./components/ui/LoadingFallback";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import { CustomToast } from "./components/ui/CustumeToast";

// Lazy loading des composants de page
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Levels = lazy(() => import("./pages/Levels"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));
const Primary = lazy(() => import("./pages/levels/Primary"));
const College = lazy(() => import("./pages/levels/College"));
const Computer = lazy(() => import("./pages/levels/Computer"));

function App() {
  return (
    <>
      <ScrollToTop />
      <ErrorBoundary>
        <CustomToast />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/levels" element={<Levels />} />
                <Route path="/levels/primary" element={<Primary />} />
                <Route path="/levels/college" element={<College />} />
                <Route path="/levels/computer" element={<Computer />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppBtn />
        </div>
      </ErrorBoundary>
    </>
  );
}

export default App;
