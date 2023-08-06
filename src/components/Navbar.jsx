import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { styles } from '../styles';
import { navLinks, navegacion } from '../constants';
import {menu, close } from '../assets'; 
import logo2 from '../assets/logov2.1.png'; 

const Navbar = ({language}) => {

  const [active, setActive] = useState(""); 
  const [toggle, setToggle] = useState(false); 

  const navegationList = language ? navLinks : navegacion; 

  return (
    <nav className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto '>
        <Link to="/" 
              className='flex items-center gap-2'
              onClick={()=>{
                setActive(""); 
                window.scrollTo(0, 0);
              }}>
              <img src={logo2} alt='logo' className='w-14 h-14 object-cover'/>            
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
        {navegationList.map((item) =>(
          <li key={item.id}
              className={`${active === item.title ? 'text-fuchsia-700': 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={()=>setActive(item.title)}>
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close:  menu } alt='menu' className='w-[25px] h-[25px] object-contain cursor-pointer'
               onClick={()=> setToggle(!toggle)}
          />
          <div className={`${!toggle? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] z-10 rounded-xl`}>
           <ul className='list-none flex justify-end items-start flex-col gap-4 '>
              {navegationList.map((item) =>(
                console.log(item),
                <li key={item.id}
                    className={`${active === item.title ? 'text-white': 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px] `}
                    onClick={()=>{
                      setToggle(!toggle);
                      setActive(item.title);
                  }}>
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

export default Navbar


