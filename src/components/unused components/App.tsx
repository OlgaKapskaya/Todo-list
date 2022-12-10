import React from 'react';
// import '../../App.css';
// import {Input} from "../Input/Input";
//
//
// import {
//     TasksStateType
// } from "../../bll/reducers/taskReducer";
// import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@mui/material";
// import {Menu} from "@mui/icons-material";
// import {useDispatch, useSelector} from "react-redux";
// import {AppRootStateType} from "../../bll/store";
// import {addTodolistAC} from "../../bll/reducers/todolistReducer";

//
// function App() {
//     const todolist = useSelector<AppRootStateType, TodolistsType[]>(state => state.todolists)
//     const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
//     const dispatch = useDispatch()
//     const addTodolist = (title: string) => {
//         dispatch(addTodolistAC(title))
//     }
//
//     return (
//         <div className="App">
//             <AppBar position="static">
//                 <Toolbar style={{justifyContent: "space-between"}}>
//                     <IconButton edge="start" color="inherit" aria-label="menu">
//                         <Menu/>
//                     </IconButton>
//
//                     <Typography variant="h6">
//                         Todolists
//                     </Typography>
//                     <Button color="inherit" variant={"outlined"}>Login</Button>
//                 </Toolbar>
//             </AppBar>
//             <Container>
//                 <Grid container style={{paddingTop: "10px", paddingBottom: '10px'}}> <Input
//                     addItem={addTodolist}
//                     label={"Enter todolist title"}/>
//                 </Grid>
//
//                 <Grid container spacing={2}>
//                     {todolist.map(elem => {
//                         let tasksForTodolist = tasks[elem.id];
//                         if (elem.filter === "active") {
//                             tasksForTodolist = tasks[elem.id].filter(t => !t.isDone);
//                         }
//                         if (elem.filter === "completed") {
//                             tasksForTodolist = tasks[elem.id].filter(t => t.isDone);
//                         }
//                         return (
//                             <Grid item key={elem.id}>
//                                 <Paper style={{width: "230px", padding: "10px"}}
//                                        variant={'outlined'}>
//                                     {/*<Todolist todolistID={elem.id}*/}
//                                     {/*          title={elem.title}*/}
//                                     {/*          tasks={tasksForTodolist}*/}
//                                     {/*          removeTask={removeTask}*/}
//                                     {/*          changeFilter={changeFilter}*/}
//                                     {/*          addTask={addTask}*/}
//                                     {/*          changeTaskStatus={changeTaskStatus}*/}
//                                     {/*          filter={elem.filter}*/}
//                                     {/*          changeTodolistTitle={changeTodolistTitle}*/}
//                                     {/*          changeTaskTitle={changeTaskTitle}*/}
//                                     {/*          deleteTodolist={deleteTodolist}*/}
//                                     {/*/>*/}
//                                 </Paper>
//                             </Grid>
//
//                         )
//                     })}
//                 </Grid>
//             </Container>
//         </div>
//     );
// }
//
// export default App;
