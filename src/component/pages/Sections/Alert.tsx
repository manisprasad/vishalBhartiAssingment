import React from "react";

const NotificationSection = ({ alertText }: {alertText: string}) => {
  return (
    <div className="bg-yellow-100 border  mb-1 border-yellow-300 rounded-lg py-1 pl-3 mt-20">
      <div className="flex items-center space-x-2">
        <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
          ALERT
        </span>
        <div className="overflow-hidden whitespace-nowrap w-full relative">
          <div className="animate-marquee">
            <p className="text-gray-800 text-sm font-medium">{alertText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSection;
