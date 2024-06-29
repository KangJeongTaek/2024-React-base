import TodoListItem from './TodoListItem';
import './TodoList.scss';

import React from 'react';

const TodoList = ({todos}) => {
    return (
        <div className='TodoList'>
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} />
            ))}
        </div>
    );
};

export default TodoList;