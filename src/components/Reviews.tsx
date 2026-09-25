"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ExternalLink, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sunita Devi",
    location: "Badshahpur",
    rating: 5,
    timeAgo: "2 hafta pehle",
    review:
      "Dr. Sahir sahab bahut achhe doctor hain. Mere pati ko BP ki problem thi, unhone itna achha ilaaj kiya ki ab bilkul theek hain. Bahut hi friendly hain aur dawa bhi sahi dete hain. Poora parivaar yahan aata hai. 100% recommend karoonga.",
    avatar: "S",
    avatarBg: "bg-blue-500",
    verified: true,
  },
  {
    name: "Rekha Sharma",
    location: "Aklimpur",
    rating: 5,
    timeAgo: "1 mahina pehle",
    review:
      "Dr. Anjum madam ne meri pregnancy mein itna saath diya — hum bahut thankful hain. Bahut gentle hain, sab kuch detail mein samjhati hain. Delivery ke baad bhi check-up ke liye aaya toh same care mili. Best gynecologist in Badshahpur!",
    avatar: "R",
    avatarBg: "bg-rose-500",
    verified: true,
  },
  {
    name: "Mohd. Arif",
    location: "Sector 68",
    rating: 5,
    timeAgo: "3 hafte pehle",
    review:
      "Raat ko 11 baje bukhar chadh gaya, call kiya toh turant milaye. Emergency mein itna achha response — really impressed. Fees bhi bilkul reasonable hai. Badshahpur mein itna achha doctor milna bahut badi baat hai. Thank you Doctor Sahab!",
    avatar: "M",
    avatarBg: "bg-green-500",
    verified: true,
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? "star-filled" : "text-gray-200 fill-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reviews" ref={ref} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-amber-50/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-amber-50 text-amber-700 text-xs font-semibold px-4 py-2 rounded-full border border-amber-100 mb-4">
            ⭐ Google Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Log{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              Google Pe Kya Keh Rahe Hain?
            </span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Aap Bhi Dekhiye — Real Patients Ka Real Anubhav 💬
          </p>
        </motion.div>

        {/* Big Google Rating Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-2xl shadow-amber-100/50 border border-amber-100 p-8 md:p-10 mb-12 text-center relative overflow-hidden"
        >
          {/* Decorative stars */}
          <div className="absolute top-4 left-8 opacity-10 text-6xl">⭐</div>
          <div className="absolute bottom-4 right-8 opacity-10 text-5xl">⭐</div>

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
            {/* Rating Number */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-red-400 to-yellow-400 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-base">G</span>
                </div>
                <span className="text-gray-600 font-semibold text-lg">Google</span>
              </div>
              <div className="text-7xl md:text-8xl font-black text-gray-900 leading-none mb-2">
                4.6
              </div>
              <div className="flex justify-center mb-2">
                <StarRating count={5} />
              </div>
              <p className="text-gray-500 text-sm font-medium">Based on 24 Reviews</p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-32 bg-gray-100" />
            <div className="block md:hidden w-full h-px bg-gray-100" />

            {/* Goal Section */}
            <div className="text-center max-w-sm">
              <div className="text-5xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Hamara Lakshya: 5.0 ⭐ Star
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Aapka ek review hamare business ko aur badhayega. Agar aapka anubhav achha raha ho —{" "}
                <strong className="text-blue-800">Google Pe Zaroor Bataiye!</strong>
              </p>
              <motion.a
                href="https://g.page/r/review"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-2xl font-semibold text-sm shadow-lg shadow-amber-400/30 transition-all"
              >
                <Star className="w-4 h-4 fill-white" />
                Google Pe Review De
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </div>

            {/* Rating bars */}
            <div className="hidden lg:block max-w-xs w-full">
              {[
                { stars: 5, width: "80%", count: 19 },
                { stars: 4, width: "12%", count: 3 },
                { stars: 3, width: "4%", count: 1 },
                { stars: 2, width: "2%", count: 0 },
                { stars: 1, width: "2%", count: 1 },
              ].map((bar) => (
                <div key={bar.stars} className="flex items-center gap-3 mb-2.5">
                  <div className="flex gap-0.5 w-16 justify-end">
                    {Array.from({ length: bar.stars }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 star-filled" />
                    ))}
                  </div>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: bar.width } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-amber-400 rounded-full"
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-4 text-right">{bar.count}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-amber-100 transition-all duration-300"
            >
              {/* Quote */}
              <Quote className="w-8 h-8 text-amber-200 fill-amber-100 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <StarRating count={review.rating} />
                {review.verified && (
                  <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                    ✓ Verified
                  </span>
                )}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-5 line-clamp-4">
                "{review.review}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-10 h-10 ${review.avatarBg} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">
                    {review.location} • {review.timeAgo}
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 via-red-400 to-yellow-400 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">G</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm mb-4">
            Aur bhi reviews dekhna chahte ho?{" "}
          </p>
          <motion.a
            href="https://g.page/r/review"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border-2 border-amber-400 text-amber-700 hover:bg-amber-50 px-6 py-3 rounded-2xl font-semibold text-sm transition-all"
          >
            Sab Reviews Dekhein Google Pe
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
