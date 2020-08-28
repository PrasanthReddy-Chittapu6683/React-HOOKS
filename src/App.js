import React from 'react';
import ClassuseStateCounter1 from './components/useState/ClassuseStateCounter1'
import './App.css';
import HookuseStateCounter1 from './components/useState/HookuseStateCounter1';
import HookuseStateCounter2 from './components/useState/HookuseStateCounter2';
import HookuseStateObjectCounter3 from './components/useState/HookuseStateObjectCounter3';
import HookuseStateArrayCounter4 from './components/useState/HookuseStateArrayCounter4';
import UseEffectClassComponent5 from './components/useEffect/UseEffectClassComponent5';
import UseEffectFuncComponent5 from './components/useEffect/UseEffectFuncComponent5';
// import UseEffectFuncCompRunOnce5 from './components/UseEffectFuncCompRunOnce5';
import UserEffectMouseContainer from './components/useEffect/UserEffectMouseContainer';
import UseEffectIntervalHook5 from './components/useEffect/UseEffectIntervalHook5';
import UseEffectGetDataFeching5 from './components/useEffect/UseEffectGetDataFeching5';
import UseEffectPostDataFeching5 from './components/useEffect/UseEffectPostDataFeching5';
import ComponentC6 from './components/useContext/ComponentC6';

export const UserContext = React.createContext();
export const LanguageContext = React.createContext();
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
          <br />
          <small>useEffect with incorrect dependency (setInterval)</small>
          <UseEffectIntervalHook5></UseEffectIntervalHook5>

        </li>
        <li>
          <h2>useEffect GET HTTP call</h2>
          <UseEffectGetDataFeching5></UseEffectGetDataFeching5>
          <h2>useEffect POST HTTP call</h2>
          <UseEffectPostDataFeching5></UseEffectPostDataFeching5>
        </li>
        <li>
          <h2>React Contex & useContext() Hook</h2>
          <small>Hierary is ComponentC6 - ComponentE6 - ComponentF6</small><br />
          <small>Here we are passing the data from ComponentC6 to ComponentF6 with out passign to ComponentE6</small><br />
          <small> We are using Multi- Context object </small>

          <UserContext.Provider value={'Hey PRCV, Am displaying this text using UserContext.Provider'}>
            <LanguageContext.Provider value={'Am displaying this text from LanguageContext.Provider'}>
              <ComponentC6></ComponentC6>
            </LanguageContext.Provider>
          </UserContext.Provider>
        </li>

      </ul>
    </div>
  );
}

export default App;
