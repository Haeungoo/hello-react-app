// rsc 단축키
import React, { useState, useRef} from 'react';
import './MyComponent.css';

const MyComponentHook = () => {
    // const [message, setMessage] = useState('');
    // const [username, setUsername] = useState('');
    
    // useState를 여러개를 사용하는 경우
    const [inputs, setInputs] = useState({
        message:'',
        username:''
    });
    const {message, username} = inputs;

    const handleChange = (e) => {
        setInputs({
            ...inputs,  // ...은 스프레드 연산자(spread operator)
            [e.target.name] : e.target.value
        });
    };

    const [value, setValue] = useState(0);
    const myInput = useRef(null);
    const [isValidate, setIsValidate] = useState(false);
    const handleFocus = () => {
        setIsValidate(true);
        myInput.current.focus();
    }

    return (
        <div>
            <p>Input Message = {message}</p>
            <input type="text" name="message" value={message} onChange={handleChange} 
                ref={myInput} className={isValidate? 'success': 'failure'}/>
            <button onClick={handleFocus}>Focus</button>
            <p>Input Username = {username}</p>
            <input type="text" name="username" value={username} onChange={handleChange}/>
            <div>
                Value = {value} <br/>
                <button onClick={()=> setValue(value + 1)}> Plus</button>
                <button onClick={()=> setValue(value - 1)}> Minus</button>
                <button onClick={()=> setValue(0)}> Reset</button>
            </div>    
        </div>
    );
};

export default MyComponentHook;