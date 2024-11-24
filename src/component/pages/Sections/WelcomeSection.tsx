import React from "react";

const WelcomeSection = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-6 md:px-12">
      <div className="absolute inset-0 z-0">
        <img
          src="https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/vbs_bulidingpic.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:656"
          alt="Vishal Bharti Senior Secondary School"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center bg-white bg-opacity-10 rounded-lg p-8 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Welcome to Vishal Bharti Senior Secondary School
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          At Vishal Bharti Senior Secondary School, we believe that every
          student has the potential to excel academically and personally. That’s
          why we’ve developed a unique approach to learning that focuses on each
          student’s individual needs and learning style.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
          Our teachers are dedicated to fostering a supportive and inclusive
          learning environment, where students are encouraged to explore new
          ideas and take risks. We offer a wide range of academic and
          extracurricular programmes that enable our students to build a strong
          foundation for success.
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
