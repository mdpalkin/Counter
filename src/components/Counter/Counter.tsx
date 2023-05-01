import React from 'react';
import Display from "../Display/Display";
import SuperButton from "../SuperButton/SuperButton";
import s from "./Counter.module.css"

type CounterPropsType = {
    count: number
    setCount: (num: number) => void
    increment: () => void
    reset: () => void
    IsIncDisabled: boolean
    isResetDisabled: boolean
    maxCount: number
    resetButtonTitle: string
    incButtonTitle: string
}

const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <div className={s.display}>
            <Display count={props.count} maxCount={props.maxCount}/>
            </div>
            <div className={s.buttons}>
                <SuperButton isDisabled={props.IsIncDisabled} onClick={props.increment}
                             title={props.incButtonTitle}/>
                <SuperButton isDisabled={props.isResetDisabled} onClick={props.reset}
                             title={props.resetButtonTitle}/>
            </div>
        </div>
    );
};

export default Counter;