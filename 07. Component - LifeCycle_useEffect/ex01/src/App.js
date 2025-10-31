import React, {useState} from 'react';
import LifeCycle from './LifeCycle';

export default function App() {
    const [color, setColor] = useState('#000');
    return (
        <>
            <h2>Class Component: Component Lifecycle</h2>
            <button
                onClick={() => setColor(`#${Math.floor((Math.random() * 0x00ffffff)).toString(16)}`)}>
                색상변경
            </button>
            <br/>
            <LifeCycle color={color}/>
        </>
    );
}