export default function TodoItem({
    deleteHandler,
    task
}) {
    return <li>{task.text} <button onClick={() => deleteHandler(task.id)}>X</button></li>
    // return <li>{task.text} <button onClick={deleteHandler}>X</button></li>
}