import React, { useState } from "react";

function Card({ imageUrl, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gray-800 rounded-lg overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt={title} className="w-68 h-50 object-cover" />
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full opacity-80 bg-gray-800 flex flex-col justify-center items-center opacity-gradient-to-top">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
