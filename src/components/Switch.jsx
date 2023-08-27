import React from 'react'

export default function Switch(props) {
  return (
    <div onClick={props.funcion} className="cursor-pointer">
      <div
        className={`${
          props.idioma ? 'flex-row' : 'flex-row-reverse'
        } cursor-pointer flex py-2 px-4 items-center rounded-full transition-all duration-300 border-[1px] border-solid  border-fuchsia-900`}
      >
        <p className="self-center px-[4px]">{props.idioma ? 'Es' : 'En'}</p>
        <span
          className={`${
            props.idioma ? 'bg-Col' : 'bg-Eng'
          } w-5 h-5 bg-auto bg-center bg-no-repeat rounded-full  transition-all duration-300 shadow-2xl`}
        />
      </div>
    </div>
  )
}
