
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Regina Miles",
      role: "Designer",
      image:
        "https://th.bing.com/th/id/OIP.gMygPVVsq6q2KQs_VhmX7QHaEK?w=309&h=180&c=7&r=0&o=5&pid=1.7", // Replace with actual image URL
      review:
        "A fantastic platform to achieve your goals!",
      rating: 4,
    },
    {
      name: "Regina Miles",
      role: "Designer",
      image:
        "https://th.bing.com/th/id/OIP.DG2f4T-Av9duzz-H2C2nmwHaE8?w=287&h=192&c=7&r=0&o=5&pid=1.7", // Replace with actual image URL
      review:
        "Simple, intuitive, and effective!",
      rating: 4,
    },
    
  ];

  return (
    <section className="bg-gradient-to-r from-blue-100 via-white to-blue-50 py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-sm text-green-500 font-semibold mb-2">
          Testimonials
        </h3>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          What our Student Says
        </h2>
        <p className="text-gray-600 mb-12">
          
        </p>
        <div className="flex gap-6 justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <p className="text-gray-600">{testimonial.review}</p>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={starIndex < testimonial.rating ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.1 6.477a1 1 0 00.95.69h6.829c.969 0 1.371 1.24.588 1.81l-5.525 4.02a1 1 0 00-.364 1.118l2.1 6.477c.3.921-.755 1.688-1.538 1.118l-5.525-4.02a1 1 0 00-1.175 0l-5.525 4.02c-.783.57-1.838-.197-1.538-1.118l2.1-6.477a1 1 0 00-.364-1.118L2.07 11.903c-.783-.57-.381-1.81.588-1.81h6.83a1 1 0 00.949-.69l2.1-6.477z"
                    />
                  </svg>
                ))}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
