import React, {Reducer, useReducer} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {Input} from "./components/Imput";
import {AppBar, Button, IconButton, Typography, Toolbar, Container, Paper, Grid} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    AddTodolistActionCreator,
    ChangeTodolistFilterActionCreator,
    ChangeTodolistTitleActionCreator,
    RemoveTodolistActionCreator, TodolistActionFullType,
    todolistReducer
} from "./BLL/reducers/todolistReducer";
import {
    addTaskAC,
    changeTaskStatusAC,
    changeTaskTitleAC,
    removeTaskAC, TaskActionFullType,
    taskReducer,
    TasksStateType
} from "./BLL/reducers/taskReducer";

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();
    const [todolist, todolistDispatch] = useReducer<Reducer<TodolistsType[], TodolistActionFullType>>(todolistReducer, [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])
    const [tasks, dispatchTasks] = useReducer<Reducer<TasksStateType, TaskActionFullType>>(taskReducer, {
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(taskID: string, todolistID: string) {
        dispatchTasks(removeTaskAC(taskID, todolistID))
    }
    function addTask(title: string, todolistID: string) {
        dispatchTasks(addTaskAC(title, todolistID))
    }
    function changeTaskStatus(taskId: string, isDone: boolean, todolistID: string) {
        dispatchTasks(changeTaskStatusAC(taskId, isDone, todolistID))
    }
    function changeFilter(value: FilterValuesType, todolistID: string) {
        todolistDispatch(ChangeTodolistFilterActionCreator(todolistID, value))
    }
    const addTodolist = (title: string) => {
        const action = AddTodolistActionCreator(title)
        todolistDispatch(action)
        dispatchTasks(action)
    }
    const changeTodolistTitle = (title: string, todolistID: string) => {
        todolistDispatch(ChangeTodolistTitleActionCreator(todolistID, title))
    }
    const changeTaskTitle = (title: string, todolistID: string, taskID: string) => {
        dispatchTasks(changeTaskTitleAC(taskID, title, todolistID))
    }
    const deleteTodolist = (todolistID: string) => {
        let action = RemoveTodolistActionCreator(todolistID)
        todolistDispatch(action)
        dispatchTasks(action)
    }

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar style={{justifyContent: "space-between"}}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>

                    <Typography variant="h6">
                        Todolists
                    </Typography>
                    <Button color="inherit" variant={"outlined"}>Login</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Grid container style={{paddingTop: "10px", paddingBottom: '10px'}}> <Input
                    addItem={addTodolist}
                    label={"Enter todolist title"}/>
                </Grid>

                <Grid container spacing={2}>
                    {todolist.map(elem => {
                        let tasksForTodolist = tasks[elem.id];
                        if (elem.filter === "active") {
                            tasksForTodolist = tasks[elem.id].filter(t => !t.isDone);
                        }
                        if (elem.filter === "completed") {
                            tasksForTodolist = tasks[elem.id].filter(t => t.isDone);
                        }
                        return (
                            <Grid item key={elem.id}>
                                <Paper style={{width: "230px", padding: "10px"}}
                                       variant={'outlined'}>
                                    {/*<Todolist todolistID={elem.id}*/}
                                    {/*          title={elem.title}*/}
                                    {/*          tasks={tasksForTodolist}*/}
                                    {/*          removeTask={removeTask}*/}
                                    {/*          changeFilter={changeFilter}*/}
                                    {/*          addTask={addTask}*/}
                                    {/*          changeTaskStatus={changeTaskStatus}*/}
                                    {/*          filter={elem.filter}*/}
                                    {/*          changeTodolistTitle={changeTodolistTitle}*/}
                                    {/*          changeTaskTitle={changeTaskTitle}*/}
                                    {/*          deleteTodolist={deleteTodolist}*/}
                                    {/*/>*/}
                                </Paper>
                            </Grid>

                        )
                    })}
                </Grid>
            </Container>
        </div>
    );
}

export default App;
