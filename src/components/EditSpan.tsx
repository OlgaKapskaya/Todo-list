import React, {ChangeEvent, KeyboardEvent, memo, useState} from 'react';
import {TextField} from "@mui/material";


type EditSpanType = {
    title: string
    onChangeText: (title: string) => void
}
export const EditSpan = memo((props: EditSpanType) => {
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const [text, setText] = useState("")


    const onEditMode = () => {
        setText(props.title)
        setIsEditMode(true)
    }

    const offEditMode = () => {
        setIsEditMode(false)
        changeText()
    }

    const changeText = () => {
        if (text !== "") {
            props.onChangeText(text)
            setIsEditMode(false)
        }
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            changeText()
            offEditMode()
        }
    }
    const onChangeTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
    }
    return (
        isEditMode ?
            <TextField value={text}
                       onBlur={offEditMode}
                       onChange={onChangeTextHandler}
                       onKeyPress={onKeyPressHandler}
                       autoFocus/>
            : <span onDoubleClick={onEditMode}> {props.title} </span>
    )
})


