"use client";

import { motion } from "framer-motion";
import { Star, Phone, MessageCircle, Heart, Activity, Shield } from "lucide-react";
import Image from "next/image";

const floatingIcons = [
  { icon: Heart, color: "text-red-400", top: "15%", left: "5%", delay: 0 },
  { icon: Activity, color: "text-blue-400", top: "60%", left: "2%", delay: 0.5 },
  { icon: Shield, color: "text-green-400", top: "30%", right: "3%", delay: 1 },
  { icon: Heart, color: "text-pink-300", top: "75%", right: "5%", delay: 0.3 },
  { icon: Activity, color: "text-indigo-300", top: "10%", right: "8%", delay: 0.8 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen animated-gradient overflow-hidden flex items-center pt-20">
      {/* Floating medical icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:block ${item.color} opacity-25`}
          style={{ top: item.top, left: item.left, right: item.right }}
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.icon size={36} />
        </motion.div>
      ))}

      {/* Background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div className="order-2 lg:order-1">
            {/* Google Rating Badge - BIG & PROMINENT */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center gap-3 bg-white rounded-2xl shadow-xl shadow-amber-100/50 px-5 py-3.5 mb-8 border border-amber-100"
            >
              {/* Google G */}
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-red-400 to-yellow-400 shadow-sm flex-shrink-0">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold text-gray-900">4.6</span>
                  <div className="flex">
                    {[1, 2, 3, 4].map((s) => (
                      <Star key={s} className="w-4 h-4 star-filled" />
                    ))}
                    <div className="relative">
                      <Star className="w-4 h-4 text-gray-200 fill-gray-200" />
                      <div className="absolute inset-0 overflow-hidden w-3/5">
                        <Star className="w-4 h-4 star-filled" />
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">/ 5</span>
                </div>
                <p className="text-xs text-gray-600 font-medium mt-0.5">
                  ⭐ 24+ Happy Patients ne{" "}
                  <span className="text-blue-700 font-bold">Google Pe Bharosa Kiya</span>
                </p>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-5"
            >
              Badshahpur Me{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">
                Aapke Apne
              </span>{" "}
              Family Doctor —{" "}
              <span className="text-green-600">24 Ghante Available</span>
            </motion.h1>

            {/* Sub Headline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed"
            >
              <span className="font-semibold text-blue-800">Dr. Sahir</span>{" "}
              (General Physician) &{" "}
              <span className="font-semibold text-blue-800">Dr. Anjum</span>{" "}
              (Gynecologist) —{" "}
              <span className="text-gray-700 font-medium">
                Pati-Patni Doctor Jodi, Jo Samjhe Aapki Family Ki Health 💙
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.a
                href="tel:+919811408690"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2.5 bg-blue-800 hover:bg-blue-900 text-white px-7 py-4 rounded-2xl font-semibold text-base shadow-xl shadow-blue-800/30 transition-all pulse-blue"
              >
                <Phone className="w-5 h-5" />
                Book Appointment
              </motion.a>
              <motion.a
                href="https://wa.me/919811408690?text=Namaste%20Doctor%20Sahab%2C%20Main%20appointment%20book%20karna%20chahta%20hoon"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-700 text-white px-7 py-4 rounded-2xl font-semibold text-base shadow-xl shadow-green-600/30 transition-all pulse-green"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Pe Baat Karo
              </motion.a>
            </motion.div>

            {/* Quick trust stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap gap-5"
            >
              {[
                { label: "Google Rating", value: "4.6 ⭐" },
                { label: "Happy Patients", value: "24+ Reviews" },
                { label: "Emergency", value: "24/7 Available" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-bold text-blue-800 text-lg leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Doctor Cards */}
          <div className="order-1 lg:order-2 relative">
            {/* Floating Google Rating widget */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="absolute -top-4 -right-2 md:top-2 md:right-0 z-10 bg-white rounded-2xl shadow-2xl px-4 py-3 border border-yellow-100 float-anim"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 via-red-400 to-yellow-400 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-gray-900 text-sm">4.6</span>
                    <Star className="w-3.5 h-3.5 star-filled" />
                  </div>
                  <p className="text-xs text-gray-500">Google Reviews</p>
                </div>
              </div>
            </motion.div>

            {/* Doctor Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {/* Dr. Sahir */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                whileHover={{ y: -6, rotate: 1 }}
                className="bg-white rounded-3xl shadow-2xl shadow-blue-100 overflow-hidden border border-blue-50"
              >


                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center overflow-hidden">
  {/* Dr. Sahir Real Photo */}
  <img 
    src="/sahir.jpg" 
    alt="Dr. Sahir - General Physician" 
    className="absolute inset-0 w-full h-full object-cover object-top"
  />
  {/* Halka sa gradient overlay taaki badge saaf dikhe */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
  
  <div className="absolute bottom-3 left-3 bg-blue-800 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
    10+ Saal
  </div>
</div>



                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-base">Dr. Sahir</h3>
                  <p className="text-blue-700 text-xs font-semibold mt-0.5">General Physician</p>
                  <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                    BP, Sugar, Bukhar & Chronic Diseases
                  </p>
                  <div className="mt-3 flex items-center gap-1">
  {[1, 2, 3, 4, 5].map((s) => (
    <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
  ))}
  <span className="text-xs text-gray-500 ml-1">Expert</span>
</div>
                </div>
              </motion.div>

              {/* Dr. Anjum */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
                whileHover={{ y: -6, rotate: -1 }}
                className="bg-white rounded-3xl shadow-2xl shadow-pink-100 overflow-hidden border border-pink-50 mt-6"
              >


                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center overflow-hidden">
  {/* Dr. Anjum Real Photo */}
  <img 
    src="/anjum.jpg" 
    alt="Dr. Anjum - Gynecologist" 
    className="absolute inset-0 w-full h-full object-cover object-top"
  />
  {/* Halka gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>

  <div className="absolute bottom-3 left-3 bg-rose-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
    Specialist
  </div>
</div>


                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-base">Dr. Anjum</h3>
                  <p className="text-rose-600 text-xs font-semibold mt-0.5">Gynecologist</p>
                  <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                    Women's Health & Maternity Care
                  </p>
                  <div className="mt-3 flex items-center gap-1">
  {[1, 2, 3, 4, 5].map((s) => (
    <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
  ))}
  <span className="text-xs text-gray-500 ml-1">Expert</span>
</div>
                </div>
              </motion.div>
            </div>

            {/* Emergency badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="absolute -bottom-4 -left-2 md:-left-6 bg-green-600 text-white rounded-2xl shadow-xl px-4 py-3 float-anim-delayed"
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                <div>
                  <p className="text-xs font-semibold">24 Ghante Available</p>
                  <p className="text-xs opacity-80">Emergency Service</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 27.5C672 35 768 40 864 37.5C960 35 1056 25 1152 20C1248 15 1344 15 1392 15L1440 15V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
