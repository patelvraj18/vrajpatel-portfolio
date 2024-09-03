/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, index, 0.75)}
        className="w-full green-pink-gradient p-[1-px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 25,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-4 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          who is vraj?</p>
        <h2 className={styles.sectionHeadText}>overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w 3x1 leading-[30px] ">
        yo! my name is vraj - a skilled software engineer with experience in front-end and back-end languages and technologies. i am a current undergraduate student at washington university in st. louis majoring in computer science with a minor in bioinfomatics. i am currently looking for new grad roles after graduation this upcoming may of 2025.
        <br></br>
        <br></br>
        i am passionate about building software that solves real world problems. i am building out <a
          href="https://flashcardify.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >flashcardify.ai</a> – an ai active learning based study tool that helps learners, learn more effectively. scroll down to see some other projects i have worked on.
        <br></br>
        <br></br>
        coding and building is one-half of who i am. the other half is my creative side where i love to do photography and videography work. check me at <a
          href="https://vrajcreates.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >vrajcreates</a> to see some of my work!! i also love traveling, playing tennis and basketball, and want to learn how to surf one day! :)
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")