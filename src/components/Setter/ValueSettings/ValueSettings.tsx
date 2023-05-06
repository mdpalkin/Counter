import React, {ChangeEvent} from 'react';
import s from './ValueSettings.module.css'

type setValueType = {
    title: string
    setTemporary: (num:number) => void
    temporary: number
    setIdBtnDisable: (bool: boolean) => void
    setAlarm: (text: string) => void
    error: boolean

}

const ValueSettings = (props: setValueType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTemporary(+e.currentTarget.value)
        props.setIdBtnDisable(false)
        props.setAlarm("Enter value and press 'set'")
    }

    const style = s.numberInput + (props.error ? ` ${s.error}` : "")

    return (
        <div className={s.wrapper}>
            {props.title}:
            <input className={style} type={"number"} value={props.temporary} onChange={onChangeHandler}/>
        </div>
    );
};

export default ValueSettings