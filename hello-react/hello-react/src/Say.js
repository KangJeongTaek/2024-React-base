import { useState } from "react";

const Say = () =>{
    const [message,setMessage] = useState('');
    const onClickEnter = () => setMessage("들어갑니다.");
    const onClickLeave = () => setMessage("떠납니다.");
    const [color,setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>

            <button onClick={() => setColor("red")}>빨간색</button>
            <button onClick={() => setColor("blue")}>파란색</button>
            <button onClick={() => setColor("black")}>검정색</button>
        </div>
    )
}
export default Say;