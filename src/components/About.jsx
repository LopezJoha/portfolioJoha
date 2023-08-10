import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from '../styles.js'; 
import { services } from '../constants'; 

import { fadeIn, textVariant } from "../utils/motion.js";
import { SectionWrapper} from '../highOrderComponent';

const ServiceCard=({index, title, icon})=>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        options={{          
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
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
}

const About = (props) => {  
   
  const subText = props.language ? 'Know' : 'Conoce'; 
  const headText = props.language ? 'About me' : 'Acerca de mi'; 
  const mainText = props.language ? `I am a passionate and dedicated front-end web developer. I have a strong background in HTML, CSS, and Javascript.  My knowledge extends to popular frontend frameworks like React, React-Native, and for styling I enjoy using Tailwind CSS or SASS. This enables me to craft dynamic and visually appealing user interfaces while ensuring smooth user experiences.` :
                   `Soy una desarrolladora web front-end apasionada y dedicada. Tengo una sólida formación en HTML, CSS y Javascript. Mi conocimiento se extiende a marcos de trabajo populares como React, React-Native y Tailwind CSS lo que me permite crear interfaces de usuario dinámicas y visualmente atractivas. `

  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}> { subText } </p>
      <h2 className={styles.sectionHeadText}>{ headText }</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>        
      {mainText} 
    </motion.p>
      
     
    </>
  )
}

export default SectionWrapper(About, 'about'); 