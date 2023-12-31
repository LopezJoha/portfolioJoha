import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../highOrderComponent'

import { projects, proyectos } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

// import { Carousel } from '../components/carrusel/index'
import Carousel from '../components/carrusel/carousel'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  GitHubCode,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="w-[400px] md:w-[500px] my-20 flex justify-center content-center "
    >
      <div className=" p-2 w-[80%] flex flex-col  rounded-2xl xs:shadow-[0_10px_20px_rgba(139,_60,_127,_0.3)] border-[1px] border-solid  border-fuchsia-900 xs:border-none">
        <div className="cursor-pointer flex justify-center content-center">
          <img
            src={image}
            alt="project_image"
            className="w-[90%] h-32  xs:w-full sm:h-52 rounded-2xl"
            onClick={() => window.open(source_code_link, '_blank')}
          />
        </div>

        <div className="mt-5 w-full md:h-48 flex flex-col flex-1 md:flex-none">
          <h3 className=" text-white font-bold text-lg xs:text-2xl text-center">
            {name}
          </h3>
          <p className=" mt-2 text-white text-xs xs:text-sm text-center flex flex-1">
            {description}
          </p>
          {GitHubCode && (
            <div className="inset-0 mt-3 mx-3 w-full flex justify-center">
              <div
                onClick={() => window.open(GitHubCode, '_blank')}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-60 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-center content-center">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-xs xs:text-sm ${tag.color}`}
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
  const [focusedIndex, setFocusedIndex] = useState(0)

  const experience = props.language
    ? `As a front-end web developer, I have developed responsive and interactive websites, including landing pages, web services, and portfolio. My proficiency in programming languages as described above allows me to create visually appealing front-end interfaces that engage users and deliver an optimal user experience. Additionally, to this, I have developed a keen eye for detail, and I'm committed to delivering high-quality work. I have worked in teams and have experience handling multiple priorities while effectively organizing and prioritizing tasks. I am also a good communicator and have an ability to work collaboratively to deliver successful projects`
    : `Como desarrolladora web front-end, he desarrollado sitios web interactivos, incluidas landing pages, web services, y portfolio. Mi competencia con los lenguajes de programación descritos anteriormente me permite crear interfaces  visualmente atractivas que brindan una experiencia de usuario óptima.Adicionalmente, he desarrollado una aguda capacidad para percibir los detalles con precisión y estoy comprometida a entregar un trabajo de alta calidad. Cuento con la experiencia en el manejo de múltiples prioridades mientras organizo y priorizo tareas de manera efectiva. También una excelente habilidad de comunicación, así como trabajar en colaboración con mis compañeros para entregar proyectos exitosos.`

  return (
    <div>
      <div>
        <div className="flex justify-center sm:justify-end">
          <motion.div variants={textVariant()} className="">
            <p
              className={`${styles.sectionSubText} text-right justify-self-end`}
            >
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

      <Carousel focusedIndex={focusedIndex} setFocusedIndex={setFocusedIndex}>
        {(props.language ? projects : proyectos).map((project, index) => (
          <div className="flex" key={index}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default SectionWrapper(Works, 'projects')
