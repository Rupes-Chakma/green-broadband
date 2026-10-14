import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Share2,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "8801648582639";

export default function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Hello Green Broadband, I need information about your internet service.",
  );

  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Green Broadband Logo"
                className="h-11 w-auto object-contain"
              />

              <div>
                <h3 className="text-white font-bold text-xl leading-tight">
                  Green Broadband
                </h3>

                <p className="text-green-400 text-sm font-medium">
                  Network Service
                </p>
              </div>
            </Link>

            <p className="text-sm leading-7 text-gray-400 max-w-sm">
              Green Broadband Network Service provides reliable and high-speed
              broadband internet with dependable customer support and
              connectivity.
            </p>

            {/* Social */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 text-gray-400 hover:bg-green-600 hover:text-white transition"
            >
              <Share2 size={18} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/offer" className="hover:text-green-400 transition">
                  Internet Packages
                </Link>
              </li>

              <li>
                <Link
                  to="/coverage"
                  className="hover:text-green-400 transition"
                >
                  Coverage Area
                </Link>
              </li>

              <li>
                <Link
                  to="/pay-bill"
                  className="hover:text-green-400 transition"
                >
                  Pay Bill
                </Link>
              </li>

              <li>
                <Link to="/support" className="hover:text-green-400 transition">
                  Support
                </Link>
              </li>

              <li>
                <Link
                  to="/connection"
                  className="hover:text-green-400 transition inline-flex items-center gap-1"
                >
                  Get Connection
                  <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">
              Contact Info
            </h4>

            <div className="space-y-4 text-sm">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="text-green-400 flex-shrink-0 mt-0.5"
                />

                <span>Cosmopolitan, Chittagong</span>
              </div>

              {/* Phone */}
              <a
                href="tel:+8801648582639"
                className="flex items-center gap-3 hover:text-green-400 transition"
              >
                <Phone size={18} className="text-green-400 flex-shrink-0" />

                <span>01648582639</span>
              </a>

              {/* Email */}
              <a
                href="mailto:rupeschakma.rc@gmail.com"
                className="flex items-start gap-3 hover:text-green-400 transition break-all"
              >
                <Mail
                  size={18}
                  className="text-green-400 flex-shrink-0 mt-0.5"
                />

                <span>rupeschakma.rc@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">
              Customer Support
            </h4>

            <p className="text-sm leading-6 text-gray-400 mb-5">
              Need help with your internet connection, bill payment or technical
              support? Contact our support team.
            </p>

            {/* Support Button */}
            <div className="space-y-3">
              <Link
                to="/support"
                className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-3 rounded-lg transition"
              >
                <MessageCircle size={18} />
                Contact Support
              </Link>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-gray-700 hover:border-green-500 hover:text-green-400 text-gray-300 font-medium px-4 py-3 rounded-lg transition"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Green Broadband Network Service. All
              Rights Reserved.
            </p>

            <p>Reliable Internet. Better Connectivity.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
