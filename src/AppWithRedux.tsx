import React, {useCallback} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {Input} from "./components/Imput";
import {
    AddTodolistActionCreator
} from "./BLL/reducers/todolistReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./BLL/store";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function AppWithRedux() {

    const todolist = useSelector<AppRootStateType, TodolistsType[]>(state => state.todolists)
    const dispatch = useDispatch()

    const addTodolist = useCallback((title: string) => {
        dispatch(AddTodolistActionCreator(title))
    }, [dispatch])


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
