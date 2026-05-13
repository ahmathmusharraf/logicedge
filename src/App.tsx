/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BookingProvider } from "./context/BookingContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import WhatsAppButton from "./components/WhatsAppButton";
import BookingModal from "./components/BookingModal";
import Footer from "./components/Footer";
import DynamicBackground from "./components/DynamicBackground";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // If element not found, it might be due to page transition delay
        const timeoutId = setTimeout(() => {
          const delayedElement = document.getElementById(id);
          if (delayedElement) delayedElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BookingProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-background text-white relative">
            <DynamicBackground />
            <Navbar />
            <main className="relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
              </Routes>
            </main>
            <WhatsAppButton />
            <BookingModal />
            <Footer />
          </div>
        </Router>
      </BookingProvider>
    </HelmetProvider>
  );
}
