import React, {useState, useEffect, useRef} from 'react'
import "./styles/MainDial.scss"
import {ReactComponent as BackspaceArrow} from './assets/backspace-arrow.svg'

const MainDial = ({title}) => {
    const [value, setValue] = useState("");
    const [prevValue, setPrevValue] = useState("");
    const [currValue, setCurrValue] = useState("");
    const curr = useRef(null);
    const popLast = (str) => {
        return [str.substr(0, str.length - 1), str.substr(str.length - 1)];
    };
    useEffect(() => {
            if (value.length) {
                if (value.length > 1) {
                    const last = value.slice(-1);
                    setCurrValue(last);
                    setPrevValue(value.substr(0, value.length - 1));
                } else {
                    setCurrValue(value);
                }
            } else {
                setCurrValue("");
                setPrevValue("");
            }
        }, [value]
    )
    ;
    const handleNull = (v, defaultValue) => {
        return v.length ? parseInt(v) : defaultValue
    };
    const handleClear = () => {
        let _, prevToCurr = "";
        setPrevValue(prev => {
            [_, prevToCurr] = popLast(prev);
            setCurrValue(prevToCurr);
            setValue(_ + currValue);
            return _;
        })
    };
    useEffect(() => {
        curr.current.classList.toggle("enter");
        setTimeout(() => {
            curr.current.classList.toggle("enter");
        }, 500)
    }, [currValue]);
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    useEffect(() => {
        setValue("")
    }, [sets, reps]);
    return (
        <div className={`main-dial`}>
            <div className="main-dial--value">
                <div className="main-dial--value__title">{title}</div>
                <div className="main-dial--value__wrapper">
                    <div className="main-dial--value__value">
                        <div className="main-dial--value__value--prev">{handleNull(prevValue, "")}</div>
                        <div className="main-dial--value__value--curr" ref={curr} data-testid={`currentValue`}>{handleNull(currValue, 0)}</div>
                    </div>
                    <div className="main-dial--value__clear" onClick={handleClear}>
                        <BackspaceArrow width={`50px`} height={`100%`}/>
                    </div>
                </div>
                <div className="setsReps">
                    {
                        sets && <div className="sets">{sets}세트</div>

                    }
                    {
                        reps && <div className="reps">{reps}회</div>
                    }
                </div>
            </div>
            <div className="main-dial--numbers">
                {"1234567890".split("").map((digit, index) => (
                    <div className={`main-dial--number__digit`}
                         key={index}
                         onClick={() => setValue(val => val + digit)}
                         data-testid={`inputDial` + index}
                    >
                        {digit}
                    </div>
                ))}
                <div onClick={() => setSets(value)}>세트
                </div>
                <div onClick={() => setReps(value)}> 횟수
                </div>
            </div>
        </div>
    )
}
export default MainDial;