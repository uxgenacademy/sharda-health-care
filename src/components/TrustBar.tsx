"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Users, Clock, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {target % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: Star,
    value: 4.6,
    suffix: "/5",
    label: "Google Rating",
    sublabel: "Verified Reviews",
    color: "from-amber-400 to-orange-400",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Users,
    value: 24,
    suffix: "+",
    label: "Khush Patients",
    sublabel: "Google Pe Review Diya",
    color: "from-blue-500 to-blue-700",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "×7",
    label: "Emergency Seva",
    sublabel: "Kabhi Bhi, Kahin Bhi",
    color: "from-green-500 to-emerald-600",
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Calendar,
    value: 6,
    suffix: " Din",
    label: "Mon - Sun Open",
    sublabel: "Sunday: Morning Only",
    color: "from-purple-500 to-violet-600",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-10 md:py-14 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full border border-blue-100 mb-3">
            🏆 Hamara Vishwas, Aapka Swasthya
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-lg shadow-gray-100 border border-gray-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 text-center overflow-hidden group"
            >
              {/* Background gradient accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`w-12 h-12 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>

              {/* Animated number */}
              <div
                className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-1`}
              >
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>

              <div className="font-bold text-gray-800 text-sm md:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
