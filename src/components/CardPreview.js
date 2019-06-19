import React, {useState, useRef} from 'react'
import './styles/CardPreview.scss'

const CardPreview = ({isActive}) => {
    return (
        <div className={`card-preview ${isActive ? 'active' : ''}`}>
            <div className="card-preview--thumbnail"/>
            <div className="card-preview--details">
                <div className="card-preview--details__title">5X5</div>
                <div className="card-preview--details__category">Strength</div>
                <div className="card-preview--details__description">
                    대표적인 스트렝스 루틴
                </div>
            </div>
        </div>
    )
}

export default CardPreview;