import {Checkbox, IconButton} from "@material-ui/core";
import {CropSquare, DeleteOutlineOutlined, Done} from "@material-ui/icons";
import {EditSpan} from "./components/EditSpan";
import React, {ChangeEvent, memo} from "react";
import {TaskType} from "./Todolist";
import {useDispatch} from "react-redux";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./BLL/reducers/taskReducer";



type TaskPropsType = {
    task: TaskType
    todolistID: string
}
export const Task = memo(({task, todolistID}: TaskPropsType) => {

    // const task2 = useSelector<AppRootStateType, TaskType>(state => state.tasks[todolistID]
    //     .find(elem => elem.id === task.id) as TaskType)

    // const task2 = useSelector<AppRootStateType, TaskType>(state => state.tasks[todolistID]
    //     .filter(elem => elem.id === task.id)[0])

    const dispatch = useDispatch()
    const onChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTaskStatusAC(task.id, e.currentTarget.checked, todolistID))
    }
    const onChangeTaskTitle = (title: string) => {
        dispatch(changeTaskTitleAC(task.id, title, todolistID))
    }
    const onRemoveTask = () => {
        dispatch(removeTaskAC(task.id, todolistID))
    }

    return (
        <>
            <Checkbox checked={task.isDone}
                      onChange={onChangeTaskStatus}
                      color='primary'
                      size='small'
                      icon={<CropSquare/>}
                      checkedIcon={<Done/>}
                      style={{padding: "0px"}}/>

            <EditSpan title={task.title} onChangeText={onChangeTaskTitle}/>
            <IconButton onClick={onRemoveTask} size='small'>
                <DeleteOutlineOutlined/>
            </IconButton>
        </>

    )
})