import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../highOrderComponent';

import { projects, proyectos } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { Carousel } from '../components/carrusel/index';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div className=" mt-20 w-full flex flex-col justify-center items-center p-5 rounded-2xl shadow-[0_10px_20px_rgba(139,_60,_127,_0.3)]  ">
        <div className="relative  w-[300px] sm:w-[450px] h-60 ">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-fill rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-60 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 h-40">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 h-10 h-10">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Works = (props) => {
  const experience = props.language
    ? `As a front-end web developer, I have developed responsive and interactive websites, including landing pages, web services, and portfolio. My proficiency in programming languages as described above allows me to create visually appealing front-end interfaces that engage users and deliver an optimal user experience. Additionally, to this, I have developed a keen eye for detail, and I'm committed to delivering high-quality work. I have worked in teams and have experience handling multiple priorities while effectively organizing and prioritizing tasks. I am also a good communicator and have an ability to work collaboratively to deliver successful projects`
    : `Como desarrolladora web front-end, he desarrollado sitios web interactivos, incluidas landing pages, web services, y portfolio. Mi competencia con los lenguajes de programación descritos anteriormente me permite crear interfaces  visualmente atractivas que brindan una experiencia de usuario óptima.Adicionalmente, he desarrollado una aguda capacidad para percibir los detalles con precisión y estoy comprometida a entregar un trabajo de alta calidad. Cuento con la experiencia en el manejo de múltiples prioridades mientras organizo y priorizo tareas de manera efectiva. También una excelente habilidad de comunicación, así como trabajar en colaboración con mis compañeros para entregar proyectos exitosos.`

  const projectsList = props.language ? projects : proyectos

  return (
    <>
      <div className="relative">
        <div>
          <div className="flex justify-end">
            <motion.div variants={textVariant()}>
              <p className={`${styles.sectionSubText}   text-right`}>
                {' '}
                {props.language ? 'Projects' : 'Proyectos'}
              </p>
              <h2 className={`${styles.sectionHeadText}  text-right`}>
                {props.language ? 'Get an overview of my latest projects' : 'Revisa algunos de mis últimos proyectos'}
                .
              </h2>
            </motion.div>
          </div>

          <div className="flex justify-end content-end">
            <motion.p
              variants={fadeIn('', '', 0.1, 1)}
              className=" flex mt-3 text-secondary text-[17px] eading-[30px] text-right self-end w-9/12 "
            >
              {experience}
            </motion.p>
          </div>
        </div>

        <Carousel>
          {projectsList.map((project, index) => (
            <div className="flex" key={index}>
              <ProjectCard index={index} {...project} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'works')

{
  /* <button
          className="absolute left-0 top-1/2 bg-gray-200 p-2 rounded-full"
          style={{
            left: "1rem",
          }}
        >
          
        </button>
        <button
          className="absolute right-0 top-1/2 bg-gray-200 p-2 rounded-full"
          style={{
            right: "1rem",
          }}
        >
          
        </button> */
}
