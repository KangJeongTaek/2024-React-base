import TodoTemplate from './componenets/TodoTemplate';
import './App.css';
import TodoInsert from './componenets/TodoInsert';
import TodoList from './componenets/TodoList';
import { useCallback, useReducer, useRef, useState } from 'react';

function createBulkTodos(){
  const array = [];
  for (let i = 1; i<=2500; i++){
    array.push({
      id:i,
      text : `할 일 ${i}`,
      checked:false,
    })
  }
  return array;
}
function todoReducer(todos,action){
  switch (action.type) {
    case 'INSERT':
      return todos.conat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo =>
        todo.id === action.id ? {...todo,checked:!todo.checked} : todo,
      )
    default:
      return todos;
  }
}

function App() {
  const [todos,dispatch] = useReducer(todoReducer,undefined,createBulkTodos);
  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);
  const OnInsert = useCallback(
    text =>{
      const todo = {
        id: nextId.current,
        text,
        checked:false,
      };
      dispatch({type:'INSERT',todo});
      nextId.current += 1;
    },
    [],
  );

  const onRemove = useCallback(
    id =>{
      dispatch({type:'REMOVE',id});
    },
    [],
  );

  const onToggle = useCallback(
    id =>{
      dispatch({type:'TOGGLE',id});
     }, [],
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={OnInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default App;
