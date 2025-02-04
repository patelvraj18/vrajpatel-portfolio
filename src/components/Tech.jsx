/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants";
import Ball from "./canvas/Ball";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>what i know the best</p>
        <h2 className={`${styles.sectionHeadText} mb-10`}>technical skills.</h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} techName={technology.name} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "skills");