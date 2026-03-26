"use client";

import {
  Settings,
  Users,
  BarChart3,
  Clock,
  ShieldCheck,
  Globe2,
  Workflow,
  HeartHandshake,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";

// ✅ DATA (UNCHANGED)
const features = [
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: "Customized Solutions",
    description:
      "We tailor SAP implementations to your specific business needs, ensuring you get maximum value from your investment.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Expert Team",
    description:
      "Our certified SAP consultants bring years of experience across industries to solve your most complex challenges.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Data Analytics",
    description:
      "Transform your data into actionable insights with our advanced SAP analytics and reporting solutions.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Faster Implementation",
    description:
      "Our accelerated implementation methodology reduces project timelines and gets you up and running quickly.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Secure Systems",
    description:
      "We build robust security protocols into every implementation to protect your valuable business data.",
  },
  {
    icon: <Globe2 className="h-8 w-8 text-primary" />,
    title: "Global Support",
    description:
      "Round-the-clock support for your SAP systems from our team of experts located around the world.",
  },
  {
    icon: <Workflow className="h-8 w-8 text-primary" />,
    title: "Process Optimization",
    description:
      "We streamline your business processes through intelligent automation and SAP best practices.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Long-Term Partnership",
    description:
      "We're committed to your success beyond implementation with ongoing support and strategic guidance.",
  },
];

// ✅ CARD COMPONENT
function FeatureCard({ icon, title, description, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <motion.div className="group p-6 rounded-xl bg-background/60 border border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-500 h-full backdrop-blur-sm relative overflow-hidden">
        {/* Hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Icon */}
        <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">{icon}</div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground">{description}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* 🔥 NEW MODERN BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-[#0a0a0a] dark:via-[#0f172a] dark:to-[#020617]"></div>

        {/* Center radial light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_70%)]"></div>

        {/* Glow blobs */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[120px]"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[120px]"></div>

        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-pink-400/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Why Choose Us
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our Capabilities
          </h2>

          <p className="text-muted-foreground">
            We combine deep SAP expertise with innovation to deliver solutions
            that drive business transformation and create lasting value.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-justify">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
