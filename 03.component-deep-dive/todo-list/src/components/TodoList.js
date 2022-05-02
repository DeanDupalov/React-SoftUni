import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import TodoItem from './TodoItem';
import HobbyLIst from './HobbyList';

const API_URL = 'http://localhost:3030/jsonstore'

export default function TodoList() {
    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        fetch(`${API_URL}/todos`)
            .then(res => res.json())
            .then(result => {
                setTasks(Object.values(result))
            })
    }, []);

    const addTaskHandler = (e) => {
        let task = {
            id: uniqid(),
            text: e.target.value
        };

        setTasks(oldTasks => [
            ...oldTasks,
            task
        ]);

        e.target.value = ''
    };

    const deleteTodoItemHandler = (e, id) => {
        e.stopPropagation();
        setTasks(oldTasks => oldTasks.filter(task => task.id !== id))
    }
    const toggleTaskItemClickHandler = (id) => {
        setTasks(oldTasks => {
            let selectedTask = oldTasks.find(x => x.id === id);
            let selectedIndex = oldTasks.findIndex(x => x.id === id)
            let toggledTask = { ...selectedTask, isDone: !selectedTask.isDone };


            return [
                ...oldTasks.slice(0, selectedIndex),
                toggledTask,
                ...oldTasks.slice(selectedIndex + 1)
            ]

        });
    }

    return (
        <>
            <label htmlFor="task-name">
                Add Tasks
                <input type="text" id='task-name' onBlur={addTaskHandler} />
            </label>
            <ul>
                {tasks.map(task =>
                    <TodoItem
                        key={task.id}
                        task={task}
                        deleteHandler={deleteTodoItemHandler}
                        crossOnCLick={toggleTaskItemClickHandler}
                    />
                )}
                {/* {tasks.map(t => <TodoItem key={t.id} task={t} deleteHandler={() => deleteTodoItemHandler(t.id)} />)} */}
            </ul>

            <HobbyLIst title="My Hobbies">Test Children </ HobbyLIst>
        </>
    )
}