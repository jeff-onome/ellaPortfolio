"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";

// Import Image
import Exp from "../assets/1.jpeg";

// Stats Data
const stats = [
  { label: "Years of Experience", value: 4, suffix: "" },
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Industries Designed For", value: 7, suffix: "+" },
  { label: "Client Satisfaction Rate", value: 99, suffix: "%" },
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, i) =>
            count < stats[i].value ? count + 1 : stats[i].value
          )
        );
      }, 50);

      setTimeout(() => clearInterval(interval), 2000);
    }
  }, [inView]);

  return (
    <>
      {/* Experience Section */}
      <div className="flex flex-col items-center justify-center text-center relative py-20">
        <p className="text-white/50 italic absolute top-5 left-10 md:left-40 text-sm md:text-lg">
          Who’s this girl about to work her design magic?
        </p>

        <div className="w-full max-w-6xl px-4">
          <Image src={Exp} alt="Me" layout="responsive" className="rounded-lg" />
        </div>
      </div>

      {/* Animated Stats Section */}
      <div ref={ref} className="w-full py-16 bg-black text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.p className="text-9xl font-light text-white/70">
                {counts[index]}
                <span className="text-4xl">{stat.suffix}</span>
              </motion.p>
              <p className="text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
