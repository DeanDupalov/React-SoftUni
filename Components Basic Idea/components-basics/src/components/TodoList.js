import React from 'react';

import TodoListItem from './TodoListItem';



function TodoList() {
    let [todos, setTodos] = React.useState([
        'Clean your Room! map',
        'Go shopping',
        'Learn React'
    ]);

    return (
        <ul>
            {todos.map(todo => <TodoListItem>{todo}</TodoListItem>)}

        </ul>
    );
}


//class component demo

// class TodoList extends React.Component {
//     render() {
//         return (
//             <ul>
//                 <li>Clean you room</li>
//                 <li>Go shopping</li>
//                 <li>Learn React</li>
//             </ul>
//         );
//     }
// }
export default TodoList;