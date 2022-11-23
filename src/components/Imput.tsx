import React, {ChangeEvent, KeyboardEvent, memo, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import s from './Input.module.css'


type InputProps = {
    addItem: (title: string) => void
    label: string
}

export const Input = memo((props: InputProps) => {
    const [title, setTitle] = useState("");
    const [isError, setIsError] = useState<boolean>(false)

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setIsError(false)
        if (e.key === "Enter") {
            addItem();
            setTitle("")
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title.trim());
            setTitle("");
        } else {
            setIsError(true)
        }
    }


    return (
        <div className={s.containerInput}>
            <TextField value={title}
                       onChange={onChangeHandler}
                       onBlur={() => setIsError(false)}
                       size={'small'}
                       label={props.label}
                       variant="outlined"
                       onKeyPress={onKeyPressHandler}
                       error={isError}
                       helperText={isError && 'Incorrect value!'}/>
            <IconButton onClick={addItem} size={"small"} style={{marginLeft: '5px'}}>
                <Add/>
            </IconButton>
        </div>
    )
})