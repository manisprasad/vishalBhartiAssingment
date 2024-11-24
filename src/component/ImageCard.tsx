import React from 'react';
import { motion } from 'framer-motion';

interface ImageCardProps {
  imageSrc: string; // URL of the image
  title: string; // Title of the card
  description?: string; // Short description to display
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, title, description }) => {
  return (
    <motion.article
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl max-w-sm mx-auto mt-12 shadow-lg group"
      style={{ width: '300px', height: '350px' }}
      whileHover={{
        scale: 1.05, // Slight zoom-in effect on hover
        transition: { duration: 0.3 }, // Smooth transition
      }}
    >
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
      {/* Content */}
      <div className="z-10 mb-10 transition-opacity duration-300 group-hover:opacity-0 px-4">
        <h3 className="mt-3 text-xl font-bold text-white">{title}</h3>
        <p className="text-sm leading-6 text-gray-300">{description}</p>
      </div>
    </motion.article>
  );
};

export default ImageCard;
