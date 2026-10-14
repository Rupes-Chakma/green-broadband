import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  Globe2,
  Headphones,
  Home as HomeIcon,
  MapPin,
  MessageCircle,
  Network,
  PhoneCall,
  Router,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  Tv,
  Users,
  Wifi,
  WifiHigh,
  Wrench,
  Zap,
} from "lucide-react";

/* =========================================================
   NETWORK BACKGROUND
========================================================= */

const NetworkBackground = () => {
  const nodes = [
    { x: 7, y: 18 },
    { x: 18, y: 58 },
    { x: 31, y: 25 },
    { x: 43, y: 72 },
    { x: 55, y: 34 },
    { x: 67, y: 66 },
    { x: 78, y: 23 },
    { x: 91, y: 52 },
    { x: 96, y: 78 },
  ];

  const lines = [
    [7, 18, 31, 25],
    [7, 18, 18, 58],
    [18, 58, 31, 25],
    [18, 58, 43, 72],
    [31, 25, 43, 72],
    [31, 25, 55, 34],
    [43, 72, 55, 34],
    [43, 72, 67, 66],
    [55, 34, 67, 66],
    [55, 34, 78, 23],
    [67, 66, 78, 23],
    [67, 66, 91, 52],
    [78, 23, 91, 52],
    [91, 52, 96, 78],
    [67, 66, 96, 78],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large ambient glows */}
      <div className="absolute -top-48 left-[8%] w-[600px] h-[600px] rounded-full bg-emerald-500/[0.09] blur-[120px]" />

      <div className="absolute top-[30%] right-[-180px] w-[600px] h-[600px] rounded-full bg-green-400/[0.07] blur-[120px]" />

      <div className="absolute bottom-[-250px] left-[35%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.05] blur-[100px]" />

      {/* Network SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {lines.map((line, index) => {
          const [x1, y1, x2, y2] = line;

          return (
            <line
              key={index}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="rgba(52,211,153,0.20)"
              strokeWidth="0.12"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}

        {/* Moving light packets */}
        <circle r="0.45" fill="#6ee7b7">
          <animateMotion
            dur="5s"
            repeatCount="indefinite"
            path="M 7,18 L 31,25 L 55,34 L 78,23 L 91,52"
          />
        </circle>

        <circle r="0.35" fill="#34d399">
          <animateMotion
            dur="6.5s"
            repeatCount="indefinite"
            begin="1.5s"
            path="M 18,58 L 43,72 L 67,66 L 91,52 L 96,78"
          />
        </circle>

        <circle r="0.3" fill="#a7f3d0">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            begin="2s"
            path="M 7,18 L 18,58 L 43,72 L 67,66 L 78,23"
          />
        </circle>
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
        >
          <span className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-emerald-400/[0.04] border border-emerald-400/10 animate-pulse" />

          <span className="absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_4px_rgba(52,211,153,0.5)]" />
        </div>
      ))}

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/65" />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950" />
    </div>
  );
};

/* =========================================================
   NETWORK CARD
========================================================= */

