import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
// npm start
export type TaskType = {
    id: number
    title: string
    isDone: boolean
};
export type FilterValuesType = "all" | "active" | "completed";

function App() { //jsx
    const arraySet = useState<Array<TaskType>>(
        [
            {id: 1, title: "HTML&CSS", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "ReactJS", isDone: false},
            {id: 4, title: "rest api", isDone: false},
            {id: 5, title: "graphQL", isDone: false},

        ]
    );

    const tasks = arraySet[0];
    const setTasks = arraySet[1];

    const [filter, setFilter] = useState<FilterValuesType>("all");

    function removeTask(taskID: number) {
        const filteredTasks = tasks.filter(task => task.id !== taskID);
        setTasks(filteredTasks);

    };

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodoList = tasks;
    if (filter === "active") {
        tasksForTodoList = tasks.filter(task => task.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodoList = tasks.filter(task => task.isDone === true)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForTodoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />

        </div>
    );
}

export default App;
