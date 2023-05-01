import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Setter from "./components/Setter/Setter";

function App() {

    const [maxCount, setMaxCount] = useState<number>(5)

    const [counter, setCounter] = useState<number>(0)

    const increment = () => {
        counter < maxCount && setCounter(counter + 1)
    }

    const reset = () => {
        setCounter(0)
    }

    const isIncDisabled = counter === maxCount
    const isResetDisabled = counter === 0

    const incButtonTitle = "INC"
    const resetButtonTitle = "RESET"
    const setButtonTitle = "SET"


    return (
        <div>
            <Counter
                isResetDisabled={isResetDisabled}
                IsIncDisabled={isIncDisabled}
                reset={reset}
                count={counter}
                setCount={setCounter}
                increment={increment}
                maxCount={maxCount}
                incButtonTitle={incButtonTitle}
                resetButtonTitle={resetButtonTitle}

            />
            <Setter
                setMaxCount={setMaxCount}
                setCounter={setCounter}
                setButtonTitle={setButtonTitle}
            />
        </div>
    );
}

export default App;
