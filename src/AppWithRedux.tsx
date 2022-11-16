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
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./BLL/store";

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function AppWithRedux() {

    const todolist = useSelector<AppRootStateType, TodolistsType[]>(state => state.todolists)
    const dispatch = useDispatch()

    const addTodolist = (title: string) => {
        dispatch(AddTodolistActionCreator(title))
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
                        return (
                            <Grid item key={elem.id}>
                                <Paper style={{width: "230px", padding: "10px"}}
                                       variant={'outlined'}>
                                    <Todolist todolistID={elem.id}
                                              title={elem.title}
                                              filter={elem.filter}
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

export default AppWithRedux;
