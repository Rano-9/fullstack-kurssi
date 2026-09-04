import { use } from 'react'
import { useState } from 'react'

const Button = ({onClick,text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticsLine = ({text,value}) => (
  <tr>
    <td>{text}</td> 
    <td>{value}</td>
  </tr>
)

const Statistics = ({good,neutral,bad}) => {
  
  { if (good+neutral+bad === 0) return <p>No feedback given</p> 
    else return ( 
  <table>
    <tbody>
      <StatisticsLine text={"good"} value={good}/>
      <StatisticsLine text={"neutral"} value={neutral}/>
      <StatisticsLine text={"bad"} value={bad}/>
      <StatisticsLine text={"all"} value={good+neutral+bad}/>
      <StatisticsLine text={"average"} value = {(good-bad)/(good+neutral+bad)}/>
      <StatisticsLine text={"positive"} value={(good/(good+neutral+bad)*100) + " %" }/>
    </tbody>
  </table>)
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
    <div>
      <h2>give feedback</h2>
      <Button
        text = "good"
        onClick={() => setGood(good + 1 )}
      />
      <Button
        text = "neutral"
        onClick={() => setNeutral(neutral + 1 )}
      />
      <Button
        text = "bad"
        onClick={() => {setBad(bad + 1 )}}
      />
    </div>
    <div>
      <h2>statistics</h2>      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
    </>
  )
}

export default App