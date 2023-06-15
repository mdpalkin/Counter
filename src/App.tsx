import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Setter from "./components/Setter/Setter";

function App() {
    return (
        <div className={"wrapper"}>
            <Counter/>
            <Setter />
        </div>
    );
}

export default App;
