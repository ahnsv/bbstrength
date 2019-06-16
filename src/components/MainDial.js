import React, {useState, useEffect, useRef} from 'react'
import "./styles/MainDial.scss"

const MainDial = ({title}) => {
    const [value, setValue] = useState(0);
    const [preValue, setPrevValue] = useState([]);
    const curr = useRef(null);
    const enter = () => {
        curr.current.className = "enter";
    };
    useEffect(() => {
        // TODO: add classname using use ref
        window.requestAnimationFrame(enter);
        return () => {
            setPrevValue(prev => {
                if (!prev.length) {
                    if (value === 0) {
                        return prev;
                    } else {
                        return [...prev, value];
                    }
                }
                return [...prev, value];
            });
        }
    }, [value]);
    return (
        <div className={`main-dial`}>
            <div className="main-dial--value">
                <div className="main-dial--value__title">{title}</div>
                <div className="main-dial--value__value">
                    <div className="main-dial--value__value--prev">{preValue}</div>
                    <div className="main-dial--value__value--curr" ref={curr}>{value}</div>
                </div>
                <div className="main-dial--value__clear">
                    {"<-"}
                </div>
            </div>
            <div className="main-dial--numbers">
                {"1234567890".split("").map((digit, index) => (
                    <div className={`main-dial--number__digit`}
                         key={index}
                         onClick={() => setValue(digit)}
                    >
                        {digit}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MainDial;