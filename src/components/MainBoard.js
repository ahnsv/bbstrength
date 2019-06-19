import React from 'react'
import CardCarousel from "./CardCarousel";
import CardPreview from "./CardPreview";
import './styles/MainBoard.scss'

const MainBoard = () => {
    return (
        <div className={`main-board`}>
            <CardCarousel>
                <CardPreview/>
                <CardPreview/>
                <CardPreview/>
            </CardCarousel>
        </div>
    )
}

export default MainBoard