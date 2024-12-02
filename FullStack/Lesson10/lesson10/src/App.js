import React, { useState, useEffect } from "react";
import './styles.css'

const App = () => {
  //quotes is the state variables and setQuotes is the function to update the state variable
  const [quotes, setQuotes] = useState([])
  const[variable,setVariable] = useState([])

  //useEffect is a hook that runs after the first render and after every update
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
    .then ((result) => {
      console.log(result)
      return result.json();
    })
    .then ((data) => {
      console.log(data.quotes)
      setQuotes(data.quotes)
    });
  }, []);

  const QuotePrint = (props) => {
    return (
      <>
        <h1>{props.quote}</h1>
        <p>{props.author}</p>
      </>
    )
  }
  
  const handleChange = (props) =>{
    console.log(props.target.value);
    setVariable(props.target.value);
  }
  
  useEffect(() => {
    let quotesCopy = [...quotes]
    quotesCopy = quotesCopy.filter(data => data.quote.includes(variable))
    setQuotes(quotesCopy)
    
    }, [variable])

  return (
    <>
      <div>
        <h1>Quote List</h1>
        <form>
          <label>Search: </label>
          <input value={variable} type="text" onChange={handleChange}/>
        </form>
        {
          quotes?
            quotes.map(data => <QuotePrint author={data.author} quote={data.quote} />)
            : <div>Nothing here. Fetching data...</div>
        }
      </div>
    </>
  )
}

export default App;
