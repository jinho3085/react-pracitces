import React from 'react';

function App() {
    return (
        <>
            <h1>Ex02</h1>
            <p>특징 II: Sigle Root</p>
        </>
    );
}

/*
transplile 후의 컴포넌트

function App() {
    const greetings = 'hello, world';
    
    return (
        React.createElement('div', null, React.createElement('h1', null, 'Ex02'), React.createElement('p', null, '특징 II: Sigle Root'))
    );
}
*/

/*

function App() {
    const greetings = 'hello, world';
    return (
            <h1>Ex02</h1>
            <p>특징 II: Sigle Root</p>
    );
}

-> transpile 후의 컴포넌트

function App() {
    return (
        React.createElement('h1', null, 'Ex02')
        React.createElement('p', null, '특징 II: Sigle Root')            
    );
}

*/

export default App;