import TodoTemplate from './componenets/TodoTemplate';
import './App.css';
import TodoInsert from './componenets/TodoInsert';
import TodoList from './componenets/TodoList';
import { useState } from 'react';

function App() {
  const [todos,setTodos] = useState([
    {
      id :1,
      text:"react의 기초 알아보기",
      checked:true,
    },
    {
      id:2,
      text:'컴포넌트 스타일링 해보기',
      checked:true,
    },
    {
      id:3,
      text:'일정 관리 앱 만들기',
      checked:false,
    }
  ]);
  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList todos={todos}/>
    </TodoTemplate>
  );
}

export default App;
