import React, {useCallback, useEffect} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Setter from "./components/Setter/Setter";
import {useDispatch, useSelector} from "react-redux";
import {
    setAlarm,
    setCurrentCount,
    setIsButtonDisable,
    setMaxCount,
    setMinCount,
    setTemporaryMax,
    setTemporaryMin
} from "./redux/reducers/counter-reducer";
import {rootStateType} from "./redux/store";

function App() {
    console.log('app')
    const minCount = useSelector<rootStateType, number>(state => state.counter.minCount)
    const maxCount = useSelector<rootStateType, number>(state => state.counter.maxCount)
    const currentCount = useSelector<rootStateType, number>(state => state.counter.currentCount)
    const temporaryMin = useSelector<rootStateType, number>(state => state.counter.temporaryMin)
    const temporaryMax = useSelector<rootStateType, number>(state => state.counter.temporaryMax)
    const isBtnDisable = useSelector<rootStateType, boolean>(state => state.counter.isBtnDisable)
    const alarm = useSelector<rootStateType, string>(state => state.counter.alarm)

    const dispatch = useDispatch()

    // Buttons Functions
    const increment = useCallback(() => {
        currentCount < maxCount && dispatch(setCurrentCount(currentCount + 1))
    }, [dispatch, currentCount, maxCount])

    const reset = useCallback(() => {
        dispatch(setCurrentCount(minCount))
    }, [dispatch, minCount])

    const setButtonHandler = useCallback(() => {
        dispatch(setMaxCount(temporaryMax))
        dispatch(setMinCount(temporaryMin))
        dispatch(setIsButtonDisable(true))
        dispatch(setAlarm(""))
    }, [dispatch, temporaryMin, temporaryMax])


    // Intermediary functions
    const setupTemporaryMin = useCallback((newTemporaryMin: number) => {
        dispatch(setTemporaryMin(newTemporaryMin))
    }, [dispatch])

    const setupTemporaryMax = useCallback((newTemporaryMax: number) => {
        dispatch(setTemporaryMax(newTemporaryMax))
    }, [dispatch])

    const setupIsBtnDisable = useCallback((newValue: boolean) => {
        dispatch(setIsButtonDisable(newValue))
    }, [dispatch])

    const setupAlarm = useCallback((alarm: string) => {
        dispatch(setAlarm(alarm))
    }, [dispatch])

    const setupMaxCount = useCallback((newMaxCount: number) => {
        dispatch(setMaxCount(newMaxCount))
    }, [dispatch])

    const setupMinCount = useCallback((newMinCount: number) => {
        dispatch(setMinCount(newMinCount))
    }, [dispatch])

    // Counter Value Control
    useEffect(() => {
        if (currentCount !== minCount || currentCount > maxCount) {
            dispatch(setCurrentCount(minCount))
        }
    }, [maxCount, minCount, dispatch])

    // Is buttons able?
    const isIncDisabled = currentCount === maxCount || !isBtnDisable
    const isResetDisabled = currentCount === minCount || !isBtnDisable
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
    const displayError = (currentCount === maxCount && !textAlarm) || textAlarm === "Incorrect value!"

    return (
        <div className={"wrapper"}>
            <Counter
                isResetDisabled={isResetDisabled}
                isIncDisabled={isIncDisabled}
                reset={reset}
                count={currentCount}
                increment={increment}
                incButtonTitle={incButtonTitle}
                resetButtonTitle={resetButtonTitle}
                alarm={textAlarm}
                displayError={displayError}

            />
            <Setter
                setMaxCount={setupMaxCount}
                setMinCount={setupMinCount}
                setButtonTitle={setButtonTitle}
                maxCount={maxCount}
                minCount={minCount}
                temporaryMin={temporaryMin}
                temporaryMax={temporaryMax}
                isBtnAble={isSetDisabled}
                setTemporaryMin={setupTemporaryMin}
                setTemporaryMax={setupTemporaryMax}
                setIsBtnDisable={setupIsBtnDisable}
                setButtonHandler={setButtonHandler}
                setAlarm={setupAlarm}
                temporaryMinError={temporaryMinError}
                temporaryMaxError={temporaryMaxError}
            />
        </div>
    );
}

export default App;
