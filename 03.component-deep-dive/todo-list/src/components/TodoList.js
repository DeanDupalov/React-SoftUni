import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import TodoItem from './TodoItem'

export default function TodoList() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Clean my room' },
        { id: 2, text: 'Workout' },
        { id: 3, text: 'Wash the dishes' }
    ]);


    const listTasks = tasks.map((t, i) => <li key={i}>{t}</li>)

    useEffect(() => {
        console.log('Mounted');
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

    const deleteTodoItemHandler = (id) => {
       setTasks(oldTasks => oldTasks.filter(task => task.id != id))
    }

    return (
        <>
            <label htmlFor="task-name">
                Add Tasks
                <input type="text" id='task-name' onBlur={addTaskHandler} />
            </label>
            <ul>
                {tasks.map(t => <TodoItem key={t.id} task={t} deleteHandler={deleteTodoItemHandler} />)}
                {/* {tasks.map(t => <TodoItem key={t.id} task={t} deleteHandler={() => deleteTodoItemHandler(t.id)} />)} */}
            </ul>
        </>
    )
}