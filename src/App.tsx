import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type ObjectType = {
    title: string
    isOpen: boolean
    filter: FilterValuesType
    tasks: Array<TaskType>
    students: Array<string>
}
type TodolistType = ObjectType & {
    todolistID: string
}

function App() {

    const [todolist, setTodolist] = useState<Array<ObjectType>>([
        {
            title: "What to learn",
            filter: "all",
            isOpen: true,
            tasks: [
                {taskId: v1(), title: "HTML&CSS", isDone: true},
                {taskId: v1(), title: "JS", isDone: true},
                {taskId: v1(), title: "ReactJS", isDone: false},
                {taskId: v1(), title: "Rest API", isDone: false},
                {taskId: v1(), title: "GraphQL", isDone: false},
            ],
            students: [
                'Rick Kane',
                'Finnlay Bentley',
                'Samia North',
                'Isaac Morton',
                'Lily-Ann Clifford',
                'Thalia Park',
                'Sapphire Cruz',
                'Cieran Vazquez',
                'Anya Estes',
                'Dominika Field',
                'Rosanna Chung',
                'Safiyah Davey',
                'Ryley Beasley',
                'Kalvin Trejo',
                'Evie-Mae Farrell',
                'Juliet Valencia',
                'Astrid Austin',
                'Lyle Montgomery',
                'Nisha Mora',
                'Kylie Callaghan',
                'Star Wilks',
                'Marissa Colley',
                'Asa Fuller',
                'Leigh Kemp',
                'Avleen Dawson',
                'Sammy Bonilla',
                'Acacia Becker',
                'Coral Shepherd',
                'Melina Molina',
                'Kiran Bailey',
                'Clara Escobar',
                'Alexandru Horn',
                'Brandon-Lee Mercado',
                'Elouise Weston',
                'King Long',
                'Kerri Searle',
                'Kanye Hamer',
                'Elwood Benitez',
                'Mikail Whitaker',
                'Bobby Hardy',
                'Talha Ferry',
                'Priscilla Landry',
                'Olivia-Grace Cain',
                'Kiaan Wallace',
                'Wesley Padilla90',
                'Ella-Grace Wooten91',
                'Kaif Molloy92',
                'Kamal Broadhurst93',
                'Bianca Ferrell94',
                'Micheal Talbot95',
            ]
        },
        {

            title: "What to do",
            filter: "all",
            isOpen: false,
            tasks: [
                {taskId: v1(), title: "HTML&CSS2", isDone: true},
                {taskId: v1(), title: "JS2", isDone: true}
            ],
            students: [
                'Jago Wormald1',
                'Saul Milne2',
                'Aariz Hester3',
                'Dion Reeve4',
                'Anisa Ortega5',
                'Blade Cisneros6',
                'Malaikah Phelps7',
                'Zeeshan Gallagher8',
                'Isobella Vo9',
                'Rizwan Mathis10',
                'Menaal Leach11',
                'Kian Walton12',
                'Orion Lamb13',
                'Faizah Huynh14',
                'Crystal Vaughan15',
                'Vivien Hickman16',
                'Stuart Lu17',
                'Karol Davison18',
                'Dario Burns19',
                'Chloe Rich20',
                'Martyna Felix',
                'Nida Glass',
                'Maeve Miles',
                'Hasnain Puckett',
                'Ayman Cano',
                'Safwan Perry',
                'Fox Kelly',
                'Louise Barlow',
                'Malaki Mcgill',
                'Leanna Cline',
                'Willard Hodge',
                'Amelia Dorsey',
                'Kiah Porter',
                'Jeanne Daly',
                'Mohsin Armstrong',
                'Laurie Rangel',
                'Princess Tierney',
                'Kasim Kendall',
                'Darryl Cope',
                'Elysha Ray',
                'Liyana Harris',
                'Kashif Blackburn',
                'Atif Zimmerman',
                'Sila Hartley',
                'Ralphie Hebert',
            ]
        },
        {

            title: "What to buy",
            filter: "all",
            isOpen: false,
            tasks: [
                {taskId: v1(), title: "HTML&CSS2", isDone: true},
                {taskId: v1(), title: "JS2", isDone: true}
            ],
            students: [
                'Jago Wormald1',
                'Saul Milne2',
                'Aariz Hester3',
                'Dion Reeve4',
                'Anisa Ortega5',
                'Blade Cisneros6',
                'Malaikah Phelps7',
                'Zeeshan Gallagher8',
                'Isobella Vo9',
                'Rizwan Mathis10',
                'Menaal Leach11',
                'Kian Walton12',
                'Orion Lamb13',
                'Faizah Huynh14',
                'Crystal Vaughan15',
                'Vivien Hickman16',
                'Stuart Lu17',
                'Karol Davison18',
                'Dario Burns19',
                'Chloe Rich20',
                'Martyna Felix',
                'Nida Glass',
                'Maeve Miles',
                'Hasnain Puckett',
                'Ayman Cano',
                'Safwan Perry',
                'Fox Kelly',
                'Louise Barlow',
                'Malaki Mcgill',
                'Leanna Cline',
                'Willard Hodge',
                'Amelia Dorsey',
                'Kiah Porter',
                'Jeanne Daly',
                'Mohsin Armstrong',
                'Laurie Rangel',
                'Princess Tierney',
                'Kasim Kendall',
                'Darryl Cope',
                'Elysha Ray',
                'Liyana Harris',
                'Kashif Blackburn',
                'Atif Zimmerman',
                'Sila Hartley',
                'Ralphie Hebert',
            ]
        },
        {

            title: "What to change",
            filter: "all",
            isOpen: false,
            tasks: [
                {taskId: v1(), title: "HTML&CSS2", isDone: true},
                {taskId: v1(), title: "JS2", isDone: true}
            ],
            students: [
                'Jago Wormald1',
                'Saul Milne2',
                'Aariz Hester3',
                'Dion Reeve4',
                'Anisa Ortega5',
                'Blade Cisneros6',
                'Malaikah Phelps7',
                'Zeeshan Gallagher8',
                'Isobella Vo9',
                'Rizwan Mathis10',
                'Menaal Leach11',
                'Kian Walton12',
                'Orion Lamb13',
                'Faizah Huynh14',
                'Crystal Vaughan15',
                'Vivien Hickman16',
                'Stuart Lu17',
                'Karol Davison18',
                'Dario Burns19',
                'Chloe Rich20',
                'Martyna Felix',
                'Nida Glass',
                'Maeve Miles',
                'Hasnain Puckett',
                'Ayman Cano',
                'Safwan Perry',
                'Fox Kelly',
                'Louise Barlow',
                'Malaki Mcgill',
                'Leanna Cline',
                'Willard Hodge',
                'Amelia Dorsey',
                'Kiah Porter',
                'Jeanne Daly',
                'Mohsin Armstrong',
                'Laurie Rangel',
                'Princess Tierney',
                'Kasim Kendall',
                'Darryl Cope',
                'Elysha Ray',
                'Liyana Harris',
                'Kashif Blackburn',
                'Atif Zimmerman',
                'Sila Hartley',
                'Ralphie Hebert',
            ]
        }
    ])
    const [todo, setTodo] = useState<Array<TodolistType>>([])

    useEffect(() => {
        setTodo(todolist.map(elem => {
            return (
                {todolistID: v1(), ...elem}
            )
        }))
    }, [todolist])

    const collapseTodolist = (todolistID: string) => {
        setTodo(todo.map(elem => {
            return (
                elem.todolistID === todolistID ? {...elem, isOpen: true} :
                    elem.isOpen ? {...elem, isOpen: false} : elem
            )
        }))
    }
    const deleteStudent = (todolistID: string, name: string) => {
        setTodo(todo.map(elem => {
            return (
                elem.todolistID === todolistID ? {...elem, students: elem.students.filter(st => st !== name)} : elem
            )
        }))
    }

    function removeTask(taskID: string, todolistID: string) {
        let filteredTasks = todo.map(elem => {
            return (
                elem.todolistID === todolistID ? {...elem, tasks: elem.tasks.filter((t => t.taskId !== taskID))} : elem
            )
        })
        setTodo(filteredTasks);
    }

    function addTask(title: string, todolistID: string) {
        let task = {taskId: v1(), title: title, isDone: false};
        setTodo(todo.map(elem => {
            return (
                elem.todolistID === todolistID ? {...elem, tasks: [task, ...elem.tasks]} : elem
            )
        }))
    }

    const addStudent = (todolistID: string, name: string) => {
        setTodo(todo.map(elem => {
            return (
                elem.todolistID === todolistID ? {...elem, students: [name, ...elem.students]} : elem
            )
        }))
    }

    function changeTaskStatus(taskId: string, isDone: boolean, todolistID: string) {
        setTodo(todo.map(elem => {
            return (
                elem.todolistID === todolistID ? {
                    ...elem, tasks: elem.tasks.map(t => {
                        return (
                            t.taskId === taskId ? {...t, isDone: isDone} : t
                        )
                    })
                } : elem
            )
        }))
    }

    function changeFilter(value: FilterValuesType, todolistID: string) {
        setTodo(todo.map(elem => {
            return (
                elem.todolistID === todolistID ? {...elem, filter: value} : elem
            )
        }))
    }

    const removeTodolist = (todolistID: string) => {
        setTodo(todo.filter(elem => elem.todolistID !== todolistID))

    }
    const [title, setTitle] = useState("")
    const onChangeTitleTodolistHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const addTodolistHandler = (title: string) => {
        if (title.trim() !== ""){
            const newTodolist: TodolistType = {
                todolistID: v1(),
                title: title,
                filter: "all",
                isOpen: false,
                tasks: [],
                students: []
            }
            setTodo([newTodolist, ...todo])
        } else {
            alert('Error!!! Enter todolist title!')
        }

    }


    return (
        <div>
            <header>
                <div className={'containerAddTodolist'}>
                    <div className={'label'}> Enter todolist title:</div>
                    <input value={title} onChange={onChangeTitleTodolistHandler}/>
                    <button onClick={() => addTodolistHandler(title)}> ADD</button>
                </div>
            </header>
            <div className="App">

                {todo.map(elem => {
                    let tasksForTodolist = elem.tasks;

                    if (elem.filter === "active") {
                        tasksForTodolist = elem.tasks.filter(t => !t.isDone);
                    }
                    if (elem.filter === "completed") {
                        tasksForTodolist = elem.tasks.filter(t => t.isDone);
                    }
                    return (
                        <Todolist
                            key={elem.todolistID}
                            todolistID={elem.todolistID}
                            title={elem.title}
                            tasks={tasksForTodolist}
                            students={elem.students}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeTaskStatus}
                            filter={elem.filter}
                            removeTodolist={removeTodolist}
                            deleteStudent={deleteStudent}
                            addStudent={addStudent}
                            collapseTodolist={collapseTodolist}
                            isOpen={elem.isOpen}
                        />

                    )
                })}

            </div>
        </div>
    );
}

export default App;
