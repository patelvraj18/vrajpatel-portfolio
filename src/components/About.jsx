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
      <div
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
      </div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>
          who is vraj?</p>
        <h2 className={styles.sectionHeadText}>overview.</h2>
      </div>

      <p
        className="mt-4 text-secondary text-[17px] max-w 3x1 leading-[30px] ">
        yo! my name is vraj - a skilled software engineer with experience in front-end and back-end languages and technologies. i am a recent graduate from washington university in st. louis where i majored in computer science. i am open to any new grad roles in tech. i am especially passionate about front-end development, perfecting ui/ux, and creating stunning designs that are functional.
        <br></br>
        <br></br>
        i am passionate about building software that solves real world problems. i am working on <a
          href="https://skylearn.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >skylearn</a> – an ai active learning based study tool that helps learners, learn more effectively. scroll down to see some other projects i have worked on.
        <br></br>
        <br></br>
        coding and building is one-half of who i am. the other half is my creative side where i love to do photography and videography work. check me at <a
          href="https://vrajcreates.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >vrajcreates</a> to see some of my work!! i also love traveling, playing tennis and basketball, and want to learn how to surf one day! :)
      </p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")