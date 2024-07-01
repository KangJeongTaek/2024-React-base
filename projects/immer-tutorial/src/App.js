import { useCallback, useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const nextId = useRef(1);
  const [form,setForm] = useState({name:'',username:''});
  const [data,setData] = useState({
    array : [],
    uselessValue : null
  });
  // input 수정을 위한 함수
  const onChange = useCallback(
    e => {
      const {name,value} = e.target;
      setForm({
        ...form,
        [name] : [value]
      });
    },
    [form]
  );

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    e =>{
      e.preventDefault();
      const info = {
        id:nextId.current,
        name:form.name,
        username:form.username
      };

      setData({
        ...data,
        array:data.array.concat(info)
      });

      setForm({
        name:'',
        username:''
      });
      nextId.current += 1
    },
    [data,form.name,form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    id =>{
      setData({
        ...data,
        array:data.array.filter(info => info.id !== id)
      });
    },
    [data]
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
