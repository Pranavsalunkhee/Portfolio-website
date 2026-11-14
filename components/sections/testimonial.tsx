
"use client";

import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";

const STRENGTHS = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Building responsive frontend applications and functional backend systems using React.js, Node.js, Python and Django.",
    accent: "from-emerald-400 to-green-600",
  },
  {
    number: "02",
    title: "Problem Solving",
    description:
      "Breaking down complex requirements into practical technical solutions and writing clean, maintainable code.",
    accent: "from-blue-400 to-cyan-500",
  },
  {
    number: "03",
    title: "API & Database Integration",
    description:
      "Connecting frontend applications with backend services, REST APIs and databases to build seamless experiences.",
    accent: "from-purple-400 to-indigo-500",
  },
  {
    number: "04",
    title: "Team Collaboration",
    description:
      "Working with frontend, backend and mobile development teams to deliver reliable, production-ready applications.",
    accent: "from-orange-400 to-rose-500",
  },
];

export const Testimonial: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative c-space section-spacing overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-[60%] rounded-full bg-lavender/10 blur-[140px]" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-eyebrow"
      >
        What I Bring
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="text-heading mt-3 max-w-3xl"
      >
        More than just{" "}
        <span className="text-gradient">writing code.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg"
      >
        I focus on understanding problems, building practical solutions and
        creating software that delivers real value. From frontend experiences
        to backend functionality, I enjoy working across the full development
        lifecycle.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {STRENGTHS.map((item, index) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15 + index * 0.1,
            }}
            className="glass gradient-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
          >
            <div className="flex items-center justify-between">
              <span
                className={`bg-gradient-to-r ${item.accent} bg-clip-text text-3xl font-bold text-transparent`}
              >
                {item.number}
              </span>
              <div
                className={`h-2 w-2 rounded-full bg-gradient-to-r ${item.accent}`}
              />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-white md:text-2xl">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-neutral-400 md:text-base">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
