import React, { useState } from "react";
import {
  UserRound,
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Wifi,
  Building2,
  Home,
  CircleCheckBig,
  Headphones,
  ShieldCheck,
  Zap,
  Wrench,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "8801648582639";

export default function Connection() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    package: "",
    connectionType: "Home",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
🌐 *GREEN BROADBAND*
📡 *New Connection Request*

━━━━━━━━━━━━━━━━━━

👤 *Customer Information*

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}

━━━━━━━━━━━━━━━━━━

📍 *Installation Address*

${formData.address}

━━━━━━━━━━━━━━━━━━

📦 *Connection Details*

Package: ${formData.package}
Connection Type: ${formData.connectionType}

━━━━━━━━━━━━━━━━━━

💬 *Additional Message*

${formData.message || "No additional message"}

━━━━━━━━━━━━━━━━━━

Please contact the customer regarding the new internet connection.

Thank you.
    `;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);

    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      package: "",
      connectionType: "Home",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-6">
            <Wifi size={32} strokeWidth={2} className="text-green-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Get Your Internet Connection
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            আপনার বাসা বা অফিসের জন্য দ্রুত ও নির্ভরযোগ্য Internet Connection
            পেতে নিচের form টি পূরণ করুন।
          </p>
        </div>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ================= FORM ================= */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              {submitted ? (
                /* ================= SUCCESS ================= */
                <div className="min-h-[500px] flex items-center justify-center">
                  <div className="text-center max-w-lg">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CircleCheckBig size={42} strokeWidth={2} />
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900">
                      Request Submitted!
                    </h2>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                      আপনার connection request তৈরি হয়েছে। WhatsApp-এর মাধ্যমে
                      request পাঠানো হয়েছে। আমাদের team আপনার সাথে যোগাযোগ করবে।
                    </p>

                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                      >
                        <MessageCircle size={18} />
                        WhatsApp
                      </a>

                      <button
                        type="button"
                        onClick={resetForm}
                        className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-green-500 hover:text-green-600 text-gray-700 px-6 py-3 rounded-xl font-semibold transition"
                      >
                        New Request
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Form Header */}
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Request a New Connection
                    </h2>

                    <p className="text-gray-500 text-sm mt-2">
                      আপনার তথ্য দিয়ে form পূরণ করুন। Submit করার পর WhatsApp
                      খুলবে।
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* ================= NAME + PHONE ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>

                        <div className="relative">
                          <UserRound
                            size={18}
                            strokeWidth={2}
                            className="absolute left-3 top-3.5 text-gray-400"
                          />

                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>

                        <div className="relative">
                          <PhoneCall
                            size={18}
                            strokeWidth={2}
                            className="absolute left-3 top-3.5 text-gray-400"
                          />

                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="01XXXXXXXXX"
                            pattern="01[0-9]{9}"
                            title="Please enter a valid Bangladeshi mobile number"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* ================= EMAIL + CONNECTION TYPE ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>

                        <div className="relative">
                          <Mail
                            size={18}
                            strokeWidth={2}
                            className="absolute left-3 top-3.5 text-gray-400"
                          />

                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@email.com"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      {/* Connection Type */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Connection Type *
                        </label>

                        <div className="relative">
                          <Building2
                            size={18}
                            strokeWidth={2}
                            className="absolute left-3 top-3.5 text-gray-400 pointer-events-none"
                          />

                          <select
                            name="connectionType"
                            value={formData.connectionType}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                          >
                            <option value="Home">Home</option>
                            <option value="Corporate / Office">
                              Corporate / Office
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* ================= ADDRESS ================= */}
                    <div className="mt-5">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Installation Address *
                      </label>

                      <div className="relative">
                        <MapPin
                          size={18}
                          strokeWidth={2}
                          className="absolute left-3 top-3.5 text-gray-400"
                        />

                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          rows="3"
                          placeholder="Enter your full installation address"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* ================= PACKAGE ================= */}
                    <div className="mt-5">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Internet Package *
                      </label>

                      <div className="relative">
                        <Wifi
                          size={18}
                          strokeWidth={2}
                          className="absolute left-3 top-3.5 text-gray-400 pointer-events-none"
                        />

                        <select
                          name="package"
                          value={formData.package}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="">Select a package</option>

                          <option value="10 Mbps">10 Mbps</option>
                          <option value="20 Mbps">20 Mbps</option>
                          <option value="30 Mbps">30 Mbps</option>
                          <option value="40 Mbps">40 Mbps</option>
                          <option value="50 Mbps">50 Mbps</option>
                          <option value="100 Mbps">100 Mbps</option>
                          <option value="Custom Package">Custom Package</option>
                        </select>
                      </div>

                      <p className="text-xs text-gray-400 mt-2">
                        আপনার প্রয়োজন অনুযায়ী package নির্বাচন করুন।
                      </p>
                    </div>

                    {/* ================= MESSAGE ================= */}
                    <div className="mt-5">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Message
                      </label>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Any additional information..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    {/* ================= SUBMIT ================= */}
                    <button
                      type="submit"
                      className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <Send size={18} strokeWidth={2} />
                      Request Connection
                    </button>

                    <p className="text-xs text-gray-400 mt-3">
                      Submit করার পর WhatsApp খুলবে এবং আপনার connection request
                      automatically তৈরি হবে।
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* ================= SIDEBAR ================= */}
            <div className="space-y-6">
              {/* Why Choose */}
              <div className="bg-gray-900 text-white rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-5">
                  <Wifi size={25} strokeWidth={2} className="text-green-400" />
                </div>

                <h3 className="text-xl font-bold mb-5">
                  Why Choose Green Broadband?
                </h3>

                <div className="space-y-5">
                  {/* Fast Internet */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Zap
                        size={19}
                        strokeWidth={2}
                        className="text-green-400"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        Fast & Stable Internet
                      </h4>

                      <p className="text-sm text-gray-400 mt-1">
                        Reliable internet connection for your home and office.
                      </p>
                    </div>
                  </div>

                  {/* Reliable */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck
                        size={19}
                        strokeWidth={2}
                        className="text-green-400"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        Reliable Service
                      </h4>

                      <p className="text-sm text-gray-400 mt-1">
                        Enjoy a dependable connection with professional service.
                      </p>
                    </div>
                  </div>

                  {/* Support */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Headphones
                        size={19}
                        strokeWidth={2}
                        className="text-green-400"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        Quick Support
                      </h4>

                      <p className="text-sm text-gray-400 mt-1">
                        Our support team is ready to help when you need us.
                      </p>
                    </div>
                  </div>

                  {/* Technical */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Wrench
                        size={19}
                        strokeWidth={2}
                        className="text-green-400"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        Technical Support
                      </h4>

                      <p className="text-sm text-gray-400 mt-1">
                        Get professional technical assistance for your
                        connection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Need Help */}
              <div className="bg-white border border-gray-200 rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-5">
                  <MessageCircle
                    size={25}
                    strokeWidth={2}
                    className="text-green-600"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Need Help?
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  Connection নেওয়ার আগে কোনো তথ্য জানতে চাইলে আমাদের সাথে
                  যোগাযোগ করুন।
                </p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl font-semibold transition"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How It Works
            </h2>

            <p className="text-gray-500 mt-3">
              নতুন Internet Connection নেওয়ার সহজ প্রক্রিয়া
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                01
              </div>

              <h3 className="font-bold text-gray-900 mb-2">Submit Request</h3>

              <p className="text-sm text-gray-500">
                Connection form পূরণ করুন।
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight size={24} className="text-green-500" />
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                02
              </div>

              <h3 className="font-bold text-gray-900 mb-2">Contact You</h3>

              <p className="text-sm text-gray-500">
                Our team আপনার সাথে যোগাযোগ করবে।
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight size={24} className="text-green-500" />
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                03
              </div>

              <h3 className="font-bold text-gray-900 mb-2">Installation</h3>

              <p className="text-sm text-gray-500">
                Verification-এর পর connection installation হবে।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <Home size={28} className="text-green-400" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Get Connected?
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            আপনার বাসা বা অফিসে Green Broadband Internet Connection নিতে আজই
            request করুন।
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3.5 rounded-xl font-semibold transition"
          >
            <MessageCircle size={19} />
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
