import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../highOrderComponent'

import { projects, proyectos } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

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
    <motion.div className="w-[100%] max-w-[420px] my-2 flex justify-center content-center ">
      <div className=" p-2 flex flex-col  rounded-2xl xs:shadow-[0_10px_20px_rgba(139,_60,_127,_0.3)] border-[1px] border-solid  border-fuchsia-900 xs:border-none">
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

const ProjectList = (props) => {
  return (
    <div className="flex flex-wrap w-[100%] justify-center items-center gap-4">
      {(props.language ? projects : proyectos).map((project, index) => (
        <ProjectCard key={index} index={index} {...project} />
      ))}
    </div>
  )
}

export default SectionWrapper(ProjectList, 'proyectos')
