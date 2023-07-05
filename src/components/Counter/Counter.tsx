import React, {memo, useCallback, useEffect} from 'react';
import Display from "../Display/Display";
import SuperButton from "../SuperButton/SuperButton";
import s from "./Counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {rootStateType} from "../../redux/store";
import {
    alarmSelector,
    currentCountSelector,
    maxCountSelector,
    minCountSelector
} from "../../redux/selectors";
import {setCurrentCount} from "../../redux/reducers/counter-reducer";


const Counter =  memo(() => {

    const minCount = useSelector<rootStateType, number>(minCountSelector)
    const maxCount = useSelector<rootStateType, number>(maxCountSelector)
    const currentCount = useSelector<rootStateType, number>(currentCountSelector)
    const alarm = useSelector<rootStateType, string>(alarmSelector)


    const dispatch = useDispatch()

    const increment = useCallback(() => {
        currentCount < maxCount && dispatch(setCurrentCount(currentCount + 1))
    }, [dispatch, currentCount, maxCount])

    const reset = useCallback(() => {
        dispatch(setCurrentCount(minCount))
    }, [dispatch, minCount])

    useEffect(() => {
        if (currentCount > maxCount || currentCount < minCount) {
            dispatch(setCurrentCount(minCount))
        }
    }, [dispatch, maxCount, minCount])

    const isIncDisabled = currentCount === maxCount || !!alarm
    const isResetDisabled = currentCount === minCount || !!alarm

    const displayError = (currentCount === maxCount && !alarm) || alarm === "Incorrect value!"

    return (
        <div className={s.counter}>
            <div className={s.display}>
            <Display count={currentCount} alarm={alarm}  displayError={displayError}/>
            </div>
            <div className={s.buttons}>
                <SuperButton isDisabled={isIncDisabled} onClick={increment}
                             title={"inc"}/>
                <SuperButton isDisabled={isResetDisabled} onClick={reset}
                             title={"reset"}/>
            </div>
        </div>
    );
})

export default Counter;