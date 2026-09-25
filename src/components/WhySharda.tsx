"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Shield, Heart, Clock, Star, Users, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Local Ka Bharosa",
    description:
      "Badshahpur ki hi clinic, local log, local language. Aapko koi ajeeb feel nahi aayega — yahan sab apne hain.",
    color: "bg-blue-50",
    iconColor: "text-blue-700",
    borderColor: "border-blue-100",
    tag: "🏘️ Local Connection",
  },
  {
    icon: Clock,
    title: "24 Ghante Ki Suvidha",
    description:
      "Raat 2 baje bhi bimari aaye toh ghbrao mat — call karo, hum available hain. Emergency mein kabhi akele mat raho.",
    color: "bg-green-50",
    iconColor: "text-green-700",
    borderColor: "border-green-100",
    tag: "⏰ 24/7 Service",
  },
  {
    icon: Heart,
    title: "Pati-Patni Doctor Jodi",
    description:
      "Ek hi jagah pe General Physician aur Gynecologist dono milenge — family ka har member yahan safe hai.",
    color: "bg-rose-50",
    iconColor: "text-rose-600",
    borderColor: "border-rose-100",
    tag: "👫 Duo Doctors",
  },
  {
    icon: Shield,
    title: "Vishwasneey Ilaaj",
    description:
      "Dawa wahi jo zaruri ho, paisa woh jo sahi ho. Yahan koi extra test nahi, sirf sahi ilaaj.",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "border-amber-100",
    tag: "✅ Trusted Treatment",
  },
  {
    icon: Star,
    title: "4.6 Google Rating",
    description:
      "24+ patients ne apna anubhav share kiya. Yeh rating hamari mehnat ka sabut hai, aapka vishwas hamara sammaan.",
    color: "bg-yellow-50",
    iconColor: "text-yellow-600",
    borderColor: "border-yellow-100",
    tag: "⭐ 4.6/5 Rating",
  },
  {
    icon: Users,
    title: "Family Jaisa Care",
    description:
      "Hum sirf doctor nahi, aapki family ke ek hisse hain. Har patient ko personal attention milti hai.",
    color: "bg-purple-50",
    iconColor: "text-purple-700",
    borderColor: "border-purple-100",
    tag: "❤️ Family Care",
  },
];

export default function WhySharda() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full border border-blue-100 mb-4">
            💡 Kyon Chunein Hume?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kyon{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600">
              Sharda Health Care
            </span>
            ?
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto">
            "Local Ka Bharosa, 24 Ghante Ki Suvidha, Husband-Wife Doctor Jodi —{" "}
            <strong className="text-blue-800">Isliye Family Jaisa Care Milta Hai"</strong>
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`${reason.color} rounded-3xl p-6 border ${reason.borderColor} hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Tag */}
              <span className="inline-block text-xs font-semibold text-gray-600 bg-white/70 px-3 py-1 rounded-full border border-white/80 shadow-sm mb-5">
                {reason.tag}
              </span>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <reason.icon className={`w-5 h-5 ${reason.iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-900 text-base">{reason.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Central CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-900 rounded-3xl p-8 md:p-10 text-center shadow-2xl shadow-blue-900/30"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <div className="flex justify-center mb-4">
              <ThumbsUp className="w-10 h-10 text-yellow-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Badshahpur Ki Pasandida Clinic
            </h3>
            <p className="text-blue-200 text-base mb-7 max-w-2xl mx-auto">
              Poore Badshahpur mein, Sector 68 aur aas-paas ke logo ka bharosa sirf ek naam pe hai —{" "}
              <strong className="text-white">Sharda Health Care</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+919811408690"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-blue-800 px-7 py-3.5 rounded-2xl font-bold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                📞 Abhi Call Karo
              </motion.a>
              <motion.a
                href="https://wa.me/919811408690"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                💬 WhatsApp Karo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
