"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Stethoscope,
  Activity,
  Thermometer,
  Heart,
  Baby,
  AlertCircle,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    titleHi: "Samanya Ilaj",
    description:
      "Har choti-badi bimari ke liye expert consultation. Pehle miliye, phir dawa lein.",
    color: "blue",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    hoverBorder: "hover:border-blue-200",
    hoverShadow: "hover:shadow-blue-100",
    tagColor: "bg-blue-50 text-blue-700",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: Activity,
    title: "BP & Diabetes",
    titleHi: "BP aur Sugar Management",
    description:
      "Blood pressure aur diabetes ka systematic control. Regular monitoring se jeena asaan banao.",
    color: "indigo",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-700",
    hoverBorder: "hover:border-indigo-200",
    hoverShadow: "hover:shadow-indigo-100",
    tagColor: "bg-indigo-50 text-indigo-700",
    gradient: "from-indigo-500 to-indigo-700",
  },
  {
    icon: Thermometer,
    title: "Fever & Infection",
    titleHi: "Bukhar, Khasi, Sardi",
    description:
      "Mausami bimariyan, viral fever, bacterial infections — fast relief ke liye turant aao.",
    color: "orange",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverBorder: "hover:border-orange-200",
    hoverShadow: "hover:shadow-orange-100",
    tagColor: "bg-orange-50 text-orange-700",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    icon: Heart,
    title: "Women's Health",
    titleHi: "Mahila Swasthya & Gyno",
    description:
      "Dr. Anjum dwara mahilao ke liye vishesh seva. PCOS, Anemia, Pregnancy — sab yahan.",
    color: "rose",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    hoverBorder: "hover:border-rose-200",
    hoverShadow: "hover:shadow-rose-100",
    tagColor: "bg-rose-50 text-rose-700",
    gradient: "from-rose-400 to-rose-600",
  },
  {
    icon: Baby,
    title: "Child Health",
    titleHi: "Bacchon Ka Ilaaj",
    description:
      "Chhote bacchon ki bimariyan, vaccination advice, growth monitoring — sab ek jagah.",
    color: "green",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    hoverBorder: "hover:border-green-200",
    hoverShadow: "hover:shadow-green-100",
    tagColor: "bg-green-50 text-green-700",
    gradient: "from-green-500 to-green-700",
  },
  {
    icon: AlertCircle,
    title: "24 Hour Emergency",
    titleHi: "24 Ghante Emergency Seva",
    description:
      "Raat ho ya din, bimari ka koi time nahi. Hamare number pe call karo, hum available hain.",
    color: "red",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    hoverBorder: "hover:border-red-200",
    hoverShadow: "hover:shadow-red-100",
    tagColor: "bg-red-50 text-red-700",
    gradient: "from-red-500 to-red-700",
    isEmergency: true,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-4 py-2 rounded-full border border-green-100 mb-4">
            🏥 Hamari Specialities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Har{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-700">
              Bimari Ka Ilaaj
            </span>{" "}
            Yahan Milta Hai
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Ek hi jagah pe — General Physician aur Gynecologist dono. Poori family ki health ek
            hi clinic mein.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`relative bg-white rounded-3xl p-6 md:p-7 shadow-md border border-gray-100 ${service.hoverBorder} hover:shadow-xl ${service.hoverShadow} transition-all duration-300 group overflow-hidden cursor-pointer ${
                service.isEmergency ? "ring-1 ring-red-200" : ""
              }`}
            >
              {/* Hover gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
              />

              {/* Emergency pulse indicator */}
              {service.isEmergency && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                  </span>
                  <span className="text-xs font-semibold text-red-600">Live</span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              {/* Title */}
              <div className="mb-3">
                <h3 className="font-bold text-gray-900 text-lg leading-tight">{service.title}</h3>
                <p className={`text-xs font-semibold ${service.iconColor} mt-0.5`}>
                  {service.titleHi}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>

              {/* Bottom Link */}
              <div className="flex items-center gap-1.5">
                <span className={`${service.tagColor} text-xs font-semibold px-3 py-1.5 rounded-full`}>
                  {service.isEmergency ? "📞 Emergency: Call Now" : "✓ Available"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <motion.a
            href="tel:+919811408690"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-2xl font-semibold text-base shadow-xl shadow-blue-800/30 transition-all"
          >
            <Stethoscope className="w-5 h-5" />
            Abhi Appointment Lo — Call Karo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
