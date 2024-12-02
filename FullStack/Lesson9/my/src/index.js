import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Display = ({ counter, color }) => {
  return (
    <>
      <h2 className={color}>Counter</h2>
      <div>{counter}</div>
    </>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <>
      <Display counter={counter} color="green" />
      Counter: {counter}
      <div></div>
      <button onClick={increaseByOne}>test</button>
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minut" />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
