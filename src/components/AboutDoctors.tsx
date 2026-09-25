"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Award, Heart, Baby } from "lucide-react";

const doctors = [
  {
    emoji: "👨‍⚕️",
    name: "Dr. Sahir",
    degree: "MBBS, General Physician",
    speciality: "General Physician",
    experience: "10+ Saal ka Anubhav",
    color: "blue",
    cardBg: "from-blue-50 to-indigo-50",
    accentBg: "bg-blue-800",
    accentText: "text-blue-700",
    borderColor: "border-blue-100",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    badgeBg: "bg-blue-800",
    tagBg: "bg-blue-50",
    tagText: "text-blue-700",
    tagBorder: "border-blue-100",
    description:
      "BP, Sugar, Bukhar, Har Mausami Bimari Ka Pakka Ilaaj. Badshahpur ke sabse trusted General Physician, jinka naam hi dawa hai.",
    points: [
      "BP & Diabetes ka Sampoorn Ilaj",
      "Bukhar, Khasi, Sardi Ka Fast Relief",
      "Chronic Disease Management",
      "Mausami Bimariyon Ka Expert",
      "Regular Health Check-Up",
    ],
    tags: ["General Physician", "BP Expert", "Diabetes", "Fever"],
    icon: Heart,
  },
  {
    emoji: "👩‍⚕️",
    name: "Dr. Anjum",
    degree: "MBBS, MS Gynecology",
    speciality: "Gynecologist",
    experience: "Expert Specialist",
    color: "rose",
    cardBg: "from-rose-50 to-pink-50",
    accentBg: "bg-rose-600",
    accentText: "text-rose-600",
    borderColor: "border-rose-100",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    badgeBg: "bg-rose-600",
    tagBg: "bg-rose-50",
    tagText: "text-rose-700",
    tagBorder: "border-rose-100",
    description:
      "Mahilao Ke Liye Vishesh Suvidha, Garbhavati Mahilao Ki Sampurn Dekhbhal. Ek Mahila Doctor Jo Samjhe Aapke Dard Ko.",
    points: [
      "Garbhavati Mahilao Ki Sampurn Care",
      "Mahilao Ki Samanya Bimariyon Ka Ilaaj",
      "Pregnancy Se Delivery Tak Saath",
      "Anemia, PCOS Ka Expert Treatment",
      "Normal & C-Section Delivery Support",
    ],
    tags: ["Gynecologist", "Pregnancy Care", "Women Health", "Delivery"],
    icon: Baby,
  },
];

export default function AboutDoctors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="doctors"
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full border border-blue-100 mb-4">
            👨‍⚕️ Hamare Doctors
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Miliye{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
              Apne Family Doctors
            </span>{" "}
            Se
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Pati-Patni Doctor Jodi — Ek Ghar Me Aapko Mile Dono Zaroori Doctors. Family Ka Har
            Member Yahan Safe Hai.
          </p>
        </motion.div>

        {/* Doctor Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {doctors.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, x: i === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className={`bg-gradient-to-br ${doc.cardBg} rounded-3xl shadow-xl ${doc.borderColor} border overflow-hidden transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Top accent bar */}
              <div className={`h-1.5 ${doc.accentBg} w-full`} />

              <div className="p-7 md:p-8">
                {/* Doctor Info Header */}
                <div className="flex items-start gap-5 mb-6">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-20 h-20 ${doc.iconBg} rounded-2xl flex items-center justify-center text-5xl shadow-sm border-2 border-white`}
                    >
                      {doc.emoji}
                    </div>
                    <div
                      className={`absolute -bottom-1.5 -right-1.5 ${doc.badgeBg} text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg whitespace-nowrap`}
                    >
                      {doc.experience}
                    </div>
                  </div>

                  {/* Name & Degree */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{doc.name}</h3>
                    <p className={`${doc.accentText} font-semibold text-sm mt-0.5`}>
                      {doc.degree}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Award className={`w-4 h-4 ${doc.iconColor}`} />
                      <span className="text-gray-600 text-sm font-medium">{doc.speciality}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                  "{doc.description}"
                </p>

                {/* Points */}
                <ul className="space-y-2.5 mb-6">
                  {doc.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${doc.iconColor}`} />
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {doc.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`${doc.tagBg} ${doc.tagText} border ${doc.tagBorder} text-xs font-semibold px-3 py-1.5 rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href="tel:+919811408690"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center justify-center gap-2 ${doc.accentBg} text-white py-3.5 px-6 rounded-2xl font-semibold text-sm w-full shadow-lg transition-all`}
                >
                  <doc.icon className="w-4 h-4" />
                  {doc.name} Se Miliye — Call Karo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center bg-white rounded-3xl p-6 shadow-lg border border-blue-50"
        >
          <p className="text-gray-700 font-medium text-base">
            💑{" "}
            <span className="font-bold text-blue-800">Pati-Patni Doctor Jodi</span> —{" "}
            <span className="text-gray-600">
              Ek hi jagah mein General + Gyno dono mil jaaye — Yahi hai{" "}
              <strong className="text-green-600">Sharda Health Care</strong> ki sabse badi
              khasiyat!
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
