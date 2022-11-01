import React, {useReducer, useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {Input} from "./components/Imput";
import {AppBar, Button, IconButton, Typography, Toolbar, Container, Paper, Grid} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    AddTodolistActionCreator,
    ChangeTodolistFilterActionCreator, ChangeTodolistTitleActionCreator, RemoveTodolistActionCreator,
    todolistReducer
} from "./BLL/reducers/todolistReducer";

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {
    let todolistID1 = v1();
    let todolistID2 = v1();

    const [todolist, todolistDispatch] = useReducer(todolistReducer, [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
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
        let filteredTasks = tasks[todolistID].filter(t => t.id !== taskID);
        setTasks({...tasks, [todolistID]: filteredTasks});
    }

    function addTask(title: string, todolistID: string) {
        let task = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistID]: [task, ...tasks[todolistID]]});
    }

    function changeTaskStatus(taskId: string, isDone: boolean, todolistID: string) {
        setTasks({
            ...tasks, [todolistID]: tasks[todolistID].map(elem => {
                return elem.id === taskId ? {...elem, isDone: isDone} : elem
            })
        })

    }

    function changeFilter(value: FilterValuesType, todolistID: string) {
        todolistDispatch(ChangeTodolistFilterActionCreator(todolistID, value))
    }

    const addTodolist = (title: string) => {
        let newID = v1()
        todolistDispatch(AddTodolistActionCreator(newID, title))
        setTasks({...tasks, [newID]: []})
    }
    const changeTodolistTitle = (title: string, todolistID: string) => {
        todolistDispatch(ChangeTodolistTitleActionCreator(todolistID, title))
    }
    const changeTaskTitle = (title: string, todolistID: string, taskID: string) => {
        setTasks({
            ...tasks, [todolistID]: tasks[todolistID].map(elem => {
                return (
                    elem.id === taskID ? {...elem, title: title} : elem
                )
            })
        })
    }
    const deleteTodolist = (todolistID: string) => {
        todolistDispatch(RemoveTodolistActionCreator(todolistID))
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
                    {/*<Input*/}
                    {/*    addItem={addTodolist}*/}
                    {/*    label={"Enter todolist title"}/>*/}
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
                                    <Todolist todolistID={elem.id}
                                              title={elem.title}
                                              tasks={tasksForTodolist}
                                              removeTask={removeTask}
                                              changeFilter={changeFilter}
                                              addTask={addTask}
                                              changeTaskStatus={changeTaskStatus}
                                              filter={elem.filter}
                                              changeTodolistTitle={changeTodolistTitle}
                                              changeTaskTitle={changeTaskTitle}
                                              deleteTodolist={deleteTodolist}
                                    />
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
