import React from 'react';
import ClassuseStateCounter1 from './components/ClassuseStateCounter1'
import './App.css';
import HookuseStateCounter1 from './components/HookuseStateCounter1';
import HookuseStateCounter2 from './components/HookuseStateCounter2';
import HookuseStateObjectCounter3 from './components/HookuseStateObjectCounter3';
import HookuseStateArrayCounter4 from './components/HookuseStateArrayCounter4';
import UseEffectClassComponent5 from './components/UseEffectClassComponent5';
import UseEffectFuncComponent5 from './components/UseEffectFuncComponent5';
import UseEffectFuncCompRunOnce5 from './components/UseEffectFuncCompRunOnce5';
import UserEffectMouseContainer from './components/UserEffectMouseContainer';

function App() {
  return (
    <div className="App">
      <h1>
        React JS Hooks Tutorial
      </h1>
      <ul>
        <li>
          <h2>useState - Hooks:</h2>
          <small>Class Components</small>
          <ClassuseStateCounter1 />
          <small>Functional Components</small>
          <HookuseStateCounter1></HookuseStateCounter1>
        </li>
        <li>
          <h2>useState with previous state:</h2>
          <small>Functional Components</small>
          <HookuseStateCounter2></HookuseStateCounter2>
        </li>
        <li>
          <h2>useState with object:</h2>
          <small>Functional Components</small>
          <HookuseStateObjectCounter3></HookuseStateObjectCounter3>
        </li>
        <li>
          <h2>useState with Array:</h2>
          <small>Functional Components</small>
          <HookuseStateArrayCounter4></HookuseStateArrayCounter4>
        </li>
        <li>
          <h2>useEffect</h2>
          <small>Class Component</small>
          <UseEffectClassComponent5></UseEffectClassComponent5>
          <small>Function Component</small>
          <UseEffectFuncComponent5></UseEffectFuncComponent5>

          {/* <UseEffectFuncCompRunOnce5></UseEffectFuncCompRunOnce5> */}
          <small>Calling UseEffectFuncCompRunOnce5 component using  UserEffectMouseContainer component which helps to clean up </small>
          <small> ON clicking the Toggel button we are un mouting the  UseEffectFuncCompRunOnce5 component which is having mousemove event listener.</small>
          <UserEffectMouseContainer></UserEffectMouseContainer>
        </li>
      </ul>
    </div>
  );
}

export default App;
