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
          Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w 3x1 leading-[30px] ">
        Hello! My name is Vraj Patel - a skilled software engineer with experience in front-end and back-end languages and technologies. I am a current undergraduate student at Washington University in St. Louis majoring in Computer Science with a minor in Bioinfomatics. I am currently looking for Summer 2024 internships.
        <br></br>
        <br></br>
        I am passionate about building software that solves real world problems. The software that I am working on right now aims to connect college students to resources like office hours to get help in their classes. In my free time, I am super passionate to do creative photography and videography work. I also love to play tennis and basketball when I get the chance.
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