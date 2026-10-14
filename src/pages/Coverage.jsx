import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Globe2,
  Headphones,
  MapPin,
  MessageCircle,
  Network,
  PhoneCall,
  Radio,
  Router,
  Search,
  Server,
  ShieldCheck,
  Wifi,
  WifiHigh,
  Zap,
} from "lucide-react";

export default function Coverage() {
  const areas = [
    "Cosmopolitan",
    "Chittagong City",
    "Nasirabad",
    "GEC Circle",
    "Chawkbazar",
    "Agrabad",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-gray-800 overflow-hidden">
      {/* =====================================================
          HERO / COVERAGE HEADER
      ===================================================== */}

      <section className="relative bg-slate-950 text-white overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-40 left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.08] blur-[120px]" />

        <div className="absolute top-[20%] right-[-180px] w-[500px] h-[500px] rounded-full bg-green-400/[0.06] blur-[120px]" />

        {/* Network grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        {/* Network lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line
            x1="5"
            y1="25"
            x2="30"
            y2="45"
            stroke="rgba(52,211,153,0.25)"
            strokeWidth="0.12"
          />

          <line
            x1="30"
            y1="45"
            x2="55"
            y2="22"
            stroke="rgba(52,211,153,0.25)"
            strokeWidth="0.12"
          />

          <line
            x1="55"
            y1="22"
            x2="78"
            y2="48"
            stroke="rgba(52,211,153,0.25)"
            strokeWidth="0.12"
          />

          <line
            x1="78"
            y1="48"
            x2="95"
            y2="30"
            stroke="rgba(52,211,153,0.25)"
            strokeWidth="0.12"
          />

          <line
            x1="15"
            y1="75"
            x2="40"
            y2="52"
            stroke="rgba(52,211,153,0.20)"
            strokeWidth="0.12"
          />

          <line
            x1="40"
            y1="52"
            x2="68"
            y2="72"
            stroke="rgba(52,211,153,0.20)"
            strokeWidth="0.12"
          />

          <line
            x1="68"
            y1="72"
            x2="92"
            y2="60"
            stroke="rgba(52,211,153,0.20)"
            strokeWidth="0.12"
          />

          {/* Moving packets */}
          <circle r="0.45" fill="#6ee7b7">
            <animateMotion
              dur="5s"
              repeatCount="indefinite"
              path="M 5,25 L 30,45 L 55,22 L 78,48 L 95,30"
            />
          </circle>

          <circle r="0.35" fill="#34d399">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              begin="1s"
              path="M 15,75 L 40,52 L 68,72 L 92,60"
            />
          </circle>
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs sm:text-sm text-emerald-300 backdrop-blur-md">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
                </span>
                FTTH Broadband Coverage
              </div>

              <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] leading-[1.05]">
                Connected where
                <span className="block mt-2 text-emerald-400">
                  you need us.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-300 leading-8">
                চট্টগ্রাম শহরের বিভিন্ন গুরুত্বপূর্ণ এলাকায় Green Broadband-এর
                broadband service coverage রয়েছে। আপনার এলাকার availability
                জানতে আমাদের সাথে যোগাযোগ করুন।
              </p>

              {/* Status */}
              <div className="flex flex-wrap gap-3 mt-8">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <WifiHigh size={17} className="text-emerald-400" />

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                      Network Type
                    </p>

                    <p className="text-sm font-medium text-white">
                      FTTH Broadband
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <MapPin size={17} className="text-emerald-400" />

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                      Service Area
                    </p>

                    <p className="text-sm font-medium text-white">Chittagong</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right network visual */}
            <div className="relative">
              <div className="absolute -inset-8 rounded-[40px] bg-emerald-500/[0.05] blur-3xl" />

              <div className="relative rounded-[30px] border border-white/10 bg-white/[0.045] backdrop-blur-2xl p-5 sm:p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-400/[0.08] border border-emerald-400/10 flex items-center justify-center">
                      <Globe2 size={20} className="text-emerald-400" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Network Coverage
                      </p>

                      <p className="text-[11px] text-slate-500">
                        Chittagong service network
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Network Active
                  </div>
                </div>

                {/* Map-style area */}
                <div className="relative h-[300px] sm:h-[350px] rounded-2xl bg-slate-950/80 border border-white/[0.07] overflow-hidden">
                  {/* Grid */}
                  <div
                    className="absolute inset-0 opacity-[0.055]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  {/* Center glow */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-emerald-500/[0.06] blur-3xl" />

                  {/* Connection lines */}
                  <div className="absolute left-[20%] top-[32%] w-[28%] h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent rotate-[24deg]" />

                  <div className="absolute right-[20%] top-[32%] w-[28%] h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent rotate-[-24deg]" />

                  <div className="absolute left-[20%] bottom-[30%] w-[28%] h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent rotate-[-24deg]" />

                  <div className="absolute right-[20%] bottom-[30%] w-[28%] h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent rotate-[24deg]" />

                  {/* Central node */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute -inset-5 rounded-full border border-emerald-400/10 animate-pulse" />

                    <div className="relative w-20 h-20 rounded-2xl bg-emerald-500/[0.08] border border-emerald-400/30 flex items-center justify-center shadow-[0_0_40px_rgba(52,211,153,0.12)]">
                      <Network size={31} className="text-emerald-400" />
                    </div>

                    <p className="text-center text-[9px] text-emerald-300 mt-2 uppercase tracking-widest">
                      Core Network
                    </p>
                  </div>

                  {/* Area nodes */}
                  {[
                    {
                      name: "Cosmopolitan",
                      position: "left-[8%] top-[17%]",
                    },
                    {
                      name: "Nasirabad",
                      position: "right-[8%] top-[17%]",
                    },
                    {
                      name: "GEC",
                      position: "left-[10%] bottom-[15%]",
                    },
                    {
                      name: "Agrabad",
                      position: "right-[10%] bottom-[15%]",
                    },
                  ].map((node, index) => (
                    <div
                      key={index}
                      className={`absolute ${node.position} text-center`}
                    >
                      <div className="relative w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                        <span className="absolute -inset-1 rounded-xl border border-emerald-400/10 animate-pulse" />

                        <MapPin
                          size={18}
                          className="relative text-emerald-400"
                        />
                      </div>

                      <p className="text-[9px] text-slate-500 mt-2">
                        {node.name}
                      </p>
                    </div>
                  ))}

                  {/* Signal */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/[0.08] border border-emerald-400/10">
                    <Radio size={12} className="text-emerald-400" />

                    <span className="text-[9px] text-emerald-300">
                      Connected Network
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 divide-x divide-white/[0.08] mt-5">
                  <div className="text-center px-2">
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                      Coverage
                    </p>

                    <p className="text-sm font-semibold text-white mt-1">
                      Chittagong
                    </p>
                  </div>

                  <div className="text-center px-2">
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                      Network
                    </p>

                    <p className="text-sm font-semibold text-emerald-400 mt-1">
                      Active
                    </p>
                  </div>

                  <div className="text-center px-2">
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                      Service
                    </p>

                    <p className="text-sm font-semibold text-white mt-1">
                      FTTH
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* =====================================================
          COVERAGE AREAS
      ===================================================== */}

      <section className="relative py-20 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
              Coverage Areas
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              Find Green Broadband
              <span className="text-emerald-600"> near you.</span>
            </h2>

            <p className="mt-4 text-gray-500 leading-7">
              বর্তমানে আমাদের network নিচের এলাকাগুলোতে service coverage প্রদান
              করছে।
            </p>
          </div>

          {/* Search-style bar */}
          <div className="max-w-xl mx-auto mt-9">
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
              <Search size={19} className="text-gray-400" />

              <span className="text-sm text-gray-400">
                আপনার এলাকার নাম খুঁজুন...
              </span>

              <div className="ml-auto hidden sm:flex items-center gap-2 text-xs text-emerald-600 font-medium">
                <MapPin size={14} />
                Chittagong
              </div>
            </div>
          </div>

          {/* Areas */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {areas.map((area, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition-all duration-300"
              >
                {/* Hover glow */}
                <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-emerald-500/[0.06] blur-2xl group-hover:bg-emerald-500/[0.12] transition-colors" />

                <div className="relative flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <MapPin size={21} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-bold text-gray-900">{area}</h3>

                      <span className="text-[10px] text-gray-300 font-medium">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-600">
                      <CheckCircle2 size={13} />
                      Coverage Area
                    </div>
                  </div>

                  <ChevronRight
                    size={17}
                    className="text-gray-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NETWORK FEATURES
      ===================================================== */}

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Network,
                title: "Fiber Network",
                text: "Modern fiber-based broadband infrastructure for connected areas.",
              },
              {
                icon: ShieldCheck,
                title: "Stable Service",
                text: "Network-focused service designed for everyday connectivity.",
              },
              {
                icon: Headphones,
                title: "Customer Support",
                text: "Our team is available to assist with connection and service issues.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-lg hover:border-emerald-100 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 leading-6">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          NOT IN COVERAGE CTA
      ===================================================== */}

      <section className="pb-20 sm:pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[28px] bg-slate-950 p-7 sm:p-10 lg:p-12 text-white">
            {/* Glow */}
            <div className="absolute -top-28 -right-28 w-72 h-72 rounded-full bg-emerald-500/[0.10] blur-3xl" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "38px 38px",
              }}
            />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                  <MapPin size={17} />
                  Can't find your area?
                </div>

                <h2 className="mt-3 text-2xl sm:text-3xl font-bold">
                  আপনার এলাকায় coverage না থাকলেও
                  <span className="text-emerald-400">
                    {" "}
                    আমাদের জানাতে পারেন।
                  </span>
                </h2>

                <p className="mt-4 text-sm sm:text-base text-slate-400 leading-7">
                  আপনার location আমাদের জানান। নতুন এলাকায় service availability
                  সম্পর্কে আমাদের team-এর সাথে যোগাযোগ করুন।
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/connection"
                  className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-5 py-3.5 text-sm font-semibold text-slate-950 transition-colors"
                >
                  Request Connection
                  <ArrowRight
                    size={17}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <a
                  href="https://wa.me/8801648582639"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] px-5 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT STRIP
      ===================================================== */}

      <section className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center">
                <PhoneCall size={17} className="text-emerald-400" />
              </div>

              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                  Contact
                </p>

                <p className="text-sm text-slate-200 mt-1">01648582639</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center">
                <MapPin size={17} className="text-emerald-400" />
              </div>

              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                  Office
                </p>

                <p className="text-sm text-slate-200 mt-1">
                  Cosmopolitan, Chittagong
                </p>
              </div>
            </div>

            <Link to="/support" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/10 flex items-center justify-center">
                <Headphones size={17} className="text-emerald-400" />
              </div>

              <div className="flex-1">
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                  Support
                </p>

                <p className="text-sm text-slate-200 mt-1 group-hover:text-emerald-400 transition-colors">
                  Contact Support
                </p>
              </div>

              <ChevronRight
                size={17}
                className="text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
