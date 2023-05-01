import React from 'react';
import s from './Setter.module.css'
import SuperButton from "../SuperButton/SuperButton";
import SetValue from "./setValue/setValue";

type SetterType = {
    setMaxCount: (num: number) => void
    setCounter: (num: number) => void
    setButtonTitle: string
}

const Setter = (props: SetterType) => {

    const test = () => {
        props.setMaxCount(6)
    }

    let min = 0


    return (
        <div className={s.setter}>
            <SetValue title={"min value"} forChange={min}/>
            <SuperButton title={props.setButtonTitle} onClick={test} isDisabled={false}/>
        </div>
    );
};

export default Setter;