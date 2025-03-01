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
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-transparent opacity-0 group-hover:opacity-25 transition-all duration-300 rounded-2xl" />

              {/* Content */}
              <div className="relative z-10">
                <div className="bg-purple-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                {/* Description - Hidden by default, shown on hover */}
                <p className="text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
