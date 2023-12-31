import { useSwipeable } from 'react-swipeable'
import React, { useState } from 'react'

import { left, right } from '../../assets/index'

const getOrder = (index, focusedIndex, numItems) => {
  return index - focusedIndex < 0
    ? numItems - Math.abs(index - focusedIndex)
    : index - focusedIndex
}

export const Carousel = ({ children }) => {
  const [focusedIndex, setFocusedIndex] = useState(0)
  const numItems = React.Children.count(children)
  const [sliding, setSliding] = useState(false)
  const [direction, setDirection] = useState('')

  const slideNext = () => {
    setSliding(true)
    setDirection('next')
    setFocusedIndex(focusedIndex === numItems - 1 ? 0 : focusedIndex + 1)
    setTimeout(stopSliding, 50)
  }

  const slidePrev = () => {
    setSliding(true)
    setDirection('prev')
    setFocusedIndex(focusedIndex === 0 ? numItems - 1 : focusedIndex - 1)

    setTimeout(stopSliding, 50)
  }

  const stopSliding = () => setSliding(false)

  const slide = (direction) => {
    if (direction === 'next') {
      slideNext()
    } else {
      slidePrev()
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => slide('next'),
    onSwipedRight: () => slide('prev'),
    swipeDuration: 500,
    preventScrollOnSwipe: false,
    trackMouse: true,
    touchEventOptions: { passive: true },
  })

  return (
    <div {...handlers} style={{ touchAction: 'pan-x' }} className="relative cursor-pointer ">
      <div className="overflow-x-scroll overflow-hidden ">
        <div className={`flex  transition-transform duration-300 ease-in-out transform translate-x-0`}
        >
          {React.Children.map(children, (child, index) => (
            <div
              className="flex transition-transform duration-400 ease-in"
              style={{
                order: getOrder(index, focusedIndex, numItems),
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 absolute top-1/2 left-0 w-full ">
        <button
          onClick={() => slide('prev')}
          className="relative w-full h-full transition duration-500 ease-in-out"
        >
          <img
            src={left}
            alt="prev"  
            className="absolute w-6 h-4 sm:w-12 xs:h-8 z-20 left-0 sm:left-[-30px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
          />
        </button>

        <button
          onClick={() => slide('next')}
          className="relative w-full h-full transition duration-500 ease-in-out"
        >
          <img
            src={right}
            alt="next"
            className="absolute w-6 h-4 sm:w-12 xs:h-8 z-20 right-0 sm:right-[-30px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
          />
        </button>
      </div>
    </div>
  )
}
