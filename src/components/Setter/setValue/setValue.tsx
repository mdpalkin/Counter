import React, {ChangeEvent, useState} from 'react';

type setValueType = {
    title: string
    forChange: number
}

const SetValue = (props: setValueType) => {

    const [value, setValue] = useState(0)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
        props.forChange = +e.currentTarget.value
        console.log(props.forChange)
    }

    return (
        <div>
            {props.title}:
            <input type="number" value={value} onChange={onChangeHandler}/>
        </div>
    );
};

export default SetValue;