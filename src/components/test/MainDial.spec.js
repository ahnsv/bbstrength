import React from 'react';
import ReactDOM from 'react-dom';
import MainDial from '../MainDial';
import {render, getByTestId, fireEvent} from '@testing-library/react'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainDial/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('MainDial Test', () => {
    describe('MainDial Value Interaction Test', () => {
        it('When Dial is clicked, prev and curr should update', () => {
            const { container } = render(<MainDial title={`test`}/>);
            const currentValue = getByTestId(container, 'currentValue');
            const inputDial0 = getByTestId(container, 'inputDial0');
            fireEvent.click(inputDial0);
            expect(currentValue.textContent).toEqual("1");
        })
    })
})
