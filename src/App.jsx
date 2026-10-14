import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Coverage from "./pages/Coverage";
import Connection from "./pages/Connection";
import PayBill from "./pages/PayBill";
import Support from "./pages/Support";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/coverage" element={<Coverage />} />
            <Route path="/connection" element={<Connection />} />
            <Route path="/pay-bill" element={<PayBill />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
