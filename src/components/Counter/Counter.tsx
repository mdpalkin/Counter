import React, {memo} from 'react';
import Display from "../Display/Display";
import SuperButton from "../SuperButton/SuperButton";
import s from "./Counter.module.css"

type CounterPropsType = {
    count: number
    increment: () => void
    reset: () => void
    isIncDisabled: boolean
    isResetDisabled: boolean
    resetButtonTitle: string
    incButtonTitle: string
    displayError: boolean
    alarm: string
}

const Counter =  memo((props: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <div className={s.display}>
            <Display count={props.count} alarm={props.alarm}  displayError={props.displayError}/>
            </div>
            <div className={s.buttons}>
                <SuperButton isDisabled={props.isIncDisabled} onClick={props.increment}
                             title={props.incButtonTitle}/>
                <SuperButton isDisabled={props.isResetDisabled} onClick={props.reset}
                             title={props.resetButtonTitle}/>
            </div>
        </div>
    );
})

export default Counter;