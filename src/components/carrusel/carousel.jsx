import { useSwipeable } from 'react-swipeable'
import React, { useState } from 'react'
import './styles.scss'

const getOrder = (index, focusedIndex, numItems) => {
  return index - focusedIndex < 0
    ? numItems - Math.abs(index - focusedIndex)
    : index - focusedIndex
}

export default function Carousel({ children, focusedIndex, setFocusedIndex }) {
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
    preventScrollOnSwipe: true,
    trackMouse: true,
    touchEventOptions: { passive: true },
  })

  return (
    <div className="flex flex-1 w-full">
      <div
        {...handlers}
        style={{ touchAction: 'pan-y' }}
        className="flex-1 w-full flex flex-col justify-center"
      >
        <div className="wrapper">
          <div
            className={`carousel-container ${direction ? direction : ""} ${
              sliding && 'sliding'
            }`}
          >
            {React.Children.map(children, (child, index) => (
              <div
                className={`h-full flex carousel-slot flex-row  md:flex-col`}
                style={{
                  order: getOrder(index, focusedIndex, numItems),
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => slide('prev')}
        className="mx-2 absolute top-[67%] left-1 -translate-y-1/2"
      >
        <svg
          width="35px"
          height="35px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            stroke="white"
            fill="white"
            d="M10.5303 5.46967C10.8232 5.76256 10.8232 6.23744 10.5303 6.53033L5.81066 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H5.81066L10.5303 17.4697C10.8232 17.7626 10.8232 18.2374 10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967Z"
          />
        </svg>
      </button>
      <button
        onClick={() => slide('next')}
        className="rotate-[180deg] mx-2 absolute top-[67%] right-1 -translate-y-1/2"
      >
        <svg
          width="35px"
          height="35px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            stroke="white"
            fill="white"
            d="M10.5303 5.46967C10.8232 5.76256 10.8232 6.23744 10.5303 6.53033L5.81066 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H5.81066L10.5303 17.4697C10.8232 17.7626 10.8232 18.2374 10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967Z"
          />
        </svg>
      </button>
    </div>
  )
}
