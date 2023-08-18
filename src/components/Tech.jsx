import React from 'react'
import { motion } from 'framer-motion'

import { BallCanvas } from './canvas'
import { SectionWrapper } from '../highOrderComponent'
import { technologies } from '../constants'

const Tech = () => {
    return (
        <>
            <div className="flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology) => (
                    <div className="w-24 h-24" key={technology.name}>
                        <img
                            src={technology.icon}
                            alt="project_image"
                            className="w-full h-full object-fill rounded-2xl"
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Tech, 'tech')
