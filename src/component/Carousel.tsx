import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import ImageCard from './ImageCard';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

interface Card {
  title: string;
  image: string;
}

interface CarouselProps {
  cards: Card[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Adjust scroll distance
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Adjust scroll distance
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="p-8 bg-gradient-to-r from-blue-100 via-white to-blue-50">
      {/* Heading */}
      <motion.h2
        className="text-center text-3xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        School in Live Action
      </motion.h2>
      <motion.p
        className="text-center text-gray-600 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        Inspiring stories and impactful learning experiences at schools.
      </motion.p>

      {/* Carousel Container */}
      <div className="relative">
        {/* Scrollable Row */}
        <motion.div
          ref={scrollRef}
          className="flex overflow-y-scroll space-x-4 scroll-smooth hide-scrollbar"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] max-w-[300px] flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ImageCard
                title={card.title}
                imageSrc={card.image}
                description="Vishal Bharti Senior Secondary School"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Left Button */}
        <motion.button
          onClick={scrollLeft}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 shadow-lg z-10"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronCircleLeft />
        </motion.button>

        {/* Right Button */}
        <motion.button
          onClick={scrollRight}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 shadow-lg z-10"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronCircleRight />
        </motion.button>
      </div>
    </section>
  );
};

export default Carousel;
