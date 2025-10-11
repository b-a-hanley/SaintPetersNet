import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import OurStory from "./pages/OurStory";
import BenHanley from "./pages/BenHanley";
import ContactUs from "./pages/ContactUs";
import Maintenance from "./pages/Maintenance";
import EventsCarousel from "./components/Carousel";

function App() {
  return (
    <Router>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/ben-hanley" element={<BenHanley />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/events" element={<EventsCarousel />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;



