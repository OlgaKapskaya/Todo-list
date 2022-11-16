import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {Input} from "./components/Imput";
import {EditSpan} from "./components/EditSpan";
import {
    Button,
    ButtonGroup,
    Checkbox,
    IconButton,
    List,
    ListItem,
    Typography
} from "@material-ui/core";
import {
    CropSquare,
    DeleteOutlineOutlined, Done
} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {
    addTaskAC,
    changeTaskStatusAC,
    changeTaskTitleAC,
    removeTaskAC,
    TasksStateType
} from "./BLL/reducers/taskReducer";
import {
    ChangeTodolistFilterActionCreator,
    ChangeTodolistTitleActionCreator,
    RemoveTodolistActionCreator
} from "./BLL/reducers/todolistReducer";
import {AppRootStateType} from "./BLL/store";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todolistID: string
    title: string
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    const dispatch = useDispatch()
    let tasks = useSelector<AppRootStateType, TaskType[]>(state => state.tasks[props.todolistID])
    if (props.filter === "active") {
        tasks = tasks.filter(t => !t.isDone);
    }
    if (props.filter === "completed") {
        tasks = tasks.filter(t => t.isDone);
    }

    const addTask = (title: string) => {
        dispatch(addTaskAC(title, props.todolistID))
    }


    const onAllClickHandler = () => dispatch(ChangeTodolistFilterActionCreator(props.todolistID, 'all'))
    const onActiveClickHandler = () => dispatch(ChangeTodolistFilterActionCreator(props.todolistID, 'active'))
    const onCompletedClickHandler = () => dispatch(ChangeTodolistFilterActionCreator(props.todolistID, 'completed'))
    const editTitleTodolist = (title: string) => {
        dispatch(ChangeTodolistTitleActionCreator(props.todolistID, title))
    }
    const deleteTodolistHandler = () => {
        dispatch(RemoveTodolistActionCreator(props.todolistID))
    }

    return <div >
        <Typography variant={'h5'}
                    color={'primary'}
                    style={{marginBottom: '10px', fontWeight: 'bold'}}>
            <EditSpan title={props.title} onChangeText={editTitleTodolist}/>
            <IconButton onClick={deleteTodolistHandler} size={"small"}>
                <DeleteOutlineOutlined/>
            </IconButton>
        </Typography>
        <div>
            <Input
                addItem={addTask}
                label={'Enter task title'}/>

        </div>
        <List>
            {
                tasks.map(t => {
                    const onClickHandler = () => dispatch(removeTaskAC(t.id, props.todolistID))
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        dispatch(changeTaskStatusAC(t.id, e.currentTarget.checked, props.todolistID))
                    }
                    const onChangeTaskTitle = (title: string) => {
                        dispatch(changeTaskTitleAC(t.id, title, props.todolistID))
                    }
                    return <ListItem key={t.id}
                                     className={t.isDone ? "is-done" : ""}
                                     style={{
                                         padding: "0px",
                                         justifyContent: "space-between",
                                         textDecoration: t.isDone ? "line-through" : 'none'
                                     }}>
                        <Checkbox checked={t.isDone}
                                  onChange={onChangeHandler}
                                  color={'primary'}
                                  size={'small'}
                                  icon={<CropSquare/>}
                                  checkedIcon={<Done/>}
                                  style={{padding: "0px"}}/>

                        <EditSpan title={t.title} onChangeText={onChangeTaskTitle}/>
                        <IconButton onClick={onClickHandler} size={'small'}>
                            <DeleteOutlineOutlined/>
                        </IconButton>
                    </ListItem>
                })
            }
        </List>
        <div>
            <ButtonGroup color={'primary'} size={'small'}>
                <Button variant={props.filter === 'all' ? "contained" : "outlined"}
                        onClick={onAllClickHandler}
                >
                    All
                </Button>
                <Button variant={props.filter === 'active' ? "contained" : "outlined"}
                        onClick={onActiveClickHandler}
                >
                    Active
                </Button>
                <Button variant={props.filter === 'completed' ? "contained" : "outlined"}
                        onClick={onCompletedClickHandler}
                >
                    Completed
                </Button>
            </ButtonGroup>
        </div>
    </div>
}