const NetworkVisual = () => {
  return (
    <div className="relative">
      {/* Outer glow */}
      <div className="absolute -inset-8 rounded-[40px] bg-emerald-500/[0.06] blur-3xl" />

      <div className="relative rounded-[28px] border border-white/10 bg-white/[0.055] backdrop-blur-2xl shadow-2xl overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
            </div>

            <span className="text-xs text-slate-500 font-medium">
              network-status
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Online
          </div>
        </div>

        {/* Main visual */}
        <div className="relative h-[310px] sm:h-[360px] bg-slate-950/80 overflow-hidden">
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Radial glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-emerald-500/[0.06] blur-3xl" />

          {/* Connection lines */}
          <div className="absolute left-[17%] top-[30%] w-[30%] h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-emerald-400/10 rotate-[25deg]" />

          <div className="absolute right-[17%] top-[30%] w-[30%] h-px bg-gradient-to-r from-emerald-400/10 via-emerald-400/50 to-transparent rotate-[-25deg]" />

          <div className="absolute left-[18%] bottom-[30%] w-[30%] h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-emerald-400/10 rotate-[-24deg]" />

          <div className="absolute right-[18%] bottom-[30%] w-[30%] h-px bg-gradient-to-r from-emerald-400/10 via-emerald-400/50 to-transparent rotate-[24deg]" />

          {/* Central router */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute -inset-5 rounded-[28px] border border-emerald-400/10 animate-pulse" />

            <div className="absolute -inset-2 rounded-2xl bg-emerald-400/[0.06] blur-xl" />

            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[24px] border border-emerald-400/30 bg-slate-900/90 shadow-[0_0_40px_rgba(52,211,153,0.12)] flex items-center justify-center">
              <Router
                size={38}
                strokeWidth={1.5}
                className="text-emerald-400"
              />

              <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[8px] text-emerald-300 uppercase tracking-widest">
                  Core
                </span>
              </span>
            </div>
          </div>

          {/* Node: ISP */}
          <div className="absolute left-[10%] top-[17%]">
            <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
              <Server size={19} className="text-emerald-400" />
            </div>

            <span className="block text-[9px] text-slate-500 mt-2 text-center">
              ISP
            </span>
          </div>

          {/* Node: Backbone */}
          <div className="absolute right-[10%] top-[17%]">
            <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
              <Network size={19} className="text-emerald-400" />
            </div>

            <span className="block text-[9px] text-slate-500 mt-2 text-center">
              Network
            </span>
          </div>

          {/* Node: Home */}
          <div className="absolute left-[12%] bottom-[15%]">
            <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
              <HomeIcon size={19} className="text-emerald-400" />
            </div>

            <span className="block text-[9px] text-slate-500 mt-2 text-center">
              Home
            </span>
          </div>

          {/* Node: Users */}
          <div className="absolute right-[12%] bottom-[15%]">
            <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
              <Users size={19} className="text-emerald-400" />
            </div>

            <span className="block text-[9px] text-slate-500 mt-2 text-center">
              Users
            </span>
          </div>

          {/* Floating signal */}
          <div className="absolute top-5 right-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/[0.08] border border-emerald-400/10">
            <WifiHigh size={13} className="text-emerald-400" />

            <span className="text-[10px] text-emerald-300">Signal Stable</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 divide-x divide-white/[0.08] border-t border-white/[0.08]">
          <div className="px-4 py-5 text-center">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider">
              Speed
            </p>

            <p className="text-sm sm:text-base font-semibold text-white mt-1">
              15–40 Mbps
            </p>
          </div>

          <div className="px-4 py-5 text-center">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider">
              Network
            </p>

            <p className="text-sm sm:text-base font-semibold text-emerald-400 mt-1">
              Online
            </p>
          </div>

          <div className="px-4 py-5 text-center">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider">
              Starting
            </p>

            <p className="text-sm sm:text-base font-semibold text-white mt-1">
              ৳700
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   DATA
========================================================= */

const plans = [
  {
    name: "Starter",
    speed: "15 Mbps",
    price: "700",
    devices: "Up to 10 Devices",
    description: "For everyday browsing and basic home use.",
    icon: Wifi,
  },
  {
    name: "Standard",
    speed: "20 Mbps",
    price: "800",
    devices: "Up to 20 Devices",
    description: "A balanced package for modern family use.",
    icon: WifiHigh,
    popular: true,
  },
  {
    name: "Premium",
    speed: "30 Mbps",
    price: "1000",
    devices: "Up to 50 Devices",
    description: "More speed for streaming and multiple users.",
    icon: Zap,
  },
  {
    name: "Ultimate",
    speed: "40 Mbps",
    price: "1300",
    devices: "Multiple Devices",
    description: "Designed for heavier internet usage.",
    icon: Sparkles,
  },
];

const services = [
  {
    icon: WifiHigh,
    title: "Internet Packages",
    text: "Flexible broadband packages for different usage requirements.",
    link: "/offer",
  },
  {
    icon: MapPin,
    title: "Coverage Area",
    text: "Check availability of Green Broadband in your location.",
    link: "/coverage",
  },
  {
    icon: Server,
    title: "Pay Your Bill",
    text: "Check your customer information and current bill details.",
    link: "/pay-bill",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    text: "Get assistance with your connection and service.",
    link: "/support",
  },
];

const reviews = [
  {
    name: "Rafi",
    location: "Chittagong",
    rating: 5,
    text: "The connection has been stable for my regular home internet usage.",
  },
  {
    name: "Sakib",
    location: "Chittagong",
    rating: 5,
    text: "The service is convenient and support was helpful when I needed assistance.",
  },
  {
    name: "Nusrat",
    location: "Chittagong",
    rating: 5,
    text: "Good experience for home browsing, study and streaming.",
  },
];

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  return (
    <main className="bg-white text-gray-800 overflow-hidden">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[680px] lg:min-h-[720px] bg-slate-950 text-white overflow-hidden">
        <NetworkBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 xl:gap-20 items-center">
            {/* Hero content */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3.5 py-2 text-xs sm:text-sm text-emerald-300 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Reliable Broadband Network
              </div>

              {/* Heading */}
              <h1 className="mt-7 text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] font-bold tracking-[-0.04em] leading-[1.02]">
                Connect Faster.
                <span className="block mt-2 bg-gradient-to-r from-emerald-300 via-emerald-400 to-green-300 bg-clip-text text-transparent">
                  Live Better.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base sm:text-lg leading-8 text-slate-300">
                Experience reliable broadband connectivity with modern network
                infrastructure, flexible internet packages and responsive
                customer support.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-3.5 mt-9">
                <Link
                  to="/connection"
                  className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-950 shadow-[0_10px_35px_rgba(16,185,129,0.18)] transition-all duration-300"
                >
                  Get Connection
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <Link
                  to="/offer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-emerald-400/30 px-6 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300"
                >
                  Explore Packages
                  <ArrowUpRight
                    size={17}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
              </div>

              {/* Trust points */}
              <div className="flex flex-wrap gap-x-7 gap-y-3 mt-8">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CircleCheck size={17} className="text-emerald-400" />
                  Stable Connectivity
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CircleCheck size={17} className="text-emerald-400" />
                  Local Support
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CircleCheck size={17} className="text-emerald-400" />
                  Flexible Plans
                </div>
              </div>

              {/* Mini contact */}
              <div className="mt-10 flex items-center gap-3 text-sm text-slate-400">
                <div className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center">
                  <PhoneCall size={16} className="text-emerald-400" />
                </div>

                <div>
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider">
                    Need assistance?
                  </p>

                  <p className="text-slate-200 mt-0.5">01648582639</p>
                </div>
              </div>
            </div>

            {/* Network Visual */}
            <NetworkVisual />
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent z-20" />
      </section>

      {/* =====================================================
          QUICK SERVICE
      ===================================================== */}

      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Our Services
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
                Everything you need,
                <span className="text-emerald-600"> in one place.</span>
              </h2>

              <p className="mt-4 text-gray-500 leading-7">
                Explore packages, check coverage, manage your bill and contact
                our support team whenever you need assistance.
              </p>
            </div>

            <Link
              to="/support"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Need help?
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:border-emerald-100 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-gray-300 group-hover:text-emerald-500 transition-colors"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {service.text}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY US
      ===================================================== */}

      <section className="relative py-20 sm:py-24 bg-slate-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-20 w-72 h-72 bg-emerald-500/[0.04] rounded-full blur-3xl" />
          <div className="absolute right-0 bottom-20 w-72 h-72 bg-emerald-500/[0.04] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Why Green Broadband
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-tight">
                More than internet.
                <span className="block text-emerald-600">
                  A better connection.
                </span>
              </h2>

              <p className="mt-6 text-gray-500 leading-7 max-w-xl">
                We focus on delivering a practical broadband experience with
                reliable connectivity, suitable packages and accessible customer
                support.
              </p>

              <div className="mt-9 space-y-5">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Reliable Connectivity",
                    text: "A network-focused approach designed for everyday internet usage.",
                  },
                  {
                    icon: Zap,
                    title: "Flexible Packages",
                    text: "Choose a package based on your speed and usage requirements.",
                  },
                  {
                    icon: Headphones,
                    title: "Accessible Support",
                    text: "Get assistance when you experience connection or service issues.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={index} className="flex gap-4">
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-emerald-600">
                        <Icon size={21} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500 leading-6">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                to="/coverage"
                className="inline-flex items-center gap-2 mt-9 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Check coverage area
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="absolute -inset-5 bg-emerald-500/[0.05] rounded-[40px] blur-2xl" />

              <div className="relative rounded-[28px] bg-slate-950 p-5 sm:p-7 shadow-2xl overflow-hidden">
                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Network Infrastructure
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        Built around connectivity
                      </h3>
                    </div>

                    <div className="w-12 h-12 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08] flex items-center justify-center">
                      <Globe2 size={24} className="text-emerald-400" />
                    </div>
                  </div>

                  {/* Infrastructure visual */}
                  <div className="relative h-[300px] mt-8 rounded-2xl bg-white/[0.025] border border-white/[0.07] overflow-hidden">
                    {/* Lines */}
                    <div className="absolute left-[20%] top-[32%] w-[28%] h-px bg-gradient-to-r from-emerald-400/10 via-emerald-400/50 to-transparent rotate-[24deg]" />

                    <div className="absolute right-[20%] top-[32%] w-[28%] h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-emerald-400/10 rotate-[-24deg]" />

                    <div className="absolute left-[21%] bottom-[32%] w-[27%] h-px bg-gradient-to-r from-emerald-400/10 via-emerald-400/50 to-transparent rotate-[-22deg]" />

                    <div className="absolute right-[21%] bottom-[32%] w-[27%] h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-emerald-400/10 rotate-[22deg]" />

                    {/* Center */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-20 h-20 rounded-2xl bg-emerald-500/[0.08] border border-emerald-400/30 flex items-center justify-center">
                        <Network size={32} className="text-emerald-400" />
                      </div>
                    </div>

                    {/* Infrastructure nodes */}
                    <div className="absolute left-[9%] top-[20%] text-center">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                        <Server size={20} className="text-emerald-400" />
                      </div>
                      <span className="text-[9px] text-slate-500 mt-2 block">
                        SERVER
                      </span>
                    </div>

                    <div className="absolute right-[9%] top-[20%] text-center">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                        <Router size={20} className="text-emerald-400" />
                      </div>
                      <span className="text-[9px] text-slate-500 mt-2 block">
                        ROUTER
                      </span>
                    </div>

                    <div className="absolute left-[12%] bottom-[17%] text-center">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                        <Wifi size={20} className="text-emerald-400" />
                      </div>
                      <span className="text-[9px] text-slate-500 mt-2 block">
                        WIFI
                      </span>
                    </div>

                    <div className="absolute right-[12%] bottom-[17%] text-center">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                        <HomeIcon size={20} className="text-emerald-400" />
                      </div>
                      <span className="text-[9px] text-slate-500 mt-2 block">
                        HOME
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4">
                      <p className="text-[10px] text-slate-500 uppercase">
                        Network
                      </p>
                      <p className="text-sm font-semibold text-white mt-1">
                        Active
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4">
                      <p className="text-[10px] text-slate-500 uppercase">
                        Service
                      </p>
                      <p className="text-sm font-semibold text-white mt-1">
                        Broadband
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4">
                      <p className="text-[10px] text-slate-500 uppercase">
                        Support
                      </p>
                      <p className="text-sm font-semibold text-emerald-400 mt-1">
                        Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PACKAGES
      ===================================================== */}

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-11">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Internet Packages
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
                Simple plans.
                <span className="text-emerald-600"> Clear pricing.</span>
              </h2>

              <p className="mt-4 text-gray-500 max-w-xl leading-7">
                Select a package that fits your household, work and everyday
                connectivity needs.
              </p>
            </div>

            <Link
              to="/offer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Compare all packages
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((plan, index) => {
              const Icon = plan.icon;

              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular
                      ? "border-emerald-400 bg-emerald-50/50 shadow-[0_20px_50px_rgba(16,185,129,0.10)]"
                      : "border-gray-100 bg-white hover:border-emerald-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-semibold shadow-lg shadow-emerald-500/20">
                      <Sparkles size={12} />
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Icon size={21} />
                    </div>

                    <span className="text-xs text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {plan.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 leading-6 min-h-[48px]">
                    {plan.description}
                  </p>

                  <div className="mt-6">
                    <span className="text-4xl font-bold tracking-tight text-gray-950">
                      {plan.speed}
                    </span>
                  </div>

                  <div className="flex items-end gap-1 mt-3">
                    <span className="text-2xl font-bold text-emerald-600">
                      ৳{plan.price}
                    </span>

                    <span className="text-xs text-gray-400 mb-1.5">
                      / month
                    </span>
                  </div>

                  <div className="my-5 h-px bg-gray-100" />

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-emerald-500" />
                    {plan.devices}
                  </div>

                  <Link
                    to="/connection"
                    className="group/btn mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 hover:bg-emerald-500 text-white hover:text-slate-950 py-3.5 text-sm font-semibold transition-colors"
                  >
                    Choose Package
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ENTERTAINMENT
      ===================================================== */}

      <section className="relative py-20 sm:py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/[0.07] rounded-full blur-[100px]" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/[0.05] rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <Tv size={18} />
                Local Entertainment
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Your connection.
                <span className="block text-emerald-400">
                  Your entertainment.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-slate-400 leading-7">
                Enjoy convenient access to local network services and
                entertainment resources available through the Green Broadband
                ecosystem.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Local network services",
                  "Convenient access for connected users",
                  "Smooth everyday streaming experience",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-400/[0.08] border border-emerald-400/10 flex items-center justify-center">
                      <Check size={13} className="text-emerald-400" />
                    </div>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[28px] border border-white/10 bg-white/[0.035] backdrop-blur-xl p-5 sm:p-7">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: Tv,
                      title: "Streaming",
                    },
                    {
                      icon: Server,
                      title: "Local Server",
                    },
                    {
                      icon: Wifi,
                      title: "Network",
                    },
                    {
                      icon: Zap,
                      title: "Fast Access",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="relative h-36 rounded-2xl border border-white/[0.08] bg-white/[0.035] flex flex-col items-center justify-center hover:bg-emerald-400/[0.05] transition-colors"
                      >
                        <div className="w-12 h-12 rounded-xl bg-emerald-400/[0.08] border border-emerald-400/10 flex items-center justify-center">
                          <Icon size={23} className="text-emerald-400" />
                        </div>

                        <p className="text-sm text-slate-300 mt-4">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
              Simple Process
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-950">
              Get connected in three steps
            </h2>

            <p className="mt-4 text-gray-500 leading-7">
              Start your broadband journey with a simple connection request.
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-6 mt-12">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-200" />

            {[
              {
                number: "01",
                icon: MapPin,
                title: "Check Coverage",
                text: "Confirm that Green Broadband service is available in your area.",
              },
              {
                number: "02",
                icon: Wifi,
                title: "Choose Package",
                text: "Select an internet package that matches your requirements.",
              },
              {
                number: "03",
                icon: HomeIcon,
                title: "Get Connected",
                text: "Submit your request and our team will guide you through the process.",
              },
            ].map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="relative z-10 rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm"
                >
                  <div className="relative mx-auto w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Icon size={26} />

                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-950 text-white text-[9px] font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 leading-6">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          REVIEWS
      ===================================================== */}

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Customer Experience
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-950">
                What customers say
              </h2>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Star size={17} className="fill-yellow-400 text-yellow-400" />
              Customer feedback
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-6 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)] transition-all duration-300"
              >
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="mt-5 text-gray-600 leading-7 text-sm sm:text-base">
                  “{review.text}”
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-semibold">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {review.name}
                    </p>

                    <p className="text-xs text-gray-400 mt-0.5">
                      {review.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative bg-emerald-600 overflow-hidden">
        {/* Network pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="absolute -top-40 -right-20 w-96 h-96 bg-white/[0.08] rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-9">
            <div className="max-w-2xl text-white">
              <div className="inline-flex items-center gap-2 text-emerald-100 text-sm font-medium">
                <Sparkles size={16} />
                Ready when you are
              </div>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Ready for a better connection?
              </h2>

              <p className="mt-4 text-emerald-50/90 leading-7">
                Choose your package and send us your connection request. Our
                team will help you with the next step.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/connection"
                className="group inline-flex items-center gap-2 rounded-xl bg-white hover:bg-emerald-50 px-6 py-3.5 text-sm font-semibold text-emerald-700 transition-colors"
              >
                Get Connection
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <a
                href="https://wa.me/8801648582639"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 hover:bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT STRIP
      ===================================================== */}

      <section className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center">
                <PhoneCall size={17} className="text-emerald-400" />
              </div>

              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                  Phone
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
                  Location
                </p>

                <p className="text-sm text-slate-200 mt-1">
                  Cosmopolitan, Chittagong
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center">
                <Clock3 size={17} className="text-emerald-400" />
              </div>

              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                  Service
                </p>

                <p className="text-sm text-slate-200 mt-1">
                  Broadband Internet
                </p>
              </div>
            </div>

            <Link to="/support" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/10 flex items-center justify-center">
                <Wrench size={17} className="text-emerald-400" />
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
