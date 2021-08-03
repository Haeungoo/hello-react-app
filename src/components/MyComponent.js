import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyComponent.css';

class MyComponent extends Component {
    // 상태변수 선언
    state = {
        value : 0,
        message : '',
        messages : ['Angular', 'React', 'Vue', 'Ember'],
        isValidate : false
    };

    // Event Handler method 선언
    handleIncrease = () => {
        this.setState({
            value : this.state.value + 1
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleFocus = () => {
        this.setState({
            isValidate : true
        });
        this.myInput.focus();
    };

    handleKeyPress = (e) => {
            const { message, messages } = this.state;
            if(e.keyCode === 13){
            //if(e.key === 'Enter'){
                this.setState({
                    messages: messages.concat(message),
                    message: ''
                });
            }
    };

    handleDoubleClick = (index) => {
        this.setState({
            messages: this.state.messages.filter((msg,idx) => idx !== index)
        });
    }

    render() {
        //destructuring assignment
        const { name, age} = this.props;
        const { value, message, messages, isValidate } = this.state;
        const { handleIncrease, handleChange, handleFocus, handleKeyPress } = this;
        // const { setState } = this는 안됨! this.setState는 안됨

        const messageList = messages.map((msg, idx) => {
            return <li key={idx} onDoubleClick={() => this.handleDoubleClick(idx)}>{msg}</li>
        });

        return (
            <React.Fragment>
                <h3>Hello {name}! / {age}</h3>
                <div>
                    값 = {value} <br/>
                    <button onClick={handleIncrease}> 증가</button>
                    <button onClick={()=> (this.setState({value: value-1}))}> 감소</button>
                    <button onClick={()=> {this.setState({value: 0})}}> 초기화</button>
                </div>
                <br/>
                <div>
                    <button onClick={handleFocus}>포커스주기</button>
                    <p>입력한 Message = {message}</p>
                    <input type="text" name="message" value={message} 
                        onChange= {handleChange}
                        //onKeyPress= {handleKeyPress}
                        onKeyDown = {handleKeyPress}
                        className= {isValidate ?'success' : 'failure'}
                        ref= {(ref) => this.myInput = ref}
                        />
                    <ul>
                        {messageList}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}
MyComponent.defaultProps = {
    name:"리액트JS"
};
MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
};
export default MyComponent;
