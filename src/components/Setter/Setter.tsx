import React, {memo} from 'react';
import s from './Setter.module.css'
import SuperButton from "../SuperButton/SuperButton";
import ValueSettings from "./ValueSettings/ValueSettings";

type SetterType = {
    setMaxCount: (num: number) => void
    setMinCount: (num: number) => void
    minCount: number
    maxCount: number
    setButtonTitle: string
    temporaryMin: number
    temporaryMax: number
    isBtnAble: boolean
    setTemporaryMin: (num: number) => void
    setTemporaryMax: (num: number) => void
    setIsBtnDisable: (bool: boolean) => void
    setButtonHandler: () => void
    setAlarm: (text: string) => void
    temporaryMinError: boolean
    temporaryMaxError: boolean

}

const Setter = memo((props: SetterType) => {
    return (
            <div className={s.setter}>
                <div className={s.inputsWrapper}>
                <ValueSettings title={"max value"} temporary={props.temporaryMax}
                               setTemporary={props.setTemporaryMax}
                               setIdBtnDisable={props.setIsBtnDisable}
                               setAlarm={props.setAlarm}
                               error={props.temporaryMaxError}
                />
                <ValueSettings title={"min value"}
                               temporary={props.temporaryMin}
                               setTemporary={props.setTemporaryMin}
                               setIdBtnDisable={props.setIsBtnDisable}
                               setAlarm={props.setAlarm}
                               error={props.temporaryMinError}
                />
                </div>
                <div className={s.buttonWrapper}>
                <SuperButton title={props.setButtonTitle} onClick={props.setButtonHandler} isDisabled={props.isBtnAble}/>
                </div>
            </div>

    );
})

export default Setter;