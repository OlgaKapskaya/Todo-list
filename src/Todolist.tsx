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

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todolistID: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistID: string) => void
    changeFilter: (value: FilterValuesType, todolistID: string) => void
    addTask: (title: string, todolistID: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistID: string) => void
    filter: FilterValuesType
    changeTodolistTitle: (title: string, todolistID: string) => void
    changeTaskTitle: (title: string, todolistID: string, taskID: string) => void
    deleteTodolist: (todolistID: string) => void
}

export function Todolist(props: PropsType) {

    const addTask = (title: string) => {
        props.addTask(title, props.todolistID);
    }


    const onAllClickHandler = () => props.changeFilter("all", props.todolistID);
    const onActiveClickHandler = () => props.changeFilter("active", props.todolistID);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.todolistID);
    const editTitleTodolist = (title: string) => {
        props.changeTodolistTitle(title, props.todolistID)
    }
    const deleteTodolistHandler = () => {
        props.deleteTodolist(props.todolistID)
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
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.todolistID)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked, props.todolistID);
                    }
                    const onChangeTaskTitle = (title: string) => {
                        props.changeTaskTitle(title, props.todolistID, t.id)
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
