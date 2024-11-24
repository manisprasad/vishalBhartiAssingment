import React, { useState } from "react";
import vishalBhartiLogo from '../../assets/Vishal_Bharti_Senior_Secondary_School_1559_Logo_1.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const menuItems = [
    {
      name: "School Info",
      subItems: [
        { title: "About Us", description: "Learn about our mission, vision, and values." },
        { title: "Career", description: "Explore opportunities to join our team." },
        { title: "Blog", description: "Read updates, news, and insights from our school." }
      ]
    },
    {
      name: "Rules",
      subItems: [
        { title: "Privacy Policy", description: "Understand how we handle your data responsibly." },
        { title: "Anti-Bullying Policy", description: "Our commitment to providing a safe environment." },
        { title: "Rules & Regulations", description: "Guidelines for students and staff." },
        { title: "Assessments", description: "Information on how student performance is evaluated." },
        { title: "Counselling", description: "Support services for students' mental well-being." }
      ]
    },
    {
      name: "Admissions & Academics",
      subItems: [
        { title: "Admission Procedure", description: "Step-by-step guide to enrolling your child." },
        { title: "Registration Form", description: "Access the form to begin your application process." },
        { title: "Admission/Withdrawal Rules", description: "Policies for joining or leaving the school." }
      ]
    },
    {
      name: "Infrastructure & Facilities",
      subItems: [
        { title: "Reception", description: "Our welcoming and helpful front desk team." },
        { title: "Mathematics Laboratory", description: "A dedicated space for hands-on math learning." },
        { title: "Bio, Chemistry, Physics Labs", description: "State-of-the-art science laboratories." },
        { title: "Computer Lab", description: "Equipped for digital learning and research." },
        { title: "Music Room", description: "Fostering creativity with musical instruments and training." },
        { title: "Library", description: "A vast collection of books and study resources." },
        { title: "Transportation", description: "Safe and reliable school transport options." },
        { title: "Classrooms", description: "Modern, well-equipped learning spaces." }
      ]
    }
  ];
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 z-50 card">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse ">
          <img
            src={vishalBhartiLogo}
            className=" rounded-full w-10"
            alt="School Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">
            Vishal Bharti
          </span>
        </a>
        <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className={`items-center justify-between font-medium w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menuItems.map((menu, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center justify-between py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {menu.name}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                {openDropdown === index && (
                  <div className="absolute left-0 mt-1 w-96 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600 z-50 w-72">
                    <div className="flex max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white md:px-6">
                      <ul>
                      {menu.subItems.map((subItem, subIndex) => (
  <li key={subIndex}>
    <a href="#" className="block p-3 hover:rounded-lg hover:bg-gray-100 border-b-2 dark:hover:bg-gray-700">
      <div className="font-semibold">{subItem.title}</div>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {subItem.description}
      </span>
    </a>
  </li>
))}

                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <button className="text-white bg-primary hover:bg-blue-700 px-4 py-2 rounded-xl ml-4 md:ml-6">
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
