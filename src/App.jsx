import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Levels from "./pages/Levels";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Primary from "./pages/levels/Primary";
import College from "./pages/levels/College";
import Computer from "./pages/levels/Computer";
import Home from "./pages/Home";
import WhatsAppBtn from "./components/whatssapbtn";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
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
        </main>
        <Footer />
        <WhatsAppBtn />
      </div>
    </>
  );
}

export default App;
