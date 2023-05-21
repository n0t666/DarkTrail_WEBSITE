import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Navbar/footer";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Videos from "./pages/videos";
import Gallery from "./pages/gallery";
import Functionalities from "./pages/functionalities";
import News from "./pages/news";
import Faq from "./pages/faq";
import NotFound from "./pages/errors/404";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/features" element={<Functionalities />} />
        <Route path="/news" element={<News />} />
        <Route path="/FAQ" element={<Faq />} />

        {/* 👇️ only match this when no other routes match */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
