import React, {ChangeEvent, memo} from 'react';
import s from './ValueSettings.module.css'

type setValueType = {
    title: string
    setTemporary: (num:number) => void
    temporary: number
    setIdBtnDisable: (bool: boolean) => void
    setAlarm: (text: string) => void
    error: boolean
    conditionNumber: number

}

const ValueSettings = memo((props: setValueType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTemporary(+e.currentTarget.value)
        const condition  = props.title ==='max value'? +e.currentTarget.value> props.conditionNumber : +e.currentTarget.value< props.conditionNumber
    if( condition ) {
        props.setIdBtnDisable(false)
        props.setAlarm("Enter value and press 'set'")
    }
    }

    const style = s.numberInput + (props.error ? ` ${s.error}` : "")

    return (
        <div className={s.wrapper}>
            {props.title}:
            <input className={style} type={"number"} value={props.temporary} onChange={onChangeHandler}/>
        </div>
    );
})

export default ValueSettings