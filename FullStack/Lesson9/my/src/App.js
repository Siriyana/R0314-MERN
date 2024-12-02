import React from 'react';

/*const Student = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
    <p> Student {name}, is {age} years old</p>
    <p>You are probably born in {bornYear()}</p>
    </div>
  )
}*/

const App = (props) => {
  /*const now = new Date()
  const a = 10
  const b = 20 */
  /*const name = "Peter"
  const age = 25*/
  const {counter} = props

  return (
 /* <div>
    <h1>Hello world</h1>
    <p>It is now {now.toDateString()}</p>
    <p>{a} plus {b} = {a+b} </p>
  </div>*/
  /*<div>
    <h1>Student list: </h1>
    <Student name = "Lisa" age = {26+1} />
    <br></br>
    <Student name={name} age={age} />
  </div>*/
  <div>
    {counter}
  </div>
)};
export default App;

/*import logo from './logo.svg';
import './App.css';

function App() {
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

export default App;*/
