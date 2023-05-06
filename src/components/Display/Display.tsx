import React from 'react';
import s from "./Display.module.css"


type DisplayPropsType = {
    count: number
    displayError: boolean
    alarm: string
}

const Display = (props: DisplayPropsType) => {

    const style = s.display + (props.displayError ? " " + s.error : " " + s.fine)
    const numberStyle = !props.alarm ? s.number : ""
    return (
        <div className={`${style} ${numberStyle}`}>
            {props.alarm || props.count}
        </div>
    );
};

export default Display;