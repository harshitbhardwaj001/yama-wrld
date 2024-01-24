import React from "react";
import "./comp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "../node_modules/react-vertical-timeline-component/style.min.css";

import { experiences } from "../contants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#EE3124", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #EE3124" }}
    iconStyle={{ background: "#000" }}
    // date={experience.date}
    // icon={
    //     <div>
    //         <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
    //     </div>
    // }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-white text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Steps = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-[200px]">
        <p className="sm:text-[18px] text-[14px] text-black uppercase tracking-wider text-center">
          Early Access To Yama Wrld :
        </p>
        <h2 className="text-[#EE3124] md:text-[70px] font-extralight sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Citizen Pass
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="black">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Steps, "cpass");
