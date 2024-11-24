import React from "react";
import ImageCard from "../../ImageCard";
import { Event } from "../Home";


const EventsSection = ({ events } : {events: Event[]}) => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-white to-blue-50 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6">
          Events & Activities
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Discover the latest events and activities happening at our school. We aim to foster creativity, teamwork, and joy through various engaging programs.
        </p>
        <div className="flex  flex-wrap gap-2">
          {events.map((event, index) => (
            <ImageCard key={index} title={event.title} imageSrc={event.img} description="Vishal Bharti Senior Secondary School" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
