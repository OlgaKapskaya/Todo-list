import {EditSpan} from "../EditSpan/EditSpan";
import React, {ChangeEvent, memo} from "react";
import {useDispatch} from "react-redux";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "../../bll/reducers/taskReducer";
import {FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup} from "@mui/material";
import {DeleteOutlineOutlined} from "@mui/icons-material";
import {TaskStatuses, TaskType} from "../../dal/todolists-api";



type TaskPropsType = {
    task: TaskType
    todolistID: string
}
export const Task = memo(({task, todolistID}: TaskPropsType) => {
    const [value, setValue] = React.useState<TaskStatuses>(task.status);
    // const task2 = useSelector<AppRootStateType, TaskType>(state => state.tasks[todolistID]
    //     .find(elem => elem.id === task.id) as TaskType)

    // const task2 = useSelector<AppRootStateType, TaskType>(state => state.tasks[todolistID]
    //     .filter(elem => elem.id === task.id)[0])


    const dispatch = useDispatch()

    const onChangeTaskTitle = (title: string) => {
        dispatch(changeTaskTitleAC(task.id, title, todolistID))
    }
    const onRemoveTask = () => {
        dispatch(removeTaskAC(task.id, todolistID))
    }
    const onChangeTaskStatus = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTaskStatusAC(task.id, +event.currentTarget.value, todolistID))
        setValue(+event.currentTarget.value)
    }
    return (
        <>
            <EditSpan title={task.title} onChangeText={onChangeTaskTitle}/>
            <IconButton onClick={onRemoveTask} size='small'>
                <DeleteOutlineOutlined/>
            </IconButton>
            <FormControl component="fieldset">
                <FormLabel component="legend">Status</FormLabel>
                <RadioGroup aria-label="status" name="status" value={value} onChange={onChangeTaskStatus}>
                    <FormControlLabel value={TaskStatuses.New} control={<Radio />} label="New" />
                    <FormControlLabel value={TaskStatuses.InProgress} control={<Radio />} label="In progress" />
                    <FormControlLabel value={TaskStatuses.Completed} control={<Radio />} label="Completed" />
                    <FormControlLabel value={TaskStatuses.Draft} control={<Radio />} label="Draft" />
                </RadioGroup>
            </FormControl>
        </>

    )
})