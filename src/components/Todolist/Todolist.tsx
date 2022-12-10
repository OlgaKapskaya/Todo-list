import React, {memo, useCallback} from 'react';
import {Input} from "../Input/Input";
import {EditSpan} from "../EditSpan/EditSpan";

import {useDispatch, useSelector} from "react-redux";
import {addTaskAC,} from "../../bll/reducers/taskReducer";

import {AppRootStateType} from "../../bll/store";
import {Task} from "../Task/Task";
import {Button, IconButton, List, ListItem, Typography} from "@mui/material";
import {DeleteOutlineOutlined} from "@mui/icons-material";
import {
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    FilterValuesType,
    removeTodolistAC
} from "../../bll/reducers/todolistReducer";
import {TaskStatuses, TaskType} from "../../dal/todolists-api";

type PropsType = {
    todolistID: string
    title: string
    filter: FilterValuesType
}

export const Todolist = memo((props: PropsType) => {

    const dispatch = useDispatch()
    let tasks = useSelector<AppRootStateType, TaskType[]>(state => state.tasks[props.todolistID])
    if (props.filter === 'active') {
        tasks = tasks.filter(t => t.status === TaskStatuses.New);
    }
    if (props.filter === 'completed') {
        tasks = tasks.filter(t => t.status === TaskStatuses.Completed);
    }

    const addTask = useCallback((title: string) => {
        dispatch(addTaskAC(title, props.todolistID))
    }, [dispatch, props.todolistID])


    const onAllClickHandler =  useCallback(() =>dispatch(changeTodolistFilterAC(props.todolistID, 'all')),[dispatch, props.todolistID])
    const onActiveClickHandler = useCallback(() => dispatch(changeTodolistFilterAC(props.todolistID, 'active')),[dispatch, props.todolistID])
    const onCompletedClickHandler = useCallback(() => dispatch(changeTodolistFilterAC(props.todolistID, 'completed')),[dispatch, props.todolistID])
    const editTitleTodolist = useCallback((title: string) => {
        dispatch(changeTodolistTitleAC(props.todolistID, title))
    },[dispatch, props.todolistID])
    const deleteTodolistHandler = () => {
        dispatch(removeTodolistAC(props.todolistID))
    }




    return <div >
        <Typography variant={'h5'}
                    color='primary'
                    style={{marginBottom: '10px', fontWeight: 'bold'}}>
            <EditSpan title={props.title} onChangeText={editTitleTodolist}/>
            <IconButton onClick={deleteTodolistHandler} size='small'>
                <DeleteOutlineOutlined/>
            </IconButton>
        </Typography>
        <div>
            <Input
                addItem={addTask}
                label='Enter task title'/>
        </div>
        <List>
            {
                tasks.map(t => {
                    return (
                    <ListItem key={t.id}
                              className={t.status === TaskStatuses.Completed ? "is-done" : ""}
                              style={{
                                  padding: '0px',
                                  justifyContent: 'space-between',
                                  textDecoration: t.status === TaskStatuses.Completed  ? 'line-through' : 'none'
                              }}>
                    <Task key={t.id} task={t} todolistID={props.todolistID}/>
                    </ListItem>
                    )
                })
            }
        </List>
        <div>
                <ButtonWithMemo onClick={onAllClickHandler}
                                title='All'
                                variant={props.filter === 'all' ? "contained" : "outlined"}
                                color='primary'/>
                <ButtonWithMemo onClick={onActiveClickHandler}
                                title='Active'
                                variant={props.filter === 'active' ? "contained" : "outlined"}
                                color='primary'/>

                <ButtonWithMemo title='Completed'
                                color='primary'
                                variant={props.filter === 'completed' ? "contained" : "outlined"}
                                onClick={onCompletedClickHandler}/>
        </div>
    </div>
})

type ButtonWithMemoPropsType = {
    variant?: 'text' | 'outlined' | 'contained' | undefined
    color?: 'default'
        | 'inherit'
        | 'primary'
        | 'secondary'
    onClick: () => void
    title: string
}

const ButtonWithMemo = memo((props: ButtonWithMemoPropsType) => {
    return (
        <Button variant={props.variant}
                onClick={props.onClick}
                size='small'
        >
            {props.title}
        </Button>
    )
})
