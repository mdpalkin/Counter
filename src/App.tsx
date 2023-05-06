import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Setter from "./components/Setter/Setter";

function App() {
    // State
    const [minCount, setMinCount] = useState(0)
    const [maxCount, setMaxCount] = useState(5)
    const [counter, setCounter] = useState(0)
    const [alarm, setAlarm] = useState("")
    const [temporaryMin, setTemporaryMin] = useState(minCount)
    const [temporaryMax, setTemporaryMax] = useState(maxCount)
    const [isBtnDisable, setIsBtnDisable] = useState(true)


    //Local storage
    useEffect(() => {
        let minValue = localStorage.getItem("MinCounterValue")
        let maxValue = localStorage.getItem("MaxCounterValue")
        if (minValue && maxValue) {
            setMinCount(+JSON.parse(minValue))
            setMaxCount(+JSON.parse(maxValue))
            setTemporaryMin(+JSON.parse(minValue))
            setTemporaryMax(+JSON.parse(maxValue))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("MinCounterValue", JSON.stringify(minCount))
        localStorage.setItem("MaxCounterValue", JSON.stringify(maxCount))
    }, [minCount, maxCount])

    // Buttons Functions
    const increment = () => {
        counter < maxCount && setCounter(counter + 1)
    }
    const reset = () => {
        setCounter(minCount)
    }
    const set = () => {
        setMaxCount(temporaryMax)
        setMinCount(temporaryMin)
        setIsBtnDisable(true)
        setAlarm("")
    }

    // Counter Value Control
    if (counter < minCount || counter > maxCount) {
        setCounter(minCount)
    }

    // Is buttons able?
    const isIncDisabled = counter === maxCount || !isBtnDisable
    const isResetDisabled = counter === minCount || !isBtnDisable
    let isSetDisabled = isBtnDisable

    //Titles
    const incButtonTitle = "inc"
    const resetButtonTitle = "reset"
    const setButtonTitle = "set"

    //Text Alarm
    let textAlarm = alarm

    //Errors
    const temporaryMinError = temporaryMin < 0 || temporaryMin >= temporaryMax
    const temporaryMaxError = temporaryMax <= temporaryMin
    if (temporaryMaxError || temporaryMinError) {
        isSetDisabled = true
        textAlarm = "Incorrect value!"
    }
    const displayError = (counter === maxCount && !textAlarm)|| textAlarm === "Incorrect value!"

    return (
        <div className={"wrapper"}>
            <Counter
                isResetDisabled={isResetDisabled}
                IsIncDisabled={isIncDisabled}
                reset={reset}
                count={counter}
                setCount={setCounter}
                increment={increment}
                incButtonTitle={incButtonTitle}
                resetButtonTitle={resetButtonTitle}
                alarm={textAlarm}
                displayError={displayError}

            />
            <Setter
                setMaxCount={setMaxCount}
                setMinCount={setMinCount}
                setButtonTitle={setButtonTitle}
                maxCount={maxCount}
                minCount={minCount}
                temporaryMin={temporaryMin}
                temporaryMax={temporaryMax}
                isBtnAble={isSetDisabled}
                setTemporaryMin={setTemporaryMin}
                setTemporaryMax={setTemporaryMax}
                setIsBtnDisable={setIsBtnDisable}
                setHandler={set}
                setAlarm={setAlarm}
                temporaryMinError={temporaryMinError}
                temporaryMaxError={temporaryMaxError}
            />
        </div>
    );
}

export default App;
