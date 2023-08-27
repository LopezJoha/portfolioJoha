import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks, navegacion } from '../constants'
import { menu, close } from '../assets'
import logo2 from '../assets/logov2.1.png'
import Switch from './Switch'

const Navbar = (props) => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  const navegationList = props.language ? navLinks : navegacion

  return (
    <nav
      className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo2} alt="logo" className="w-14 h-14 object-cover" />
        </Link>

        <Switch funcion={props.function} idioma={props.language} />

        <ul className="min-w-[50%] list-none hidden sm:flex flex-row gap-10">
          {navegationList.map((item) => (
            <li
              key={item.id}
              className={`${
                active === item.title ? 'text-fuchsia-700' : 'text-secondary'
              } hover:text-white flex-1 py-2 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(item.title)}>
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[25px] h-[25px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } bg-primary bg-opacity-[75%] absolute top-20 right-0  w-full z-10`}
          >
            <ul className="w-full list-none flex flex-col gap-4 ">
              {navegationList.map((item) => (
                <li
                  key={item.id}
                  className={`${
                    active === item.title ? 'text-secondary' : 'text-white'
                  } w-full flex justify-center font-poppins font-medium cursor-pointer text-[16px] border-[1px] border-solid  border-slate-500 rounded-lg `}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(item.title)
                  }}
                >
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar; 
