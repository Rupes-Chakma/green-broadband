import React, { useState } from "react";
import {
  Search,
  UserRound,
  PhoneCall,
  Wifi,
  CalendarDays,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  RefreshCcw,
  MessageCircle,
  ReceiptText,
  WalletCards,
} from "lucide-react";

const WHATSAPP_NUMBER = "8801648582639";

// Demo customer data
const BILL_DATA = {
  "01648582639": {
    name: "Rupes Chakma",
    phone: "01648582639",
    customerId: "GB-1001",
    package: "20 Mbps",
    bill: 800,
    billingMonth: "October 2026",
    dueDate: "10 October 2026",
    status: "Unpaid",
  },

  "GB-1001": {
    name: "Rupes Chakma",
    phone: "01648582639",
    customerId: "GB-1001",
    package: "20 Mbps",
    bill: 800,
    billingMonth: "October 2026",
    dueDate: "10 October 2026",
    status: "Unpaid",
  },
};

export default function PayBill() {
  const [searchValue, setSearchValue] = useState("");
  const [customer, setCustomer] = useState(null);
  const [searched, setSearched] = useState(false);
  const [paymentRequested, setPaymentRequested] = useState(false);
  const [error, setError] = useState("");

  const handleCheckBill = (e) => {
    e.preventDefault();

    const value = searchValue.trim();

    if (!value) {
      setError("Please enter your User ID or mobile number.");
      return;
    }

    const result = BILL_DATA[value];

    if (result) {
      setCustomer(result);
      setSearched(true);
      setPaymentRequested(false);
      setError("");
    } else {
      setCustomer(null);
      setSearched(true);
      setPaymentRequested(false);
      setError(
        "এই User ID / Mobile Number-এর কোনো bill information পাওয়া যায়নি।",
      );
    }
  };

  const handlePaymentRequest = () => {
    if (!customer) return;

    const message = `
💳 *GREEN BROADBAND*
📄 *Bill Payment Request*

━━━━━━━━━━━━━━━━━━

👤 *Customer Information*

Name: ${customer.name}
Phone: ${customer.phone}
Customer ID: ${customer.customerId}

━━━━━━━━━━━━━━━━━━

📦 *Package*

${customer.package}

📅 Billing Month:
${customer.billingMonth}

📆 Due Date:
${customer.dueDate}

💰 Total Due:
৳ ${customer.bill}

━━━━━━━━━━━━━━━━━━

Customer wants to pay the internet bill.

Please provide the payment instructions.

Thank you.
    `;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL, "_blank");

    setPaymentRequested(true);
  };

  const handleSearchAnother = () => {
    setSearchValue("");
    setCustomer(null);
    setSearched(false);
    setPaymentRequested(false);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="bg-gray-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-6">
            <ReceiptText size={32} strokeWidth={2} className="text-green-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">Pay Your Bill</h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            আপনার User ID অথবা Mobile Number দিয়ে বর্তমান Internet Bill চেক করুন
            এবং payment request পাঠান।
          </p>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {!searched ? (
            /* ================= SEARCH ================= */
            <div className="max-w-xl mx-auto">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                <div className="text-center mb-8">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Search
                      size={27}
                      strokeWidth={2}
                      className="text-green-600"
                    />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900">
                    Check Your Bill
                  </h2>

                  <p className="text-sm text-gray-500 mt-2">
                    আপনার User ID অথবা Mobile Number দিন।
                  </p>
                </div>

                <form onSubmit={handleCheckBill}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    User ID / Mobile Number *
                  </label>

                  <div className="relative">
                    <Search
                      size={19}
                      strokeWidth={2}
                      className="absolute left-3 top-3.5 text-gray-400"
                    />

                    <input
                      type="text"
                      value={searchValue}
                      onChange={(e) => {
                        setSearchValue(e.target.value);
                        setError("");
                      }}
                      placeholder="016XXXXXXXXX বা GB-1001"
                      className="w-full pl-10 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  {error && !searched && (
                    <div className="mt-3 flex items-start gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl p-3">
                      <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />

                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full mt-5 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <Search size={19} />
                    Check Bill
                  </button>
                </form>

                {/* Demo information */}
                <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    <span className="font-semibold text-gray-700">Demo:</span>{" "}
                    আপনি test করার জন্য{" "}
                    <span className="font-semibold text-green-600">
                      01648582639
                    </span>{" "}
                    অথবা{" "}
                    <span className="font-semibold text-green-600">
                      GB-1001
                    </span>{" "}
                    ব্যবহার করতে পারেন।
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* ================= RESULT ================= */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* ================= BILL CARD ================= */}
              <div className="lg:col-span-2">
                {customer ? (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    {/* Card Header */}
                    <div className="bg-gray-900 text-white px-6 md:px-8 py-6">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-gray-400 text-sm">Current Bill</p>

                          <h2 className="text-2xl font-bold mt-1">
                            Bill Details
                          </h2>
                        </div>

                        <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                          <ReceiptText size={24} className="text-green-400" />
                        </div>
                      </div>
                    </div>

                    {/* Customer */}
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-gray-200">
                        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                          <UserRound
                            size={27}
                            strokeWidth={2}
                            className="text-green-600"
                          />
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {customer.name}
                          </h3>

                          <p className="text-sm text-gray-500 mt-1">
                            Customer ID:{" "}
                            <span className="font-medium text-gray-700">
                              {customer.customerId}
                            </span>
                          </p>
                        </div>

                        <div className="sm:ml-auto">
                          {customer.status === "Paid" ? (
                            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded-full text-sm font-semibold">
                              <CheckCircle2 size={16} />
                              Paid
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-2 rounded-full text-sm font-semibold">
                              <AlertCircle size={16} />
                              Unpaid
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        {/* Phone */}
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                              <PhoneCall size={19} className="text-green-600" />
                            </div>

                            <div>
                              <p className="text-xs text-gray-500">
                                Mobile Number
                              </p>

                              <p className="text-sm font-semibold text-gray-900 mt-1">
                                {customer.phone}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Package */}
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                              <Wifi size={19} className="text-green-600" />
                            </div>

                            <div>
                              <p className="text-xs text-gray-500">
                                Internet Package
                              </p>

                              <p className="text-sm font-semibold text-gray-900 mt-1">
                                {customer.package}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Billing Month */}
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                              <CalendarDays
                                size={19}
                                className="text-green-600"
                              />
                            </div>

                            <div>
                              <p className="text-xs text-gray-500">
                                Billing Month
                              </p>

                              <p className="text-sm font-semibold text-gray-900 mt-1">
                                {customer.billingMonth}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Due Date */}
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                              <CalendarDays
                                size={19}
                                className="text-green-600"
                              />
                            </div>

                            <div>
                              <p className="text-xs text-gray-500">Due Date</p>

                              <p className="text-sm font-semibold text-gray-900 mt-1">
                                {customer.dueDate}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-6">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-sm text-gray-600">
                              Total Amount Due
                            </p>

                            <p className="text-3xl font-extrabold text-green-600 mt-1">
                              ৳ {customer.bill}
                            </p>
                          </div>

                          <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
                            <CreditCard size={27} className="text-green-600" />
                          </div>
                        </div>
                      </div>

                      {/* Payment */}
                      {customer.status === "Paid" ? (
                        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5 flex items-center gap-3 text-green-700">
                          <CheckCircle2 size={23} />

                          <div>
                            <p className="font-semibold">Payment Completed</p>

                            <p className="text-sm mt-1">
                              এই bill ইতোমধ্যে paid হয়েছে।
                            </p>
                          </div>
                        </div>
                      ) : paymentRequested ? (
                        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5">
                          <div className="flex items-start gap-3">
                            <CheckCircle2
                              size={24}
                              className="text-green-600 flex-shrink-0"
                            />

                            <div>
                              <h3 className="font-bold text-green-700">
                                Payment Request Sent
                              </h3>

                              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                                WhatsApp-এ payment request পাঠানো হয়েছে। আমাদের
                                team আপনাকে payment instructions দেবে।
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={handlePaymentRequest}
                          className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                          <MessageCircle size={19} />
                          Request Payment via WhatsApp
                        </button>
                      )}

                      {/* Search another */}
                      <button
                        type="button"
                        onClick={handleSearchAnother}
                        className="mt-3 w-full inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-green-500 hover:text-green-600 text-gray-700 font-medium py-3 rounded-xl transition"
                      >
                        <RefreshCcw size={17} />
                        Search Another Bill
                      </button>
                    </div>
                  </div>
                ) : (
                  /* ================= NO RESULT ================= */
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <AlertCircle size={32} className="text-red-500" />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">
                      Bill Not Found
                    </h2>

                    <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
                      {error}
                    </p>

                    <button
                      type="button"
                      onClick={handleSearchAnother}
                      className="mt-6 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition"
                    >
                      <ArrowLeft size={18} />
                      Search Again
                    </button>
                  </div>
                )}
              </div>

              {/* ================= SIDEBAR ================= */}
              <div className="space-y-6">
                {/* Payment Methods */}
                <div className="bg-gray-900 text-white rounded-2xl p-7">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-5">
                    <WalletCards size={25} className="text-green-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">Payment Options</h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    Payment করার জন্য আমাদের team-এর সাথে WhatsApp-এ যোগাযোগ
                    করুন।
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                      <div className="w-9 h-9 bg-green-500/10 rounded-lg flex items-center justify-center">
                        <WalletCards size={18} className="text-green-400" />
                      </div>

                      <span className="text-sm text-gray-200">bKash</span>
                    </div>

                    <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                      <div className="w-9 h-9 bg-green-500/10 rounded-lg flex items-center justify-center">
                        <WalletCards size={18} className="text-green-400" />
                      </div>

                      <span className="text-sm text-gray-200">Nagad</span>
                    </div>

                    <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                      <div className="w-9 h-9 bg-green-500/10 rounded-lg flex items-center justify-center">
                        <CreditCard size={18} className="text-green-400" />
                      </div>

                      <span className="text-sm text-gray-200">
                        Card Payment
                      </span>
                    </div>
                  </div>
                </div>

                {/* Need Help */}
                <div className="bg-white border border-gray-200 rounded-2xl p-7">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-5">
                    <MessageCircle size={25} className="text-green-600" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Need Help?
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    Bill বা payment সম্পর্কে কোনো সমস্যা হলে আমাদের Support
                    Team-এর সাথে যোগাযোগ করুন।
                  </p>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl font-semibold transition"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Support
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= BOTTOM INFO ================= */}
      <section className="bg-white border-t border-gray-200 py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Easy & Convenient Bill Payment
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            আপনার bill check করুন এবং payment-এর জন্য আমাদের team-এর সাথে সহজেই
            যোগাযোগ করুন।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <Search size={28} className="text-green-600 mx-auto mb-4" />

              <h3 className="font-bold text-gray-900">Check Bill</h3>

              <p className="text-sm text-gray-500 mt-2">
                User ID অথবা mobile number দিয়ে bill check করুন।
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <CreditCard size={28} className="text-green-600 mx-auto mb-4" />

              <h3 className="font-bold text-gray-900">Request Payment</h3>

              <p className="text-sm text-gray-500 mt-2">
                WhatsApp-এর মাধ্যমে payment request পাঠান।
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <CheckCircle2 size={28} className="text-green-600 mx-auto mb-4" />

              <h3 className="font-bold text-gray-900">Get Confirmation</h3>

              <p className="text-sm text-gray-500 mt-2">
                Payment-এর পর confirmation নিন।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
