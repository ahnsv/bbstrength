import React, {useRef, useState, useEffect} from 'react'
import './styles/CardCarousel.scss';

const CardCarousel = ({children}) => {
    const [curr, setCurr] = useState(0);
    const indicator = children.map((child, index) => (
        <div className={`indicator--dot ${index === curr ? 'active' : ''}`} key={index}/>))
    const parent = useRef(null)
    const viewportCheck = (rect) => {
            return rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    }
    const handleScroll = () => {
        const children = parent.current.children;
        Array.from(children).forEach((child, index) => {
            if (viewportCheck(child.getBoundingClientRect())) {
                setCurr(index);
            }
        })
    }
    return (
        <div className={`card-carousel`}>
            <div className="card-carousel--indicator">
                {indicator}
            </div>
            <div className="card-carousel--content" ref={parent} onScroll={handleScroll}>
                {
                    React.Children.map(children, (child, index) => {
                           if (curr === index) {
                               return React.cloneElement(child, {isActive: true})
                           }
                           return React.cloneElement(child);
                        }
                    )
                }
            </div>
        </div>
    )
}

export default CardCarousel;