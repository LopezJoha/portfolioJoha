import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../highOrderComponent'

import { projects, proyectos } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const Works = (props) => {
  const experience = props.language
    ? `As a front-end web developer, I have developed responsive and interactive websites, including landing pages, web services, and portfolio. My proficiency in programming languages as described above allows me to create visually appealing front-end interfaces that engage users and deliver an optimal user experience. Additionally, to this, I have developed a keen eye for detail, and I'm committed to delivering high-quality work. I have worked in teams and have experience handling multiple priorities while effectively organizing and prioritizing tasks. I am also a good communicator and have an ability to work collaboratively to deliver successful projects`
    : `Como desarrolladora web front-end, he desarrollado sitios web interactivos, incluidas landing pages, web services, y portfolio. Mi competencia con los lenguajes de programación descritos anteriormente me permite crear interfaces  visualmente atractivas que brindan una experiencia de usuario óptima.Adicionalmente, he desarrollado una aguda capacidad para percibir los detalles con precisión y estoy comprometida a entregar un trabajo de alta calidad. Cuento con la experiencia en el manejo de múltiples prioridades mientras organizo y priorizo tareas de manera efectiva. También una excelente habilidad de comunicación, así como trabajar en colaboración con mis compañeros para entregar proyectos exitosos.`

  return (
    <div>
      <div className="flex justify-center sm:justify-end">
        <motion.div variants={textVariant()} className="">
          <p className={`${styles.sectionSubText} text-right justify-self-end`}>
            {props.language ? 'Projects' : 'Proyectos'}
          </p>
          <h2
            className={`${styles.sectionHeadText} text-center sm:text-right sm:justify-self-end`}
          >
            {props.language
              ? 'Get an overview of my latest projects'
              : 'Revisa algunos de mis últimos proyectos'}
          </h2>
        </motion.div>
      </div>

      <div className="flex justify-end content-end">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className=" flex mt-3 text-white text-[17px] eading-[30px] text-center sm:text-right self-end w-full sm:w-9/12 "
        >
          {experience}
        </motion.p>
      </div>
    </div>
  )
}

export default SectionWrapper(Works, 'projects')
