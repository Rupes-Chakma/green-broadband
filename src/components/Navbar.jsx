import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internetOpen, setInternetOpen] = useState(false);

  const location = useLocation();

  const isInternetActive =
    location.pathname === "/offer" ||
    location.pathname === "/coverage" ||
    location.pathname === "/connection";

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setInternetOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* ================= TOP BAR ================= */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-9 flex items-center justify-between text-sm">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              Facebook
            </a>

            {/* Phone */}
            <a
              href="tel:09612022022"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <PhoneCall size={15} strokeWidth={2} />
              <span>09612 022 022</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center">
            {/* ================= LOGO + BRAND ================= */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 shrink-0"
            >
              <img
                src="/images/logo.png"
                alt="Green Broadband"
                className="h-12 w-auto object-contain"
              />

              <div className="leading-tight">
                <div className="text-xl font-bold text-gray-900">
                  Green Broadband
                </div>

                <div className="text-sm text-green-600 font-medium tracking-wide">
                  Network Service
                </div>
              </div>
            </Link>

            {/* ================= DESKTOP MENU ================= */}
            <div className="hidden md:flex flex-1 items-center justify-center gap-8">
              {/* HOME */}
              <Link
                to="/"
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === "/"
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                Home
              </Link>

              {/* ================= INTERNET DROPDOWN ================= */}
              <div
                className="relative"
                onMouseEnter={() => setInternetOpen(true)}
                onMouseLeave={() => setInternetOpen(false)}
              >
                {/* Internet Button */}
                <button
                  type="button"
                  className={`flex items-center gap-1.5 font-medium transition-colors duration-200 ${
                    isInternetActive
                      ? "text-green-600"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  <span>Internet</span>

                  <ChevronDown
                    size={16}
                    strokeWidth={2}
                    className={`transition-transform duration-200 ${
                      internetOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {internetOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                    <div className="w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                      {/* Internet Packages */}
                      <Link
                        to="/offer"
                        onClick={() => setInternetOpen(false)}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        Internet Packages
                      </Link>

                      {/* Coverage Area */}
                      <Link
                        to="/coverage"
                        onClick={() => setInternetOpen(false)}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        Coverage Area
                      </Link>

                      {/* Get Connection */}
                      <Link
                        to="/connection"
                        onClick={() => setInternetOpen(false)}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        Get Connection
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* PAY BILL */}
              <Link
                to="/pay-bill"
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === "/pay-bill"
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                Pay Bill
              </Link>

              {/* SUPPORT */}
              <Link
                to="/support"
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === "/support"
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                Support
              </Link>
            </div>

            {/* ================= GET CONNECTION ================= */}
            <div className="hidden md:block shrink-0">
              <Link
                to="/connection"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors duration-200 shadow-sm"
              >
                Get Connection
              </Link>
            </div>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden ml-auto text-gray-700 hover:text-green-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={28} strokeWidth={2} />
              ) : (
                <Menu size={28} strokeWidth={2} />
              )}
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <div className="flex flex-col">
                {/* HOME */}
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className={`px-3 py-3 font-medium rounded-lg ${
                    location.pathname === "/"
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Home
                </Link>

                {/* INTERNET MOBILE DROPDOWN */}
                <div>
                  <button
                    type="button"
                    onClick={() => setInternetOpen(!internetOpen)}
                    className={`w-full flex items-center justify-between px-3 py-3 font-medium rounded-lg ${
                      isInternetActive
                        ? "text-green-600 bg-green-50"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>Internet</span>

                    <ChevronDown
                      size={17}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${
                        internetOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Mobile Dropdown Items */}
                  {internetOpen && (
                    <div className="ml-4 mt-1 border-l-2 border-green-100 pl-3">
                      {/* Internet Packages */}
                      <Link
                        to="/offer"
                        onClick={closeMobileMenu}
                        className="block px-3 py-2.5 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      >
                        Internet Packages
                      </Link>

                      {/* Coverage Area */}
                      <Link
                        to="/coverage"
                        onClick={closeMobileMenu}
                        className="block px-3 py-2.5 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      >
                        Coverage Area
                      </Link>

                      {/* Get Connection */}
                      <Link
                        to="/connection"
                        onClick={closeMobileMenu}
                        className="block px-3 py-2.5 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      >
                        Get Connection
                      </Link>
                    </div>
                  )}
                </div>

                {/* PAY BILL */}
                <Link
                  to="/pay-bill"
                  onClick={closeMobileMenu}
                  className={`px-3 py-3 font-medium rounded-lg ${
                    location.pathname === "/pay-bill"
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Pay Bill
                </Link>

                {/* SUPPORT */}
                <Link
                  to="/support"
                  onClick={closeMobileMenu}
                  className={`px-3 py-3 font-medium rounded-lg ${
                    location.pathname === "/support"
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Support
                </Link>

                {/* GET CONNECTION */}
                <Link
                  to="/connection"
                  onClick={closeMobileMenu}
                  className="mt-2 bg-green-600 hover:bg-green-700 text-white text-center px-5 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Connection
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
