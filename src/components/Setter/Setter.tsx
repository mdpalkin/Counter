import React, {memo, useCallback, useEffect, useState} from 'react';
import s from './Setter.module.css'
import SuperButton from "../SuperButton/SuperButton";
import ValueSettings from "./ValueSettings/ValueSettings";
import {useDispatch, useSelector} from "react-redux";
import {rootStateType} from "../../redux/store";
import {temporaryMaxSelector, temporaryMinSelector} from "../../redux/selectors";
import {
    setAlarm,
    setMaxCount,
    setMinCount,
    setTemporaryMax,
    setTemporaryMin
} from "../../redux/reducers/counter-reducer";


const Setter = memo(() => {

    const [isSetDisabled, setIsSetDisabled] = useState(true)

    const temporaryMin = useSelector<rootStateType, number>(temporaryMinSelector)
    const temporaryMax = useSelector<rootStateType, number>(temporaryMaxSelector)

    const dispatch = useDispatch()

    const temporaryMinError = temporaryMin < 0 || temporaryMin >= temporaryMax
    const temporaryMaxError = temporaryMax <= temporaryMin

    const setupAlarm = useCallback((alarm: string) => {
        dispatch(setAlarm(alarm))
    }, [dispatch])

    useEffect(()=> {
    if (temporaryMaxError || temporaryMinError) {
        setIsSetDisabled(true)
        setupAlarm("Incorrect value!")
    }}, [dispatch, setupAlarm, temporaryMinError, temporaryMaxError]
    )

    const setButtonHandler = useCallback(() => {
        dispatch(setMaxCount(temporaryMax))
        dispatch(setMinCount(temporaryMin))
        setIsSetDisabled(true)
        dispatch(setAlarm(""))
    }, [dispatch, temporaryMin, temporaryMax])

    const setupTemporaryMin = useCallback((newTemporaryMin: number) => {
        dispatch(setTemporaryMin(newTemporaryMin))
    }, [dispatch])

    const setupTemporaryMax = useCallback((newTemporaryMax: number) => {
        dispatch(setTemporaryMax(newTemporaryMax))
    }, [dispatch])

    return (
            <div className={s.setter}>
                <div className={s.inputsWrapper}>
                <ValueSettings title={"max value"} temporary={temporaryMax}
                               setTemporary={setupTemporaryMax}
                               setIdBtnDisable={setIsSetDisabled}
                               setAlarm={setupAlarm}
                               error={temporaryMaxError}
                />
                <ValueSettings title={"min value"}
                               temporary={temporaryMin}
                               setTemporary={setupTemporaryMin}
                               setIdBtnDisable={setIsSetDisabled}
                               setAlarm={setupAlarm}
                               error={temporaryMinError}
                />
                </div>
                <div className={s.buttonWrapper}>
                <SuperButton title={"set"} onClick={setButtonHandler} isDisabled={isSetDisabled}/>
                </div>
            </div>

    );
})

export default Setter;