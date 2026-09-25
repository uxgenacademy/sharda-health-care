"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Phone, MessageCircle, Sun, Sunset, Moon, AlertTriangle } from "lucide-react";

const timings = [
  {
    day: "Monday - Saturday",
    dayHi: "Somvar - Shanivaar",
    slots: [
      { label: "Subah", time: "10:00 AM — 2:00 PM", icon: Sun, color: "text-amber-500" },
      { label: "Shaam", time: "5:00 PM — 9:00 PM", icon: Sunset, color: "text-orange-500" },
    ],
    isOpen: true,
  },
  {
    day: "Sunday",
    dayHi: "Itwar",
    slots: [
      { label: "Subah Only", time: "10:00 AM — 2:00 PM", icon: Sun, color: "text-amber-500" },
    ],
    isOpen: true,
    note: "Shaam Mein Chutti",
  },
];

const phones = [
  { number: "+91 98114 08690", display: "98114 08690", primary: true },
  { number: "+91 98119 08690", display: "98119 08690", primary: false },
  { number: "+91 99114 08690", display: "99114 08690", primary: false },
];

export default function TimingContact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-4 py-2 rounded-full border border-green-100 mb-4">
            🕐 Timing & Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kab Aaye?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-700">
              Kaise Sampark Karein?
            </span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Hum hamesha tayaar hain. Bas ek call ki doori pe hain aapke Doctor.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Timing Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 px-7 py-5">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-blue-200" />
                <h3 className="text-xl font-bold text-white">OPD Timing</h3>
              </div>
              <p className="text-blue-200 text-sm mt-1">Clinic Ka Schedule</p>
            </div>

            <div className="p-6 space-y-5">
              {timings.map((timing, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-2xl p-5 border border-slate-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-bold text-gray-900">{timing.day}</p>
                      <p className="text-xs text-gray-500">{timing.dayHi}</p>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      Open
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {timing.slots.map((slot, j) => (
                      <div
                        key={j}
                        className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm"
                      >
                        <div className="flex items-center gap-2.5">
                          <slot.icon className={`w-4 h-4 ${slot.color}`} />
                          <span className="text-gray-600 text-sm font-medium">{slot.label}</span>
                        </div>
                        <span className="font-bold text-blue-800 text-sm">{slot.time}</span>
                      </div>
                    ))}
                  </div>

                  {timing.note && (
                    <p className="text-xs text-amber-600 mt-3 flex items-center gap-1.5">
                      <Moon className="w-3.5 h-3.5" />
                      {timing.note}
                    </p>
                  )}
                </div>
              ))}

              {/* Emergency Banner */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-5 border border-red-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                    <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
                  </div>
                  <div>
                    <p className="font-bold text-red-700">Emergency: 24 Ghante Available</p>
                    <p className="text-xs text-red-500">Raat Ho Ya Din — Call Karo</p>
                  </div>
                </div>
                <a
                  href="tel:+919811408690"
                  className="flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-xl font-semibold text-sm hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Emergency Call: 98114 08690
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-700 to-green-800 px-7 py-5">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-green-200" />
                <h3 className="text-xl font-bold text-white">Sampark Karein</h3>
              </div>
              <p className="text-green-200 text-sm mt-1">3 Numbers Pe Call Kar Sakte Hain</p>
            </div>

            <div className="p-6 space-y-4">
              {phones.map((phone, i) => (
                <motion.a
                  key={i}
                  href={`tel:${phone.number.replace(/\s/g, "")}`}
                  whileHover={{ x: 4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center justify-between rounded-2xl p-5 border transition-all duration-200 group cursor-pointer ${
                    phone.primary
                      ? "bg-blue-50 border-blue-200 hover:bg-blue-100"
                      : "bg-gray-50 border-gray-100 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        phone.primary ? "bg-blue-800" : "bg-gray-700"
                      }`}
                    >
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p
                        className={`font-bold text-lg tracking-wide ${
                          phone.primary ? "text-blue-800" : "text-gray-800"
                        }`}
                      >
                        {phone.display}
                      </p>
                      {phone.primary && (
                        <p className="text-xs text-blue-600 font-semibold">Primary Number</p>
                      )}
                    </div>
                  </div>
                  <div
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                      phone.primary
                        ? "bg-blue-800 text-white"
                        : "bg-gray-700 text-white"
                    } group-hover:scale-105 transition-transform`}
                  >
                    Call →
                  </div>
                </motion.a>
              ))}

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/919811408690?text=Namaste%20Doctor%20Sahab%2C%20Main%20appointment%20book%20karna%20chahta%20hoon"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-green-600/30 transition-all w-full mt-6"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Pe Message Bhejo
              </motion.a>

              {/* Info Note */}
              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100 mt-4">
                <p className="text-amber-800 text-xs font-medium leading-relaxed">
                  💡 <strong>Pro Tip:</strong> WhatsApp pe message karo jab direct call na ho
                  sake — Doctor Sahab jaldi jawab denge aur appointment fix kar denge.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
