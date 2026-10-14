import React, { useState } from "react";
import {
  AlertCircle,
  Wifi,
  Headphones,
  User,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";

export default function Support() {
  const [activeForm, setActiveForm] = useState("internet");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    customerId: "",
    subject: "",
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

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        customerId: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-6">
            <Headphones size={32} className="text-green-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            How Can We Help You?
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            আপনার ইন্টারনেট সংক্রান্ত যেকোনো সমস্যা, অভিযোগ অথবা সহায়তার জন্য
            আমাদের Support Team-এর সাথে যোগাযোগ করুন।
          </p>
        </div>
      </section>

      {/* ================= SUPPORT OPTIONS ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {/* Internet Problem */}
            <button
              onClick={() => setActiveForm("internet")}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                activeForm === "internet"
                  ? "border-green-500 bg-green-50 shadow-lg"
                  : "border-gray-200 bg-white hover:border-green-400 hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Wifi size={25} className="text-green-600" />
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  Internet Problem
                </h3>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                Internet slow, disconnected, LOS বা অন্য কোনো কানেকশন সমস্যার
                জন্য জানান।
              </p>
            </button>

            {/* Complaint */}
            <button
              onClick={() => setActiveForm("complaint")}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                activeForm === "complaint"
                  ? "border-green-500 bg-green-50 shadow-lg"
                  : "border-gray-200 bg-white hover:border-green-400 hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <AlertCircle size={25} className="text-red-500" />
                </div>

                <h3 className="text-lg font-bold text-gray-900">Complaint</h3>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                সার্ভিস, বিলিং অথবা অন্য কোনো অভিযোগ থাকলে আমাদের জানান।
              </p>
            </button>

            {/* Contact Support */}
            <button
              onClick={() => setActiveForm("contact")}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                activeForm === "contact"
                  ? "border-green-500 bg-green-50 shadow-lg"
                  : "border-gray-200 bg-white hover:border-green-400 hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <MessageSquare size={25} className="text-blue-500" />
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  Contact Support
                </h3>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                যেকোনো সাধারণ প্রশ্ন বা তথ্যের জন্য আমাদের Support Team-এর সাথে
                যোগাযোগ করুন।
              </p>
            </button>
          </div>

          {/* ================= FORM + CONTACT INFO ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ================= FORM ================= */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <div className="mb-7">
                <h2 className="text-2xl font-bold text-gray-900">
                  {activeForm === "internet"
                    ? "Report Internet Problem"
                    : activeForm === "complaint"
                      ? "Submit a Complaint"
                      : "Contact Support"}
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  নিচের তথ্যগুলো পূরণ করে আমাদের কাছে পাঠান।
                </p>
              </div>

              {/* SUCCESS MESSAGE */}
              {submitted && (
                <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl">
                  <CheckCircle size={22} />

                  <div>
                    <p className="font-semibold">
                      Request Submitted Successfully!
                    </p>

                    <p className="text-sm">
                      আমাদের Support Team খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Name + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>

                    <div className="relative">
                      <User
                        size={18}
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>

                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-3 top-3.5 text-gray-400"
                      />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="01XXXXXXXXX"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Email + Customer ID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail
                        size={18}
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Customer ID
                    </label>

                    <input
                      type="text"
                      name="customerId"
                      value={formData.customerId}
                      onChange={handleChange}
                      placeholder="Enter customer ID"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mt-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select a problem</option>

                    {activeForm === "internet" && (
                      <>
                        <option value="Internet Not Working">
                          Internet Not Working
                        </option>

                        <option value="Slow Internet">Slow Internet</option>

                        <option value="LOS Problem">LOS Problem</option>

                        <option value="Frequent Disconnection">
                          Frequent Disconnection
                        </option>

                        <option value="WiFi Problem">WiFi Problem</option>
                      </>
                    )}

                    {activeForm === "complaint" && (
                      <>
                        <option value="Service Complaint">
                          Service Complaint
                        </option>

                        <option value="Billing Complaint">
                          Billing Complaint
                        </option>

                        <option value="Support Complaint">
                          Support Complaint
                        </option>

                        <option value="Other Complaint">Other Complaint</option>
                      </>
                    )}

                    {activeForm === "contact" && (
                      <>
                        <option value="Package Information">
                          Package Information
                        </option>

                        <option value="New Connection">New Connection</option>

                        <option value="General Inquiry">General Inquiry</option>

                        <option value="Other">Other</option>
                      </>
                    )}
                  </select>
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder={
                      activeForm === "internet"
                        ? "Describe your internet problem..."
                        : activeForm === "complaint"
                          ? "Write your complaint..."
                          : "How can we help you?"
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-6 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <Send size={18} />
                  Submit Request
                </button>
              </form>
            </div>

            {/* ================= CONTACT SIDEBAR ================= */}
            <div className="space-y-6">
              {/* Support Card */}
              <div className="bg-gray-900 text-white rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-5">
                  <Headphones size={25} className="text-green-400" />
                </div>

                <h3 className="text-xl font-bold mb-3">Need Immediate Help?</h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  জরুরি ইন্টারনেট সমস্যার জন্য সরাসরি আমাদের Support Team-এর
                  সাথে যোগাযোগ করুন।
                </p>

                <a
                  href="tel:01648582639"
                  className="flex items-center gap-3 bg-green-600 hover:bg-green-700 px-4 py-3 rounded-xl transition"
                >
                  <Phone size={18} />
                  <span className="font-semibold">01648582639</span>
                </a>
              </div>

              {/* Contact Information */}
              <div className="bg-white border border-gray-200 rounded-2xl p-7">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <MapPin size={19} className="text-green-600" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Office Address
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        Cosmopolitan, Chittagong
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Phone size={19} className="text-green-600" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Phone
                      </p>

                      <a
                        href="tel:01648582639"
                        className="text-sm text-gray-500 hover:text-green-600 mt-1 block"
                      >
                        01648582639
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Mail size={19} className="text-green-600" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Email
                      </p>

                      <a
                        href="mailto:rupeschakma.rc@gmail.com"
                        className="text-sm text-gray-500 hover:text-green-600 mt-1 block break-all"
                      >
                        rupeschakma.rc@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ / HELP SECTION ================= */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Before Contacting Support
          </h2>

          <p className="text-gray-500 mb-10">
            কিছু সাধারণ সমস্যা আপনি নিজেই দ্রুত সমাধান করতে পারেন।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <Wifi size={28} className="text-green-600 mx-auto mb-4" />

              <h3 className="font-semibold text-gray-900 mb-2">Check Router</h3>

              <p className="text-sm text-gray-500">
                Router-এর power এবং internet light ঠিক আছে কিনা পরীক্ষা করুন।
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <AlertCircle size={28} className="text-green-600 mx-auto mb-4" />

              <h3 className="font-semibold text-gray-900 mb-2">
                Restart Device
              </h3>

              <p className="text-sm text-gray-500">
                Router/ONU বন্ধ করে ৩০ সেকেন্ড পর আবার চালু করুন।
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <Headphones size={28} className="text-green-600 mx-auto mb-4" />

              <h3 className="font-semibold text-gray-900 mb-2">
                Still Not Working?
              </h3>

              <p className="text-sm text-gray-500">
                সমস্যা থাকলে Support Team-এর সাথে যোগাযোগ করুন।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
