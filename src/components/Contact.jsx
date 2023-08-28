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
    <div className={`xl:mt-12 flex flex-col`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex flex-col xs:p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          {props.language ? 'Get in touch' : 'Contáctame'}
        </p>
        <h3 className={styles.sectionHeadText}>
          {' '}
          {props.language ? 'Contact.' : 'Contacto.'}
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-bgCard bg-cover bg-no-repeat mt-12 flex flex-col gap-5 p-10 rounded-lg shadow-[0_10px_20px_rgba(139,_60,_127,_0.3)]"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-2 px-4 w-full placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-6 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary "
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')

