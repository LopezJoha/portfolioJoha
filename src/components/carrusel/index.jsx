import { useSwipeable } from 'react-swipeable'
import React, { useState } from 'react'
import './styles.css'

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
        <div
            {...handlers}
            style={{ touchAction: 'pan-x' }}
            className='relative '
        >
            <div className="wrapper">
                <div
                    className={`carousel-container ${direction} ${sliding && 'sliding'} `}
                >
                    {React.Children.map(children, (child, index) => (
                        <div
                            className="carousel-slot "
                            style={{
                                order: getOrder(index, focusedIndex, numItems),
                            }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="flex flex-1 absolute top-1/2 left-0 w-full items-center justify-between z-20">
                <button onClick={() => slide('prev')} >
                    prev
                   
                </button>
                <button onClick={() => slide('next')}>
                   
                    next
                  
                </button>
            </div>
        </div>
    )
}
