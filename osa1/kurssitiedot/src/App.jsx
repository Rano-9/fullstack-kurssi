const Header = ({course}) => (
    <h1>{course.name}</h1>
)

const Content = ({content}) => {
  const data = content.parts
  return (
  <div>{
    data.map(item => {
      return <Part name= {item.name} count={item.exercises}/>
    })
  }
  </div>
  )
}

const Part = ({name, exercises}) => {
  return ( <p>{name} {exercises}</p>)
}

const Total = (props) => {
  const data = props.content.parts
  const count = data.map((item) => item.exercises)
  const sum = count.reduce((curval,acc) => acc + curval,0)

  return (
    <p>Number of exercises {sum} </p>
  )
}

const App = () => {
  const course = {
    name  : 'Half Stack application development',
    parts :[
    {
      name : 'Fundamentals of React',
      exercises : 10,
    },
    {
      name :'Using props to pass data',
      exercises : 7
    },
    { 
      name : 'State of a component',
      exercises : 14
    }
    ]
  }

  return (
    <div>
      <Header course = {course}/>
      
      <Content content = {course}/>

      <Total content = {course}/>
      
      </div>
  )
}

export default App