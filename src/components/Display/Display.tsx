import React from 'react';
import s from "./Display.module.css"


type DisplayPropsType = {
    count: number
    maxCount: number
}

const Display = (props: DisplayPropsType) => {

    const style = props.count === props.maxCount ? s.error : s.fine

    return (
        <div className={style}>
            {props.count}
        </div>
    );
};

export default Display;