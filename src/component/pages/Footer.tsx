import React from "react";
import {
    FaFacebookF, FaInstagram, FaWpforms, FaTwitter, FaPhoneAlt, FaBuilding,
    FaLaptop, FaMusic, FaBookReader, FaBus, FaUniversity, FaFileAlt, FaPen,
    FaBlog, FaShieldAlt, FaRegCalendarAlt
} from "react-icons/fa";
import { HiClipboardList, HiAcademicCap } from "react-icons/hi";
import { TbMathSymbols } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { SlChemistry } from "react-icons/sl";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-100 via-white to-blue-50 text-gray-800">

<section className="bg-gradient-to-r from-blue-100 via-white to-blue-50 py-12 border-t-2 ">
  <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
    {/* Image Section */}
    <div className="w-64 h-64 md:w-1/3 md:h-auto mx-auto mb-6 md:mb-0">
      <img
        src="https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/blob-bc2987e.png/:/cr=t:19.54%25,l:0%25,w:100%25,h:60.92%25/rs=w:600,h:800,cg:true"
        alt="Principal"
        className="rounded-full object-cover w-60 h-60 shadow-xl"
      />
    </div>

    {/* Text Section */}
    <div className="md:w-2/3 md:pl-8 text-center md:text-left ">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        From Our Principal's Desk
      </h2>
      <blockquote className="text-lg italic text-gray-600 mb-6 px-4 md:px-0">
        “Education is our passport to the future. Tomorrow belongs to those who prepare for it today.” – Malcolm X
      </blockquote>
      <p className="text-gray-700 leading-relaxed text-base">
        Our school, with an enthusiastic, experienced, and qualified teaching staff, along with excellent infrastructure, creates a holistic environment for students to grow into capable young individuals. Co-curricular activities complement the curriculum, developing students' personalities at the physical, mental, and cultural levels. We also offer a range of clubs, including Music, Dance, Art & Craft, and Dramatics, nurturing both scholastic and non-scholastic attributes.
      </p>
    </div>
  </div>
</section>




            {/* for marketing purposes */}
            <section className="bg-gradient-to-r from-pink-100/15 to-pink-200 py-12 border-y-2 border-y-green-400">
  <div className="container mx-auto text-center px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-3 tracking-wide">
      Our Vision & Motto
    </h2>
    <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
      Empowering students to pursue their dreams, fueling passion for learning, and developing their innate qualities to the fullest.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      Core Values
    </h3>
    <p className="text-sm text-gray-700 mb-6 max-w-2xl mx-auto">
      Resilience, Respect, Responsibility, Honesty, Academic Excellence, Patriotism, Dignity, Perseverance.
    </p>

    <div className="flex justify-center">
      <button className="bg-pink-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition-all duration-300">
        Learn More
      </button>
    </div>
  </div>
</section>





            <div className="container mx-auto py-10 px-4 ">
                {/* Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Column 1: School Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                            <FaUniversity className="text-green-500" />
                            <span>School Info</span>
                        </h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><FaFileAlt /> <span>About Us</span></a></li>
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><FaPen /> <span>Career</span></a></li>
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><FaBlog /> <span>Blog</span></a></li>
                        </ul>
                    </div>

                    {/* Merged Column: Rules */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                            <FaShieldAlt className="text-green-500" />
                            <span>Rules</span>
                        </h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><FaFileAlt /> <span>Privacy Policy</span></a></li>
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><FaFileAlt /> <span>Anti-Bullying Policy</span></a></li>
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><HiAcademicCap /> <span>Rules & Regulations</span></a></li>
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><FaRegCalendarAlt /> <span>Assessments</span></a></li>
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><FaPen /> <span>Counselling</span></a></li>
                        </ul>
                    </div>

                    {/* Column 3: Admission and Academics */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                            <HiClipboardList className="text-green-500" />
                            <span>Admissions & Academics</span>
                        </h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><FaRegCalendarAlt /> <span>Admission Procedure</span></a></li>
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><FaWpforms /> <span>Registration Form</span></a></li>
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><FaRegCalendarAlt /> <span>Admission/Withdrawal Rules</span></a></li>
                        </ul>
                    </div>

                    {/* Infra. and Facilities */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                            <FaBuilding className="text-green-500" />
                            <span>Infrastructure & Facilities</span>
                        </h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><FaRegCalendarAlt /> <span>Reception</span></a></li>
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><TbMathSymbols /> <span>Mathematics Laboratory</span></a></li>
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><SlChemistry /> <span>Bio, Chemistry, Physics Labs</span></a></li>
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><FaLaptop /> <span>Computer Lab</span></a></li>
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><FaMusic /> <span>Music Room</span></a></li>
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><FaBookReader /> <span>Library</span></a></li>
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><FaBus /> <span>Transportation</span></a></li>
                            <li><a href="#" className="hover:text-blue-500 flex items-center space-x-2"><FaBuilding /> <span>Classrooms</span></a></li>
                        </ul>
                    </div>

                    {/* Column 5: Get In Touch */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                            <FaPhoneAlt className="text-green-500" />
                            <span>Get In Touch</span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-2">
                                <FaPhoneAlt className="" />
                                <span>9354937851/54</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaBuilding className="w-8" />
                                <span>Parwana Road, Pundrik Vihar, Pitam Pura, New Delhi</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MdOutlineEmail />
                                <span>vbsschool.info@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>



                {/* Footer Bottom */}
                <div className="border-t mt-10 pt-5 flex flex-col sm:flex-row justify-between items-center text-center text-sm text-gray-500">
                    <p className="mb-4 sm:mb-0">
                        Copyright © 2024 Vishal Bharti Senior Secondary School - All Rights Reserved
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#" aria-label="Facebook" className="text-blue-500 hover:text-green-600">
                            <FaFacebookF className="text-2xl" />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-pink-500 hover:text-green-600">
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a href="#" aria-label="Twitter" className="text-blue-500 hover:text-green-600">
                            <FaTwitter className="text-2xl" />
                        </a>
                    </div>
                </div>
                <div className="border-t-2 mt-10 border-gray-800 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9087.32332893746!2d77.10686719758345!3d28.68868172411571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03dd4002a4ef%3A0x418a9f9ece7afe33!2sVishal%20Bharti%20Sr%20Sec%20School!5e1!3m2!1sen!2sin!4v1732399639164!5m2!1sen!2sin"
       className="w-full h-96 border-t-2  "
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="School Location"
      ></iframe>
    </div>
            </div>
        </footer>
    );
};

export default Footer;
