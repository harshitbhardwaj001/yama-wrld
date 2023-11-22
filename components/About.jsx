    import React from "react";
    import Tilt from "react-parallax-tilt";
    import { motion } from "framer-motion";
    import "./index.css"
    import { services } from "../contants";
    import { SectionWrapper } from "../hoc";
    import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
    import zoya from "../assets/Zoya.gif"
    import Image from "next/image";

    const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-blue-gradient p-[1px] rounded-[20px] shadow-card'
        >
        <div
            options={{
            max: 45,
            scale: 1,
            speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
            <Image
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
            />

            <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
            </h3>
        </div>
        </motion.div>
    </Tilt>
    );

    const About = () => {
    return (
        <>
        <motion.div variants={textVariant()} className='mt-[120px]'>
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">What is a</p>
            <h2 className="text-[#EE3124] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Citizen Pass?</h2>
        </motion.div>

        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
            The Citizen Pass is a special body implant that grants access across multiple levels in Mandala. Including a secret underground meet-up spot known as “The Dhaba”.
        Citizen Passes are a limited supply collectible available to early adopters of Yama. They will live on the Ethereum Blockchain as a unique non-fungible token.
        </motion.p>

        <motion.div 
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className="absolute ml-[850px] bottom-[-60px] sm:block hidden"
        >
            <Image src={zoya} alt="zoya" width={500} />
        </motion.div>

        <div className='mt-20 flex flex-wrap gap-10'>
            {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </div>
        </>
    );
    };

    export default SectionWrapper(About, "about");