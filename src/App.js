import React, { Component } from 'react';
import MyComponent from './components/MyComponent';
import MyComponentFunc from './components/MyComponentFunc';
import MyComponentHook from './components/MyComponentHook';

class App extends Component {
  // lifecycle method
  render() {
    return (
      <div>
         {/* <MyComponent name="ReactJS" age={100}/> */}
         <MyComponentHook/>
         {/* <MyComponentFunc name="함수형컴포넌트">
          <div>
             <h4>Child 엘리먼트</h4>
          </div>
         </MyComponentFunc>        */} 
      </div>
    );
  }
}

export default App;
