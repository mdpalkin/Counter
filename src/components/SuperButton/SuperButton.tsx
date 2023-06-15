import React, {memo} from 'react';
import s from "./SuperButton.module.css"


type SuperButtonType = {
    title: string
    onClick: () => void
    isDisabled: boolean
}

const SuperButton = memo((props: SuperButtonType) => {
    return (
        <div>
            <button
                className={s.btn}
                onClick={props.onClick}
                disabled={props.isDisabled}>
                {props.title}</button>
        </div>
    );
});

export default SuperButton;