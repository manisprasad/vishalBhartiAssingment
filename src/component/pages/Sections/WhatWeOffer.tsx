
import { FaSchool } from "react-icons/fa";

const WhatWeOffer = () => {
  const offerings = [
    {
      title: "Junior School",
      icon: <FaSchool />,
      description: "Classes I and II: Focus on foundational learning and co-curricular activities.",
      gradient: "from-yellow-500 to-pink-500",
    },
    {
      title: "Primary School",
      icon: <FaSchool />,
      description: "Classes III-V: Emphasis on comprehensive evaluation and language skills.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Middle School",
      icon: <FaSchool />,
      description: "Classes VI-VIII: Advanced subject learning with activities for holistic growth.",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Senior Secondary",
      icon: <FaSchool />,
      description: `Classes IX-XII: 
        Science Stream - Medical & Engineering. 
        Commerce Stream - With or Without Maths. 
        Humanities - Social Sciences and Arts.`,
      gradient: "from-purple-500 to-red-500",
    },
  ];

  return (
    <section className="p-12 bg-gradient-to-r from-blue-100 via-white to-blue-50">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        What We Offer
      </h2>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
        Explore our curriculum designed to foster growth and prepare students for their future. 
        From foundational to advanced learning, we cater to every stage of development.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {offerings.map((offer, index) => (
          <div
            key={index}
            className={`relative flex flex-col overflow-hidden rounded-lg bg-gradient-to-br ${offer.gradient} shadow-md transform hover:scale-105 transition-transform duration-300`}
          >
            {/* Icon and Title */}
            <div className="p-4 text-center">
              <div className="text-4xl text-white mb-3">{offer.icon}</div>
              <h3 className="text-lg font-semibold text-white">{offer.title}</h3>
            </div>

            {/* Description */}
            <div className="mt-auto bg-white p-4 text-gray-700">
              <p className="text-sm">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
