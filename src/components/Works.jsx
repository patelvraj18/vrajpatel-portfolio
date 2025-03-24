/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { github, link } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import PopupCarousel from './PopupCarousel';
import React, { useState, useEffect, useRef } from "react";

const ProjectCard = ({ id, index, name, description, tags, image, source_code_link, live_link, title, subtitle, images, line_break }) => {
  const githubIds = ['fairy', 'chalk', 'portfolio'];
  const liveLinkId = ['fairy', 'skylearn', 'vrajcreates', 'nexus', 'knockout', 'bball', 'rotten'];
  const popupIDs = ['chalk', 'movie', 'president'];

  const [showPopup, setShowPopup] = useState(false);
  const additionalImages = images;

  const handleCardClick = () => {
    if (popupIDs.includes(id)) {
      setShowPopup(true);
    }
  };

  const descriptionWithLineBreaks = description ? description.split('\n').map((text, idx) => (
    <React.Fragment key={idx}>
      {text}
      <br />
    </React.Fragment>
  )) : '';

  const lineBreakAnalysis = line_break ? line_break.split('\n').map((item, index) => (
    <React.Fragment key={index}>
      {item}
      <br />
    </React.Fragment>
  )) : '';

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="w-full sm:w-[360px]"
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl h-full'
        >
          <div className='relative w-full h-[230px]' onClick={handleCardClick}>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl cursor-pointer'
            />
            <div className="absolute top-3 right-3 flex space-x-2">
              {liveLinkId.includes(id) && (
                <div onClick={(e) => { e.stopPropagation(); window.open(live_link, "_blank"); }} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <img src={link} alt="live_link" className="w-1/2 h-1/2 object-contain" />
                </div>
              )}
              {githubIds.includes(id) && (
                <div onClick={(e) => { e.stopPropagation(); window.open(source_code_link, "_blank"); }} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                </div>
              )}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{descriptionWithLineBreaks}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
          {/* <div>{lineBreakAnalysis}</div> */}
          {popupIDs.includes(id) && (
            <div
              className="text-center text-red-500 font-bold uppercase mt-5 mb-3 cursor-pointer underline italic"
              onClick={handleCardClick}  // Add this line
            >
              Click Me For More Details
            </div>
          )}
        </Tilt>
      </motion.div>

      <AnimatePresence>
        {showPopup && (
          <PopupCarousel
            isVisible={showPopup}
            onClose={() => setShowPopup(false)}
            images={additionalImages}
            title={title}
            subtitle={subtitle}
          />
        )}
      </AnimatePresence>
    </>
  );
};



const Works = () => {
  const [maxHeight, setMaxHeight] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      const maxCardHeight = cardRefs.current.reduce((max, card) => Math.max(card?.offsetHeight || 0, max), 0);
      setMaxHeight(maxCardHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
      >
        <p className={`${styles.sectionSubText}`}>what i have built so far</p>
        <h2 className={`${styles.sectionHeadText}`}>projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mt-4 text-secondary text-[17px] leading-[30px] w-full lowercase'
        >
          the following projects showcase my technical skills through projects that I have built and worked on. You can see each project's description with live demos and GitHub links where applicable. If a project does not have a live link, click on the card to see additional images of the work I did. I hope to create projects that not only improve my skills with languages, frameworks, and technologies but also benefit others and the community to solve problems.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <div
            key={`project-${index}`}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <ProjectCard
              index={index}
              {...project}
              cardHeight={maxHeight + 'px'}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");