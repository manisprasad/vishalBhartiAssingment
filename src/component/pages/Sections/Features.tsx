import React from "react";
import { FaSchool, FaSnowflake, FaBrain, FaAward, FaBuilding, FaMicroscope } from "react-icons/fa";

// Define a type for the FeatureCard props
interface FeatureCardProps {
  icon: React.ReactNode;
  bg: string;
  title: string;
}

const FeaturesSection: React.FC = () => {
  return (
    <div className="mt-10 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg  w-11/12 mx-auto">
      <h3 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Why Choose Us?
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Feature: Affiliated to CBSE */}
        <FeatureCard 
          icon={<FaSchool size={24} />} 
          bg="bg-blue-100 text-blue-600 dark:bg-blue-700 dark:text-white" 
          title="Affiliated to CBSE" 
        />

        {/* Feature: Fully Air-Conditioned */}
        <FeatureCard 
          icon={<FaSnowflake size={24} />} 
          bg="bg-green-100 text-green-600 dark:bg-green-700 dark:text-white" 
          title="Fully Air-Conditioned" 
        />

        {/* Feature: Abacus and Vedic Maths */}
        <FeatureCard 
          icon={<FaBrain size={24} />} 
          bg="bg-purple-100 text-purple-600 dark:bg-purple-700 dark:text-white" 
          title="Abacus & Vedic Maths" 
        />

        {/* Feature: Scholarship Programs */}
        <FeatureCard 
          icon={<FaAward size={24} />} 
          bg="bg-yellow-100 text-yellow-600 dark:bg-yellow-700 dark:text-white" 
          title="Scholarship Programs" 
        />

        {/* Feature: Good Infrastructure */}
        <FeatureCard 
          icon={<FaBuilding size={24} />} 
          bg="bg-indigo-100 text-indigo-600 dark:bg-indigo-700 dark:text-white" 
          title="Good Infrastructure" 
        />

        {/* Feature: Proper Equipped Laboratory */}
        <FeatureCard 
          icon={<FaMicroscope size={24} />} 
          bg="bg-red-100 text-red-600 dark:bg-red-700 dark:text-white" 
          title="Equipped Laboratory" 
        />
      </div>
    </div>
  );
};

// Reusable FeatureCard component with type definition
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, bg, title }) => {
  return (
    <div className={`flex flex-col items-center text-center space-y-2 p-3 hover:scale-105 transition transform hover:shadow-md rounded-lg ${bg}`}>
      <div className="flex items-center justify-center w-12 h-12 rounded-full">
        {icon}
      </div>
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
};

export default FeaturesSection;
