import { styles } from '../styles'
import { SectionWrapper } from '../highOrderComponent'
import { profile } from '../assets/index'

const Hero = ({ language }) => {
  return (
    <div className=" mt-24 flex flex-col sm:flex-row">
      <div
        className={` w-full sm:w-[50%] h-[50%] sm:h-full flex flex-row  gap-10 justify-evenly`}
      >
        <div className=" hidden xs:flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#8b3c7f]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col self-center">
          <h1 className={`${styles.heroHeadText}`}>
            {language ? `Hello! I'm ` : `Hola! Soy `}
            <span className="text-[#8b3c7f]">Joha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {language ? 'Front-End Developer' : 'Desarrolladora de software'}
            <br className="sm:block hidden" />
            {language ? 'Web & Apps' : 'Front End'}
          </p>
        </div>
      </div>

      <div className=" w-full sm:w-[50%] h-[50%] sm:h-full flex justify-center content-center">
        <img
          src={profile}
          alt="profilePhoto"
          className="flex w-[80%] h-[80%] max-w-xs max-h-xs "
        />
      </div>
    </div>
  )
}

export default SectionWrapper(Hero, 'hero')
