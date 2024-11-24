
import Footer from './Footer';
import TestimonialsSection from './TestimonialsSection ';
import { IoMdChatboxes } from "react-icons/io";
import Carousel from '../Carousel';
import WhatWeOffer from './Sections/WhatWeOffer';

import Navbar from './NavBar';
import NotificationSection from './Sections/Alert';
import EventsSection from './Sections/EvenSection';
import HeroSection from './Sections/HeroSection';
import FeaturesSection from './Sections/Features';


export interface Card{
    title: string;
    image: string;
}

export interface Event{
    title: string;
    img: string;
}

const HomePage = () => {

 

    const cards:Card[] = [
      
        {
          title: "Science Exhibition",
          image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/81962e3b-69a6-40ed-ab82-dbacbd0c37b4%20(1).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25",
        },
        {
          title: "School Building Overview",
          image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/vbs_bulidingpic.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25",
        },
        {
          title: "Sports Day Parade",
          image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.37.18%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25",
        },
        {
          title: "Art Competition Winners",
          image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.25.46%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25",
        },
        {
          title: "Cultural Event Performance",
          image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.42.16%20PM%20(1).jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25",
        },
        {
          title: "School Assembly",
          image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.37.19%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25",
        },
        {
          title: "Library View",
          image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/d023117d-d3e9-4493-a373-e057f29e72f5.jpg/:/",
        },
        {
          title: "Annual Day Dance Performance",
          image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/81962e3b-69a6-40ed-ab82-dbacbd0c37b4%20(1).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25",
        },
        {
          title: "Award Distribution Ceremony",
          image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/b3bb26cc-5808-4ed7-b165-f57016544231%20(2).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25",
        },
        
      ];


      const events:Event[] = [
        {
          title: "Event 1",
          img: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/October%20dossier%202024_11.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25",
        },
        {
          title: "Event 2",
          img: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/October%20dossier%202024_49.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25",
        },
        {
          title: "Event 3",
          img: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/October%20dossier%202024_49.jpg/:/cr=t:0%25,l:7.81%25,w:84.38%25,h:84.38%25",
        },
        {
          title: "Event 4",
          img: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/October%20dossier%202024_08.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25",
        },
        {
          title: "Event 5",
          img: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/October%20dossier%202024_10.jpg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25",
        },
       
      ];
      

      

      return (
        <div className="bg-background text-foreground relative bg-gradient-to-r from-blue-100 via-white to-blue-50">
            <Navbar />
            <NotificationSection alertText='Registration open for admission in classes LKG, UKG and I for the session (2025-26) ' />

            <HeroSection />
            <FeaturesSection/>
           
            {/* Decorative Line */}
            <div className="relative w-full ">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-background  text-sm text-gray-500 px-1">Our Offerings</span>
                </div>
            </div>
    
            <WhatWeOffer />
    
            {/* Decorative Line */}
            <div className="relative w-full ">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-background px-4 text-sm text-gray-500">Discover More</span>
                </div>
            </div>
    
            <Carousel cards={cards} />
    
            <EventsSection events={events} />
    
            <TestimonialsSection />
            <Footer />

            <button className='fixed right-3 bottom-3 p-2 z-50 '>
            <IoMdChatboxes className='text-5xl rounded-full bg-yellow-500 p-3' />
            </button>
        </div>
    );
    
};

export default HomePage;
