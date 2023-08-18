import { styles } from '../styles'

const Hero = ({ language }) => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl  ${styles.paddingX} flex flex-row  gap-10 justify-evenly`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#8b3c7f]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className='flex flex-col self-center'>
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

        <div className="bg-profile  h-[400px] w-[350px] bg-cover bg-no-repeat bg-center rounded-lg">

        </div>
      </div>
    </section>
  )
}

export default Hero
