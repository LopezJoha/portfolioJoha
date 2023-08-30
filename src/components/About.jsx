import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles.js'
import { fadeIn, textVariant } from '../utils/motion.js'
import { SectionWrapper } from '../highOrderComponent'

const About = (props) => {
  const subText = props.language ? 'Know' : 'Conoce'
  const headText = props.language ? 'About me' : 'Sobre mi'
  const mainText = props.language
    ? `I am a passionate and dedicated front-end web developer. I have a strong background in HTML, CSS, and Javascript.  My knowledge extends to popular frontend frameworks like React, React-Native, and for styling I enjoy using Tailwind CSS or SASS. This enables me to craft dynamic and visually appealing user interfaces while ensuring smooth user experiences.`
    : `Soy una desarrolladora web front-end apasionada y dedicada. Tengo una sólida formación en HTML, CSS y Javascript. Mi conocimiento se extiende a marcos de trabajo populares como React, React-Native y Tailwind CSS lo que me permite crear interfaces de usuario dinámicas y visualmente atractivas. `

  return (
    <div>
      <div className="">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-left`}> {subText} </p>
          <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>
            {headText}
          </h2>
        </motion.div>
      </div>
      <div className="flex justify-start content-start">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="flex mt-4 text-white text-[17px] leading-[30px] text-center sm:text-left self-start w-full sm:w-9/12 "
        >
          {mainText}
        </motion.p>
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about')
