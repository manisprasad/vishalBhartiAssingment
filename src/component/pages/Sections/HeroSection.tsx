import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const HeroSection = () => {

    const images = [
        "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/81962e3b-69a6-40ed-ab82-dbacbd0c37b4%20(1).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:960",
        "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/vbs_bulidingpic.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:656",
        "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/e8c22d59-d752-4874-b627-9caddadc36fc.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:720",
        "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/b3bb26cc-5808-4ed7-b165-f57016544231%20(2).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:870",
    ];
    // Animation Variants
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);


    return (
        <section className="relative bg-gradient-to-r from-blue-100 via-white to-blue-50 overflow-hidden min-h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/vbs_bulidingpic.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:656"
                    alt="Vishal Bharti Senior Secondary School"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>

            <div className="relative container mx-auto px-6 lg:px-20 py-16 lg:py-24 z-10">
                {/* Hero Content */}
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Text Content */}
                    <motion.div
                        className="lg:w-1/2 text-center lg:text-left"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 gradient-shade1">
                            Empowering Young Minds for a{" "}
                            <span className="text-blue-600">Brighter Future</span>
                        </h1>
                        <p className="mt-6 text-gray-600 text-lg">
                            Welcome to{" "}
                            <span className="underline font-bold text-slate-600">Vishal Bharti</span>, where
                            learning meets excellence. Discover a nurturing environment for
                            academics, creativity, and holistic growth.
                        </p>
                        <div className="mt-8 space-x-4">
                            <a
                                href="#admissions"
                                className="bg-primary text-white px-8 py-3 rounded-lg text-lg shadow-md hover:bg-blue-700 transition duration-300"
                            >
                                Admissions
                            </a>
                            <a
                                href="#about"
                                className="bg-yellow-300 text-black px-8 py-3 rounded-lg text-lg shadow-md hover:bg-gray-200 transition duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        className="lg:w-1/2 mt-12 lg:mt-0 relative"
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="relative shadow-xl rounded-lg overflow-hidden   card ">
                            <div className="relative">
                                <AnimatePresence>
                                    <motion.img
                                        key={currentIndex}
                                        src={images[currentIndex]}
                                        alt={`Carousel Image ${currentIndex + 1}`}
                                        className="w-ful h-auto rounded-lg transition-transform duration-500 hover:scale-105"
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={imageVariants}
                                    />
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>

























                {/* Welcome Section */}
                <div className="mt-6   bg-opacity-60 backdrop-blur-md rounded-lg p-8 shadow-lg max-w-5xl mx-auto text-center border bg-gradient-to-r from-blue-100 via-white to-blue-50">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 ">
                            Welcome to Vishal Bharti Senior Secondary School
                        </h2>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <p className="text-lg md:text-xl text-left text-gray-700 leading-relaxed ">
                            At Vishal Bharti Senior Secondary School, we believe that every
                            student has the potential to excel academically and personally.
                            That’s why we’ve developed a unique approach to learning that
                            focuses on each student’s individual needs and learning style.
                        </p>
                        <p className="text-lg md:text-xl text-left text-gray-700 leading-relaxed mt-4">
                            Our teachers are dedicated to fostering a supportive and inclusive
                            learning environment, where students are encouraged to explore new
                            ideas and take risks. We offer a wide range of academic and
                            extracurricular programs that enable our students to build a strong
                            foundation for success.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
