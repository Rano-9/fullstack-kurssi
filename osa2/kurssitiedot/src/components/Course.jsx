import Total from "./Total"
import Part from "./Part"
import Header from "./Header"

const Course = ({course}) => {
  const data = course.parts
  return (
  <div>
    <Header course = {course}/>
    {
    data.map(item => {
      return <Part key = {item.id} name= {item.name} count={item.exercises}/>
    })
  }
    <Total course = {course}/>
  </div>
  )
}
export default Course