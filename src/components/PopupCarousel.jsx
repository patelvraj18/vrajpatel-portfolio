/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import { zoomIn } from '../utils/motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Requires react-responsive-carousel package
import { Carousel } from 'react-responsive-carousel';
import { closeX } from '../assets';

const PopupCarousel = ({ isVisible, onClose, images, title, subtitle }) => {
  if (!isVisible) return null;

  const subtitleLines = subtitle.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <motion.div
      variants={zoomIn(0.1, 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-[1000]"
    >
      <div className="relative bg-quaternary rounded-lg p-4 max-w-[60%] max-h-[80%] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4"
        >
          <img src={closeX} alt="Close" className="w-4 h-4" />
        </button>
        <h1 className="text-white font-bold text-[24px] text-center mb-5">{title}</h1>
        <Carousel showThumbs={false} dynamicHeight={true} emulateTouch={true} selectedItem={3}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img src={image} alt={`Carousel item ${index}`} className='max-h-[60vh] object-contain' />
            </div>
          ))}
        </Carousel>
        <p className="mt-5 text-secondary text-[14px]">{subtitleLines}</p>
      </div>
    </motion.div>

  );
};

export default PopupCarousel;

