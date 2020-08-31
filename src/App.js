import React, { useReducer } from 'react';
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
import UseReducerCounterOne7 from './components/useReducer/useReducerCounterOne7';
import UseReducerCounterTwo7 from './components/useReducer/UseReducerCounterTwo7';
import UseReducerCounterThree7 from './components/useReducer/useReducerCounterThree7';
import UseReducerUseContextA8 from './components/useReducer_useContext/UseReducer_UseContextA8';
import UseReducerUseContextB8 from './components/useReducer_useContext/UseReducer_UseContextB8';
import UseReducerUseContextC8 from './components/useReducer_useContext/UseReducer_UseContextC8';
import UseReducerDataFetching9One from './useReducerDataFetching/useReducerDataFetching9One';
import UseReducerDataFetching9Two from './useReducerDataFetching/UseReducerDataFetching9Two';
import ParentComponent from './components/useCallback/ParentComponent';
import CounterUseMemo10 from './components/useMemo/CounterUseMemo10';
import FoucsInputUseRef from './components/useRef/FoucsInputUseRef';
import ClassTimerUseRef from './components/useRef/ClassTimerUseRef';
import UseRefTimer from './components/useRef/useRefTimer';
import DocTitleOne from './components/customHooks/DocTitleOne';
import DocTitleTwo from './components/customHooks/DocTitleTwo';
import CounterOneNoHook from './components/customHooks/CounterOneNoHook';
import CounterTwoCustomHook from './components/customHooks/CounterTwoCustomHook';
import UserFormNoHook from './components/customHooks/UserFormNoHook';

export const UserContext = React.createContext();
export const LanguageContext = React.createContext();

export const CountContext = React.createContext();


/**This is the default single state object */
const initialState = 0

function init(initialCount) {
  return initialCount;
}


/** reducer functoon that takes state & action as a paramerter and return new 'state' object.
 * state: It stores the state object which we decalred above 'const initialState'
 * action: It store the action object what we need to pass throught dispach() function on any event handler
 * retrun: it returns new state object with updated values
*/
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1

    case 'reset':
      return initialState
    default:
      return state
  }
}



function App() {

  const [count, dispatch] = useReducer(reducer, initialState, init)

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
        <li>
          <h2>useReducer() Hook</h2>
          <UseReducerCounterOne7></UseReducerCounterOne7>
          <h2>useReducer() (complex state & action) with Multiple state object</h2>
          <UseReducerCounterTwo7></UseReducerCounterTwo7>
          <h2>Multiple useReducer() Hooks </h2>
          <UseReducerCounterThree7></UseReducerCounterThree7>
        </li>
        <li>
          <h2>useReducer() with useContext()</h2>
          <small> Here we are sharing the data from App.js to other Components using useReducer & useContext </small>
          <CountContext.Provider value={{ countStateFromApp: count, countDispatchFromAppComp: dispatch }}>
            Count value in App.js: {count}
            <UseReducerUseContextA8></UseReducerUseContextA8>
            <UseReducerUseContextB8></UseReducerUseContextB8>
            <UseReducerUseContextC8></UseReducerUseContextC8>
          </CountContext.Provider>
        </li>
        <li>
          <h2>Fetch data from API using useReducer() </h2>
          <small><i> Here we are just fetching data from API using useState and useEffect </i></small>
          <UseReducerDataFetching9One></UseReducerDataFetching9One>
          <small><i>Now, Here we are fetching data from API using useReducer and useEffect </i> </small>
          <UseReducerDataFetching9Two></UseReducerDataFetching9Two>
        </li>
        <li>
          <h2>useCallback() </h2>
          <ParentComponent></ParentComponent>
        </li>
        <li>
          <h2>useMemo() </h2>
          <small> Here we are setting loop to deplay in displaying the Counter One value. We are using useMemo() hook to
            display Counter One value, so Counter two will not delay to print his value because to while loop we are using for Counter One. </small>
          <CounterUseMemo10></CounterUseMemo10>
        </li>

        <li>
          <h2>useRef() </h2>
          <small>Here we are usign useRef for textbox to get focused on page load. </small>
          <FoucsInputUseRef></FoucsInputUseRef>
          <ClassTimerUseRef></ClassTimerUseRef>
          <UseRefTimer></UseRefTimer>
        </li>

        <li>
          <h2>Custom Hooks Document Title Example 1 </h2>
          <DocTitleOne></DocTitleOne>
          <DocTitleTwo></DocTitleTwo>

          <h2>Custom Hooks Counter Example 2 </h2>
          <CounterOneNoHook></CounterOneNoHook>
          <CounterTwoCustomHook></CounterTwoCustomHook>

          <h2>Custom Hooks Input Eleemnt Example 3 </h2>
          <UserFormNoHook></UserFormNoHook>
        </li>

      </ul>
    </div>
  );
}

export default App;
