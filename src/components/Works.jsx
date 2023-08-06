import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../highOrderComponent";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = (props) => {

  const experience = props.language ?  `As a front-end web developer, I have developed responsive and interactive websites, including landing pages, web services, and portfolio. My proficiency in programming languages as described above allows me to create visually appealing front-end interfaces that engage users and deliver an optimal user experience.
  Additionally, to this, I have developed a keen eye for detail, and I’m committed to delivering high-quality work. I have worked in teams and have experience handling multiple priorities while effectively organizing and prioritizing tasks. I am also a good communicator and have an ability to work collaboratively to deliver successful projects.
  ` :  ` Como desarrolladora web front-end, he desarrollado sitios web interactivos, incluidas landing pages, web services, y portfolio. Mi competencia con los lenguajes de programación descritos anteriormente me permite crear interfaces  visualmente atractivas que brindan una experiencia de usuario óptima.
  Adicionalmente, he desarrollado una aguda capacidad para percibir los detalles con precisión y estoy comprometida a entregar un trabajo de alta calidad. Cuento con la experiencia en el manejo de múltiples prioridades mientras organizo y priorizo tareas de manera efectiva. También una excelente habilidad de comunicación, así como trabajar en colaboración con mis compañeros para entregar proyectos exitosos.
  `; 

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}> {props.language ? 'Projects' : 'Proyectos'}</p>
        <h2 className={`${styles.sectionHeadText}`}>{ props.language ?'Get an overview of my latest projects' : 'Revisa algunos de mis proyectos' }.</h2>
      </motion.div>

      <div className='flex-auto justify-end '>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] ml-96 leading-[30px] text-right '
        >{experience}          
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");