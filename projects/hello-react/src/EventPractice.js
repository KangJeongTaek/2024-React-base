import React, { useState} from 'react';


const EventPractice = () => {
    const [form,setForm] = useState({
        username :'',
        mesage:''
    });
    const {username,message} = form;
    const onChange = e =>{
        const nextForm = {
            ...form,// 기존의 form 내용을 이 자리에 복사 한 뒤
            [e.target.name] : e.target.value //원하는 값을 덮어씌우기
        };
        setForm(nextForm);
    };
    const onClick = () =>{
        alert(username + ':' + message);
        setForm({
            username:'',
            message:''
        })
    };
    const onKeyPress = (e) =>{
        if(e.key === 'Enter'){
            onClick();
        }
    };
    return (
        <div>
        <h1>이벤트연습</h1>
        <input
        type='text'
        name='username'
        placeholder='사용자명'
        onChange={onChange}
        />
        <input
        type='text'
        name='message'
        placeholder='메시지'
        onChange={onChange}
        onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>클릭</button>
        </div>
    );
};

export default EventPractice;