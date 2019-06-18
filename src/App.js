import React from 'react';
import './App.css';
import MainDial from "./components/MainDial";

// TODO: add theme context
function App() {
    return (
        <div className="App">
            <MainDial title={`오늘 트레이닝 세트와 횟수를 입력해주세요`}/>
        </div>
    );
}

export default App;
