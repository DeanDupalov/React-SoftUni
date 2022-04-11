import React from 'react';

import TodoListItem from './TodoListItem';



function TodoList() {
    let [count, setCount] = React.useState(0);
    let [name, setName] = React.useState('');

    const clickHandler = (e) => {
        console.log(e);
        setCount(count + 1)

    };

    const inputChangeHandler = (e) => {
        setName(e.target.value);
    };

    return (
        <>
            {/* <ul>
                {todos.map(todo => <TodoListItem>{todo}</TodoListItem>)}

            </ul> */}

            {name &&  <h2>Counter - {name}</h2>}
            {name ||  <h2>No Name</h2>}
           
            {/* тернарен оператор е експрешън */}
            {name == 'Daniel'
                ? <h3>He is the best!</h3>
                : <h3>Nah!</h3>
            }

            <TodoListItem>{count}</TodoListItem>

            <button onClick={clickHandler}>+</button>
            <button onClick={() => setCount(0)}>Reset</button>


            <label htmlFor="inputName">
                Change Name
                <input type="text" onBlur={inputChangeHandler} id="inputName" />
            </label>
        </>
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