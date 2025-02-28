import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChartBar,
  FaRobot,
  FaChartPie,
  FaShieldAlt,
  FaBolt,
  FaChartLine,
  FaChevronDown,
} from "react-icons/fa";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: <FaChartBar className="w-8 h-8 text-purple-600" />,
      title: "Sentiment Analysis",
      description:
        "Advanced AI algorithms analyze review sentiments to provide accurate positive, negative, and neutral reviews.",
    },
    {
      icon: <FaRobot className="w-8 h-8 text-purple-600" />,
      title: "Natural Language Processing",
      description:
        "Analyze and understand customer reviews with NLP technology.",
    },
    {
      icon: <FaChartPie className="w-8 h-8 text-purple-600" />,
      title: "Sentiment Distribution",
      description:
        "Visualize sentiment trends with a distribution plot of customer reviews.",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-purple-600" />,
      title: "Confident Score",
      description:
        "Used Compound score and provide a confident score to help you understand the true product quality.",
    },
    {
      icon: <FaBolt className="w-8 h-8 text-purple-600" />,
      title: "Real-time Analysis",
      description:
        "Get instant insights as you browse products with our Chrome extension.",
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-purple-600" />,
      title: "Recommendation",
      description:
        "Recommending products based on the review and confident score.",
    },
  ];

  const toggleFeature = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-purple-600"> Smart Shopping</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI-powered review analysis tool comes packed with features to
            help you make confident purchasing decisions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;
            // Rotate 180° when active; if only hovered, rotate to 90°; else 0°.
            const iconRotation = isActive ? 180 : isHovered ? 90 : 0;
            const showDescription = isActive || isHovered;
            return (
              <motion.div
                key={index}
                layout
                onClick={() => toggleFeature(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group bg-white p-8 rounded-2xl shadow-lg cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-200 to-transparent opacity-0 group-hover:opacity-25 transition-opacity duration-300"
                  layout
                />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="bg-purple-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <motion.div
                    animate={{ rotate: iconRotation }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-purple-600 w-5 h-5" />
                  </motion.div>
                </div>
                <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <AnimatePresence>
                  {showDescription && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <p className="text-gray-600 mt-2">
                        {feature.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-purple-600 text-white rounded-2xl p-12 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Make Smarter Shopping Decisions?
            </h2>
            <p className="text-lg mb-8 text-purple-100">
              Install our Chrome extension and start analyzing product reviews
              instantly.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300 shadow-lg">
              Add to Chrome - It's Free
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
