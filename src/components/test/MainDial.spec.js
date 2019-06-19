import React from 'react';
import ReactDOM from 'react-dom';
import MainDial from '../MainDial';
import {render, getByTestId, fireEvent} from '@testing-library/react'


describe('MainDial', () => {
    describe('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MainDial/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    describe('interacts properly', () => {
        it('when Dial is clicked, prev and curr update works', () => {
            const { container } = render(<MainDial title={`test`}/>);
            const currentValue = getByTestId(container, 'currentValue');
            const inputDial0 = getByTestId(container, 'inputDial0');
            fireEvent.click(inputDial0);
            expect(currentValue.textContent).toEqual("1");
        })
    })
})
