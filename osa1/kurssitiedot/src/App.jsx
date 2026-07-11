const Header = (props) => (
    <h1>{props.course}</h1>
)

const Content = (props) => {
  const data = props.content
  return (
  <div>{
    data.map(item => {
      return <Part name= {item.name} count={item.count}/>
    })
  }
  </div>
  )
}

const Part = (props) => {
  return ( <p>{props.name} {props.count}</p>)
}

const Total = (props) => {
  const data = props.content
  const count = data.map((item) => item.count)
  const sum = count.reduce((curval,acc) => acc + curval,0)

  return (
    <p>Number of exercises {sum} </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  const content1 = {"name": part1,"count":exercises1}
  const content2 = {"name": part2,"count":exercises2}
  const content3 = {"name": part3,"count":exercises3}

  const content = [content1,content2,content3]

  return (
    <div>
      <Header course = {course}/>
      
      <Content content = {content}/>

      <Total content = {content}/>
      
      </div>
  )
}

export default App