import styles from './TodoItem.module.css';

export default function TodoItem({
    deleteHandler,
    crossOnCLick,
    task
}) {
    return (
        <li onClick={() => crossOnCLick(task.id)} className={task.isDone ? styles['task-isDone'] : ''}>
            {task.text}
            <button onClick={(e) => deleteHandler(e, task.id)}>X</button>
        </li>
    );
    // return <li>{task.text} <button onClick={deleteHandler}>X</button></li>
}