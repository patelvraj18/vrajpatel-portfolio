/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black lowercase">
      <div className="max-w-md w-full mx-4 p-8 bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-xl border border-gray-800 animate-fade-in backdrop-blur-sm">
        <div className="text-center space-y-6">
          {/* Large 404 Number */}
          <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-400 to-white animate-pulse">
            404
          </h1>

          {/* Divider */}
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-white via-gray-500 to-white rounded-full opacity-50" />

          {/* Text Content */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Lost in Space?
            </h2>
            <p className="text-gray-400">
              The page you're looking for has drifted off into the digital void.
              Let's get you back home safely.
            </p>
          </div>

          {/* Button */}
          <Link
            to="/"
            className="group inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg 
                       hover:gap-3 transition-all duration-200
                       bg-gradient-to-r from-white via-gray-200 to-white
                       text-black hover:opacity-90"
          >
            <Home size={20} />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Add this CSS to your global styles or component
const styles = `
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}
`;

// Add style tag to inject the CSS
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default NotFound;