import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  actionText?: string;
  onActionClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  actionText = "Learn More", 
  onActionClick 
}) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden border border-gray-200">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        {onActionClick && (
          <button
            onClick={onActionClick}
            className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
