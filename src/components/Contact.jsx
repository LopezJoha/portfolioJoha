import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { SectionWrapper } from '../highOrderComponent'
import { slideIn } from '../utils/motion'

const Contact = (props) => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_etc23ow',
        'template_fiis5cc',
        {
          from_name: form.name,
          to_name: 'Lopez Joha',
          from_email: form.email,
          to_email: 'jeidylopez@outlook.es',
          message: form.message,
        },
        'pyUDcCoSo-hDJrs11'
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you. I will get back to you as soon as possible.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert('Ahh, something went wrong. Please try again.')
        }
      )
  }

  return (
    <div>
      <motion.div className="flex flex-col xs:p-8 rounded-2xl">
        <p className={styles.sectionSubText}>
          {props.language ? 'Get in touch' : 'Contáctame'}
        </p>

        <div className="mt-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3 lg:pt-12">
              <h2 className="text-3xl font-bold mb-4">
                {props.language ? `Let's Connect` : '¡Conectemos!'}
              </h2>
              <motion.p className="flex mt-4 text-white text-[17px] leading-[30px] text-justify sm:text-left self-start w-full sm:w-9/12 ">
                {props.language
                  ? "I'm always excited to connect with recruiters and professionals in the tech industry. Whether you have a job opportunity, want to discuss a project, or just want to network, I'd love to hear from you!"
                  : 'Siempre me emociona conectar con profesionales en la industria tech. Ya sea que tengas una oportunidad laboral, quieras discutir un proyecto o simplemente hacer networking, ¡me encantaría saber de ti!'}
              </motion.p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="lg:w-2/3 bg-bgCard bg-cover bg-no-repeat flex flex-col gap-5 p-8 lg:p-10 rounded-lg shadow-[0_10px_20px_rgba(139,_60,_127,_0.3)]"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  {props.language ? 'Your Name' : 'Tu nombre'}
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={
                    props.language
                      ? 'What is your name?'
                      : '¿Cuál es tu Nombre?'
                  }
                  className="bg-tertiary py-2 px-4 w-full placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium transition-all duration-300 hover:bg-opacity-90 focus:ring-2 focus:ring-primary"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  {props.language ? 'Your Email' : 'Tu Correo'}
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={
                    props.language
                      ? 'What is your email?'
                      : '¿Cuál es tu correo electrónico?'
                  }
                  className="bg-tertiary py-2 px-4 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium transition-all duration-300 hover:bg-opacity-90 focus:ring-2 focus:ring-primary"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  {props.language ? 'Your Message' : 'Tu Mensaje'}
                </span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={
                    props.language
                      ? 'Let me know what you want to say here!'
                      : '¡Déjame tu mensajito por aquí!'
                  }
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium transition-all duration-300 hover:bg-opacity-90 focus:ring-2 focus:ring-primary"
                />
              </label>

              <button
                type="submit"
                className="bg-tertiary py-3 px-6 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary hover:bg-opacity-90 transition-all duration-300"
              >
                {loading ? 'Sending...' : props.language ? 'Send' : 'Enviar'}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
